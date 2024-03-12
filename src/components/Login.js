import React, { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, AuthErrorCodes, signOut } from 'firebase/auth';
import app from '../config/FirebaseConfig';
import { Contexttri } from './TriContext';
import { getDatabase, ref, set } from "firebase/database";
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Administration } from './Administration';


function Formulaire() {
 
  const [text, settext] = useState('');
  const [password, setPassword] = useState('');
  const [log, setlog] = useState("0");
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const[name, setname]=useState(" user's name");
  const[islog, setislog]=useState("");
  
  const [passworderror, setPassworderror]=useState("catch error");
  const[id, setid]=useState("");
  const db = getDatabase(app);
  
  const{data, update}=useContext(Contexttri);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Si l'utilisateur est connecté, mettez à jour la constante log et stockez les informations dans localStorage
        setlog("1");
        localStorage.setItem('userLoggedIn', '1');
        localStorage.setItem('userId', user.uid);
      } else {
        // Si l'utilisateur n'est pas connecté, assurez-vous que localStorage est également à jour
        localStorage.removeItem('userLoggedIn');
        localStorage.removeItem('userId');
        setlog('0');
      }
    });
  
    // Nettoyer l'effet lorsqu'il n'est plus nécessaire
    return () => unsubscribe();
  }, [auth]);
  

  const writeUserData=async ()=> {
    const db = getDatabase(app);
    await set(ref(db, 'users/name'), {
      username: "name"
    
    });
  }

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, text, password);
      const user=userCredential.user;
      console.log(user);
      // Signed up successfully
      if (user) {
        localStorage.setItem('userLoggedIn', '1');
        localStorage.setItem('userId', user.uid);

        await set(ref(db, 'users/' + user.uid), {
          username: name,
          userid: user.uid,
        });
      }
      
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error signing up:', errorCode, errorMessage);

      if (errorCode === AuthErrorCodes.EMAIL_EXISTS) {
        console.log('Setting email error: Email already exists');
        setPassworderror('Email already exists');
      } else {
        console.error('Error signing up:', errorCode, errorMessage);
      }
      
    }
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, emailLogin, passwordLogin);
      // Login up successfully
      const user = userCredential.user;
      if (user) {
        localStorage.setItem('userLoggedIn', '1');
        localStorage.setItem('userId', user.uid);

        const newuser = { ...data, id: user.uid };
        update(newuser);
      }
      
    } catch (error) {
      const errorCode = error.code;
     
      const errorMessage = error.message;   
      if (error.code === 'auth/wrong-password') {
        console.log('Setting password error: Wrong password');
        setPassworderror("Wrong password");
      } else {
        console.log('Setting generic password error');
        setPassworderror("wrong password/ email");
      }
      
      
    }
  };
  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('userLoggedIn');
      localStorage.removeItem('userId');
      setlog('0'); // Mettez à jour l'état log ici
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if(log==='1'){

  

  return (
    <div> 
        
       
        <button style={{ borderRadius:"10px" }}  onClick={()=>{
             handleLogout();
        }} >
DECONNECTER
        </button>
        <Administration/>

      </div>
    
  );}else if(log==="0") {
    
    
 return(

<div className="d-flex justify-content-center align-items-center vh-100">
   
      <Form   className="w-50" style={{ minWidth:"250px"  }} >
      <div>  <FontAwesomeIcon icon={faShoppingCart} size="2x" color="black" />  <h2> FIDELE-SHOPPING</h2> </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={emailLogin}  onChange={(e)=>{ setEmailLogin(e.target.value) }} type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={passwordLogin}  onChange={(e)=>{ setPasswordLogin(e.target.value) }} type="password" placeholder="Password" required />
        </Form.Group>

        <Button variant="primary"  onClick={()=>{ handleLogin() }} >
          Login
        </Button>
      </Form>
    </div>
    
     );
  }
}

export default Formulaire;