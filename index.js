import express from "express";
import bodyParser from "body-parser";
import userRoutes from './routes/users.js';

//initialize app
const app = express();

//Specify PORT
const PORT = 5000;

//initialize the Body Parser
app.use(bodyParser.json());
app.use('/users', userRoutes);

// Rout
app.get("/", (req, res) => res.send('Hello from HomePage.'));

//Listen for incoming request
app.listen(PORT, () => console.log(`Server is running on post: http//localhost:${PORT}`));