import express from "express";
import { createUser, getUsers, getUser, deleteUser, updateUser } from "../controller/users.js";

//Creates a new router object.
const router = express.Router();

// All routes in here are starting with /users
router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);


export default router;