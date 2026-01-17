import React from 'react';
import './App.css';
import { auth, db} from './firebase/init';
import {collection, addDoc, getDocs, getDoc, doc, query,  updateDoc, deleteDoc } from "firebase/firestore";
import { 
  createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged,
 } from 'firebase/auth';


function App() {
  const [user, setUser] = React.useState({});
 const [loading, setLoading] = React.useState(true);

async function updatePost() {
  const hardcodedId = "Gtlh42ImX3XRIVAAg3zh";
  const postRef = doc(db, "posts", hardcodedId);
 const post = await getPostById(hardcodedId);
 console.log(post);
  const newpost = {
   ...post
    title: "Land a $400k job"
   };
   console.log(newpost);
   updateDoc(postRef, newPost);
 }
function deletePost() {
   const hardcodedId = "Gtlh42ImX3XRIVAAg3zh";
  const postRef = doc(db, "posts", hardcodedId);
  deleteDoc(postRef);
}
 function createPost() {
  const post = {
    title: "Finish Interview Section",
    description: "Do Frontend Simplified",
    uid: user.uid,

  };
   addDoc(collection(db, "posts"), post);
 }
 async  function getAllPosts(id) {
  const { docs } = await getDocs(collection(db, "posts", id));
  const posts = docs.map((elem) => ({...elem.data(), id: elem.id}));
  console.log(posts);
}
 async function getPostBy() {
    const hardcodedId = "Gtlh42ImX3XRIVAAg3zh";
    const postRef = doc(db, "posts", hardcodedId);
    const postSnap =  await getDoc(postRef);
    return postSnap.data();
    console.log(post);  
 }


async function getPostbyUid() {
  const postCollectionRef = await query(
   collection(db, "posts"),
    where("uid", "==", "1"))
    
    const { docs } = await getDocs(postCollectionRef);
    console.log(docs.map(doc => doc.data()));

  }

  React.useEffect(() => {
   onAuthStateChanged(auth, (user) => {
    setLoading(false);
     if (user) {
      setUser(user);
     }
    })
  }, []);
  function register() {
    createUserWithEmailAndPassword(auth, 'email@email.com', 'test123')
      .then((user) => {
        console.log(user)
      })
      .catch((error) => {
        console.log(error);
      })
  }
function login() {
signInWithEmailAndPassword(auth, 'email@email.com', 'test123')
 .then(({user}) => {
  console.log(user);
  setUser(user);
       //setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      })
}
function logout() {
  signOut(auth);
setUser({});

}
 
  
  return (
    <div className="App">
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      {loading ? 'loading...' : user.email}
      <button onClick={createPost}>Create Post</button>
      <button onClick={getAllPosts}>Get All Posts</button>
      <button onClick={getPostBy}>Get Post By Id</button>
      <button onClick={getPostbyUid}>Get Posts by Uid</button>
      <button onClick={updatePost}>Update Post</button>
      <button onClick={deletePost}>Delete Post</button> 
    </div>
  );
}

export default App;
