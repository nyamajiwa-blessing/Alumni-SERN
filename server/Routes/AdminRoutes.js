import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/Images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

// app.use(express.static('Public'));

router.post("/login", (req, res) => {
    const sql = "SELECT * from users Where email=? and password=?";
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({ loginStatus: false, Error: "Query Error" })
        if (result.length > 0) {
            const email = result[0].email;
            const token = jwt.sign({ role: "Admin", email: email }, "jwt_secret_key", { expiresIn: "1d" });
            res.cookie('token', token);

            return res.json({ loginStatus: true, userType: result[0].type, userId: result[0].id, userName: result[0].name })
        } else {
            return res.json({ loginStatus: false, Error: "Wrong Email or Password" })
        }
    })
})

router.post("/signup", (req, res) => {
    const sql = "INSERT INTO users(name,email,password,type) VALUES(?,?,?,?)";
    const { name, email, password, userType } = req.body;
    con.query(sql, [name, email, password, userType], (err, result) => {
        if (err) {
            console.error("Error executing SQL query:", err);
            return res.status(500).json({ error: "Query Error", signupStatus: false });
        }
        return res.json({ message: 'SignUp Successfull', userId: result.insertId, signupStatus: true });

    })
})

router.get("/counts", (req, res) => {
    const sql = `
        SELECT
            (SELECT COUNT(*) FROM forum_topics) AS forumCount,
            (SELECT COUNT(*) FROM careers) AS jobCount,
            (SELECT COUNT(*) FROM events) AS eventCount,
            (SELECT COUNT(*) FROM alumnus_bio) AS alumniCount;
    `;

    con.query(sql, (err, result) => {
        if (err) {
            console.error("Error executing SQL query:", err);
            return res.status(500).json({ error: "Query Error" });
        }

        // Extract counts from the result
        const counts = {
            forums: result[0].forumCount,
            jobs: result[0].jobCount,
            events: result[0].eventCount,
            alumni: result[0].alumniCount
        };

        // Send the counts to the client
        res.json(counts);
    });
});

router.get('/jobs', (req, res) => {
    // const sql = `
    //     SELECT c.*, u.name
    //     FROM careers c
    //     INNER JOIN users u ON u.id = c.user_id
    //     ORDER BY c.id DESC
    // `;
    const sql = `
    SELECT careers.*, users.name
    FROM careers
    INNER JOIN users ON careers.user_id = users.id
    ORDER BY careers.id DESC       
    `;

    con.query(sql, (err, result) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json({ error: 'Query Error' });
        }
        // Send the fetched job data to the client
        res.json(result);
    });
});


router.post('/managejob', (req, res) => {
    const { company, job_title, location, description } = req.body;

    const sql = 'INSERT INTO careers (company, job_title, location, description) VALUES (?, ?, ?, ?)';
    con.query(sql, [company, job_title, location, description], (err, result) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json({ error: 'Database Error' });
        }
        return res.json({ message: 'New job added successfully', jobId: result.insertId });
    });
});

router.put('/managejob', (req, res) => {
    const { id, company, job_title, location, description } = req.body;

    if (id) {
        const sql = 'UPDATE careers SET company=?, job_title=?, location=?, description=? WHERE id=?';
        con.query(sql, [company, job_title, location, description, id], (err, result) => {
            if (err) {
                console.error('Error executing SQL query:', err);
                return res.status(500).json({ error: 'Database Error' });
            }
            return res.json({ message: 'Job updated successfully' });
        });
    } else {
        return res.status(400).json({ error: 'Invalid Request: No ID provided for update' });
    }
});

router.delete('/jobs/:id', (req, res) => {
    const jid = req.params.id;

    const sql = 'DELETE FROM careers WHERE id= ?';

    con.query(sql, [req.params.id], (err, result) => {
        if (err) { return res.json({ Error: "Query Error" }) }
        return res.json({ message: 'Job deleted successfully' });
    })

});
router.get('/courses', (req, res) => {
    const sql = "SELECT * FROM courses";
    con.query(sql, (err, result) => {
        if (err) {
            return res.json({ Error: "Query Error" })
        }
        return res.json(result);
    })
});

router.delete('/courses/:id', (req, res) => {
    // const cid = req.params.id;

    const sql = 'DELETE FROM courses WHERE id= ?';

    con.query(sql, [req.params.id], (err, result) => {
        if (err) { return res.json({ Error: "Query Error" }) }
        return res.json({ message: 'Course deleted successfully' });
    })

});
router.post("/courses", (req, res) => {
    const sql = "INSERT INTO courses(course) VALUES(?)";
    con.query(sql, [req.body.course], (err, result) => {
        if (err) {
            console.error('Error executing SQL query:', err);

            return res.json({ Error: "Query Error" })
        }
        return res.json(result.insertId);
    })
})

router.put('/courses', (req, res) => {
    const { id, course } = req.body;
    if (id != "") {
        const sql = 'UPDATE courses SET course=? WHERE id=?';
        con.query(sql, [course, id], (err, result) => {
            if (err) {
                console.error('Error executing SQL query:', err);
                return res.status(500).json({ error: 'Database Error' });
            }
            return res.json({ message: 'Course Updated Successfully' });
        });
    } else {
        return res.status(400).json({ error: 'Invalid Request: No ID provided for update' });
    }
});

router.get("/events", (req, res) => {
    const sql = "SELECT events.*, COUNT(event_commits.id) AS commits_count FROM events LEFT JOIN event_commits ON events.id = event_commits.event_id GROUP BY events.id ORDER BY events.schedule DESC";

    con.query(sql, (err, result) => {
        if (err) {
            console.error("Error executing SQL query:", err);
            return res.status(500).json({ error: "Query Error" });
        }
        return res.json(result);
    });
});


router.post("/events", (req, res) => {
    const { title, content, schedule } = req.body;
    const sql = "INSERT INTO events (title, content, schedule) VALUES (?, ?, ?)";
    con.query(sql, [title, content, schedule], (err, result) => {
        if (err) {
            console.error("Error executing SQL query:", err);
            return res.status(500).json({ error: "Query Error" });
        }
        return res.json({ message: "Event Added Successfully" });
    });
});

router.put("/events", (req, res) => {
    const { id, title, content, schedule } = req.body;
    if (id) {
        const sql = "UPDATE events SET title=?, content=?, schedule=? WHERE id=?";
        con.query(sql, [title, content, schedule, id], (err, result) => {
            if (err) {
                console.error("Error executing SQL query:", err);
                return res.status(500).json({ error: "Query Error" });
            }
            return res.json({ message: "Event Updated Successfully" });
        });
    }
});

router.delete("/events/:id", (req, res) => {
    const eid = req.params.id;
    const sql = 'DELETE FROM events WHERE id=?';
    con.query(sql, [eid], (err, result) => {
        if (err) {
            console.error("Error executing SQL query:", err);
            return res.status(500).json({ error: "Query Error" });
        }
        return res.json({ message: 'Event Deleted Successfully' });
    })

})

router.post("/events/participate", (req, res) => {
    const { event_id, user_id } = req.body;
    const sql = "INSERT INTO event_commits (event_id,user_id) VALUES (?, ?)";
    con.query(sql, [event_id, user_id], (err, result) => {
        if (err) {
            console.error("Error executing SQL query:", err);
            return res.status(500).json({ error: "Query Error" });
        }
        return res.json({ message: "Participated" });
    });
});
router.post("/eventcommits/check", (req, res) => {
    const { event_id, user_id } = req.body;
    const sql = "SELECT * FROM event_commits where event_id=? AND user_id=?";
    con.query(sql, [event_id, user_id], (err, result) => {
        if (err) return res.json({ eventCommit: false, Error: "Query Error" })
        if (result.length > 0) {
            return res.json({ eventCommit: true })
        } else {
            return res.json({ eventCommit: false })
        }
    });
});

router.get("/forums", (req, res) => {
    // const sql = "SELECT forum_topics.*, COUNT(forum_comments.id) AS comments_count FROM forum_topics LEFT JOIN forum_comments ON forum_topics.id = forum_comments.topic_id GROUP BY forum_topics.id ORDER BY forum_topics.id DESC";
    const sql = "SELECT forum_topics.*, COUNT(forum_comments.id) AS comments_count, users.name AS created_by FROM forum_topics LEFT JOIN forum_comments ON forum_topics.id = forum_comments.topic_id LEFT JOIN users ON forum_topics.user_id = users.id GROUP BY forum_topics.id ORDER BY forum_topics.id DESC"
    con.query(sql, (err, result) => {
        if (err) {
            console.error("Error executing SQL query:", err);
            return res.status(500).json({ error: "Query Error" });
        }
        return res.json(result);
    });
});

router.delete("/forum/:id", (req, res) => {
    const eid = req.params.id;
    const sql = 'DELETE FROM forum_topics WHERE id=?';
    con.query(sql, [eid], (err, result) => {
        if (err) {
            console.error("Error executing SQL query:", err);
            return res.status(500).json({ error: "Query Error" });
        }
        return res.json({ message: 'Forum Deleted Successfully' });
    })
})


router.post("/topiccomments", (req, res) => {
    const { topic_id } = req.body;
    // const sql = "SELECT * FROM forum_comments WHERE topic_id = ?";
    const sql = "SELECT forum_comments.*, users.name AS name FROM forum_comments LEFT JOIN users ON forum_comments.user_id = users.id WHERE topic_id = ?";
    con.query(sql, [topic_id], (err, result) => {
        if (err) {
            console.error("Error executing SQL query:", err);
            return res.status(500).json({ error: "Query Error" });
        }
        return res.json(result);
    });
});

router.put("/view_forum/:id", (req, res) => {
    const { id } = req.params;
    const { comment } = req.body;
    if (id) {
        const sql = "UPDATE forum_comments SET comment=? WHERE id=?";
        con.query(sql, [comment, id], (err, result) => {
            if (err) {
                console.error("Error executing SQL query:", err);
                return res.status(500).json({ error: "Query Error" });
            }
            return res.json({ message: "Comment Updated Successfully" });
        });
    } else {
        return res.status(400).json({ error: "Invalid request" });
    }
});

router.post("/view_forum", (req, res) => {
    const { c, user_id, topic_id } = req.body;
    const sql = "INSERT INTO forum_comments (topic_id, comment, user_id) VALUES (?, ?, ?)";
    con.query(sql, [topic_id, c, user_id], (err, result) => {
        if (err) {
            console.error("Error executing SQL query:", err);
            return res.status(500).json({ error: "Query Error" });
        }
        return res.json(result);
    });
});


router.delete('/view_forum/:id', (req, res) => {
    // const cid = req.params.id;
    const sql = 'DELETE FROM forum_comments WHERE id= ?';
    con.query(sql, [req.params.id], (err, result) => {
        if (err) { return res.json({ Error: "Query Error" }) }
        return res.json({ message: 'Comment deleted successfully' });
    })
});


router.post('/manageforum', (req, res) => {
    const { title, userId, description } = req.body;

    const sql = 'INSERT INTO forum_topics (title, user_id, description) VALUES (?, ?, ?)';
    con.query(sql, [title, userId, description], (err, result) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json({ error: 'Database Error' });
        }
        return res.json({ message: 'New Forum added successfully', jobId: result.insertId });
    });
});

router.put('/manageforum', (req, res) => {
    const { title, description, id } = req.body;
    if (id) {
        const sql = 'UPDATE forum_topics SET title=?, description=? WHERE id=?';
        con.query(sql, [title, description, id], (err, result) => {
            if (err) {
                console.error('Error executing SQL query:', err);
                return res.status(500).json({ error: 'Database Error' });
            }
            return res.json({ message: 'Forum Topic Updated Successfully' });
        });
    } else {
        return res.status(400).json({ error: 'Invalid Request: No ID provided for update' });
    }
});


router.get("/users", (req, res) => {
    const sql = "SELECT * FROM users order by name asc";
    con.query(sql, (err, result) => {
        if (err) return res.json({ eventCommit: false, Error: "Query Error" })
        if (result.length > 0) {
            return res.json(result);
        } else {
            return res.json({ message: "No User Available" })
        }
    });
});


// router.post('/manageuser', (req, res) => {
//     const { name, email, password } = req.body;

//     const sql = 'INSERT INTO forum_topics (name, email, password) VALUES (?, ?, ?)';
//     con.query(sql, [title, userId, description], (err, result) => {
//         if (err) {
//             console.error('Error executing SQL query:', err);
//             return res.status(500).json({ error: 'Database Error' });
//         }
//         return res.json({ message: 'New Forum added successfully', jobId: result.insertId });
//     });
// });

router.put('/manageuser', (req, res) => {
    const { name, email, id, password, type } = req.body;
    if (id) {
        const sql = 'UPDATE users SET name=?, email=?, password=?,type=? WHERE id=?';
        con.query(sql, [name, email, password, type, id], (err, result) => {
            if (err) {
                console.error('Error executing SQL query:', err);
                return res.status(500).json({ error: 'Database Error' });
            }
            return res.json({ message: 'User Updated Successfully' });
        });
    } else {
        return res.status(400).json({ error: 'Invalid Request: No ID provided for update' });
    }
});

router.delete('/user/:id', (req, res) => {
    const sql = 'DELETE FROM users WHERE id= ?';
    con.query(sql, [req.params.id], (err, result) => {
        if (err) { return res.json({ Error: "Query Error" }) }
        return res.json({ message: 'User deleted successfully' });
    })
});

router.get("/gallery", (req, res) => {
    const sql = "SELECT * FROM gallery";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Error: "Query Error" })
        if (result.length > 0) {
            return res.json(result);
        } else {
            return res.json({ message: "No Image Available" })
        }
    });
});


// router.post('/gallery', upload.single('image'), (req, res) => {
//     const { about } = req.body;
//     const imagePath = req.file.path;

//     con.query('INSERT INTO gallery (image_path, about) VALUES (?, ?)', [imagePath, about], (err, result) => {
//         if (err) {
//             console.error('Error inserting into gallery:', err);
//             res.status(500).json({ error: 'An error occurred' });
//             return;
//         }
//         res.json({ message: 'Image uploaded successfully' });
//     });
// });

router.delete('/gallery/:id', (req, res) => {
    const id = req.params.id;

    con.query('DELETE FROM gallery WHERE id = ?', id, (err, result) => {
        if (err) {
            console.error('Error deleting from gallery:', err);
            res.status(500).json({ error: 'An error occurred' });
            return;
        }
        res.json({ message: 'Image deleted successfully' });
    });
});

router.post('/gallery', upload.single('image'), (req, res) => {
    try {
        const imagePath = req.file.path;
        const about = req.body.about;

        con.query('INSERT INTO gallery (image_path, about) VALUES (?, ?)', [imagePath, about], (err, result) => {
            if (err) {
                console.error('Error inserting into gallery:', err);
                res.status(500).json({ error: 'An error occurred' });
                return;
            }
            const insertedId = result.insertId;
            res.json({ message: 'Image uploaded successfully', id: insertedId, image_path: imagePath, about: about });
        });
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

router.get("/alumni", (req, res) => {
    const sql = "SELECT a.*,c.course,Concat(a.lastname,', ',a.firstname,' ',a.middlename) as name from alumnus_bio a inner join courses c on c.id = a.course_id order by Concat(a.lastname,', ',a.firstname,' ',a.middlename) asc";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Error: "Query Error" })
        if (result.length > 0) {
            return res.json(result);
        } else {
            return res.json({ message: "No Data Available" })
        }
    });
});

router.put('/viewalumni', (req, res) => {
    const { status, id } = req.body;
    const sql = 'UPDATE alumnus_bio SET status=? WHERE id=?';
    con.query(sql, [status, id], (err, result) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json({ error: 'Database Error' });
        }
        return res.json({ message: 'Status Updated Successfully' });
    });
});


router.get("/settings", (req, res) => {
    const sql = "SELECT * FROM system_settings";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Error: "Query Error" })
        if (result.length > 0) {
            return res.json(result);
        } else {
            return res.json({ message: "No Data Available" })
        }
    });
});



export { router as adminRouter }
