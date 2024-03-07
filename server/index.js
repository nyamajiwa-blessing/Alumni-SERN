import express from "express";
import cors from "cors";
import { adminRouter } from "./Routes/AdminRoutes.js";


const app = express();

// const corsOptions = {
//     origin: 'http://localhost:5173',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
// };

// app.use(cors(corsOptions));

app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET,HEAD,PUT,PATCH,POST,DELETE'],
    credentials: true,
}));

app.use(express.json())

app.use("/auth", adminRouter);
// app.use(express.static('Public'));
app.use('/Public', express.static('Public'));

app.listen(3000, () => {
    console.log("server is running")
})
