import { db } from "../firebase/firebaseConfig.js"
import { collection, addDoc , getDocs, deleteDoc,updateDoc, doc} from "firebase/firestore";


const userRef = collection(db,"users")

export const getUsers = async (req, res) => {
    const Users = await getDocs(userRef);
    const listUsers = [];
    Users.docs.map((doc)=>(listUsers.push({...doc.data(),id:doc.id})))
    res.send(listUsers);
}

export const createUser = async (req, res) => {
    const user = req.body;
    await addDoc(userRef,{ ...user});
    res.send(`User with the name ${user.FirstName} added to the database!`)
}

export const getUser = async (req, res) => {
    const Users = await getDocs(collection(db,"users"));
    const listUsers = [];
    Users.docs.map((doc)=>(listUsers.push({...doc.data(),id:doc.id})))
    const { id } = req.params;
    const FoundUser = listUsers.find((user) => user.id === id);
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
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const conDoc = doc(db, "users", id);
    const { FirstName, LastName, Age } = req.body;
    const newStatus = { FirstName:FirstName,LastName:LastName,Age:Age};
    await updateDoc(conDoc, newStatus);
    res.send(`user ${id} has been updated`)

}