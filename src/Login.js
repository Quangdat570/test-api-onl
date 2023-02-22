import { useNavigate } from "react-router";
import { fetchToken, setToken } from "./Auth";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from './styles/Login.module.css'
import { Container, Row, Col} from 'react-bootstrap'
import { fetchPost } from "./store/product";
import { useDispatch } from "react-redux";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
 
  

  //check to see if the fields are not empty
  
  const login = () => {
   
    
        if (username == "") {
          return;
        } else {
          // make api call to our backend. we'll leave thisfor later
          axios
            .post("https://test-react.agiletech.vn/auth/login", {
              username: username,
              
            })
            .then(function (response) {
              console.log(response, "response.data.token");
              if (response.data.accessToken) {
                setToken(response.data.accessToken);
                
                dispatch(fetchPost())
                navigate("/");
                toast("Đăng nhập thành công");
               
    
                
              }
            })
            .catch(function (error) {
              console.log(error, "error");
            });
        }
  };

  return (

    <>
    <Container className={styles.container_header}>
        <div>
        <div className={styles.icons}>
                    <div className={styles.icon1}></div>
                    <div className={styles.icon2}></div>
                </div>
        </div>
    </Container>
     <div style={{ minHeight: 800, marginTop: 30 }}>
       <div style={{ marginTop: 30 }}>
         {fetchToken() ? (
           <p>you are logged in</p>
           ) : (
             <div className={styles.swaper_login}>
             <div className={styles.title}>Sign In</div>
             <form className={styles.form}>
               <label htmlFor="username" className={styles.title_username}>Username</label>
               <input
                 type="text"
                 onChange={(e) => setUsername(e.target.value)}
                  className={styles.input}
               />

              

               <button type="button" onClick={login}  className={styles.btn_submit}>
                 Login
               </button>
              
             </form>
           </div>
         )}
       </div>
     </div>
     <ToastContainer/>
    </>


    // <>
    
    // <Container className={styles.container_header}>
    //     <div>
    //     <div className={styles.icons}>
    //                 <div className={styles.icon1}></div>
    //                 <div className={styles.icon2}></div>
    //             </div>
    //     </div>
    // </Container>

    // <Container className={styles.height}>
    //     <div className={styles.swaper_login}>
    //         <div className={styles.title}>Sign In</div>
    //         <form action="" className={styles.form}>
    //         <label htmlFor="username" className={styles.title_username}>Username</label>
    //         <input type="text" name="" id="username" className={styles.input}   onChange={(e) => setUsername(e.target.value)} />
    //         <button className={styles.btn_submit} onClick={login}>Sign In</button>
    //         </form>
    //     </div>
    // </Container>
    // </>
  );
}