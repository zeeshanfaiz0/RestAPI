import { db } from "../firebase/firebaseConfig.js"
// import { v4 as uuidv4 } from "uuid";
import { collection, addDoc , getDocs, deleteDoc,updateDoc, doc} from "firebase/firestore";
import { async } from "@firebase/util";


let users = [];
const userRef = collection(db,"users")

export const getUsers = async (req, res) => {
    const Users = await getDocs(userRef);
    Users.docs.map((doc)=>(users.push({...doc.data(),id:doc.id})))
    res.send(users);
}

export const createUser = async (req, res) => {
    const user = req.body;
    await addDoc(userRef,{ ...user});
    res.send(`User with the name ${user.FirstName} added to the database!`)
}

export const getUser = async (req, res) => {
    const Users = await getDocs(collection(db,"users"));
    Users.docs.map((doc)=>(users.push({...doc.data(),id:doc.id})))
    const { id } = req.params;
    const FoundUser = users.find((user) => user.id === id);
    res.send(FoundUser);
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
    }
    catch(err){
        console.log(err);
    }
    finally{
        res.send(`User with id ${id} deleted from the database!`)
    }
}
const getUserData = async (id) =>{
    const Users = await getDocs(collection(db,"users"));
    Users.docs.map((doc)=>(users.push({...doc.data(),id:doc.id})))
    const FoundUser = users.find((user) => user.id === id);
    return FoundUser;
}
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const conDoc = doc(db, "users", id);
    const { FirstName, LastName, Age } = req.body;
    // const user = getUserData(id);
    // debugger
    const newStatus = { FirstName:FirstName,LastName:LastName,Age:Age};
    await updateDoc(conDoc, newStatus);
    res.send(`user ${id} has been updated`)

}