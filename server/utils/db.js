import mysql from "mysql";

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "alumni_db"
})

con.connect((err) => {
    if (err) {
        console.log("Connection Error", err)
    } else {
        console.log("connected")
    }
})

export default con;
