import React from "react";
import { useNavigate } from "react-router";
import { Container, Row, Col} from 'react-bootstrap'
import styles from './styles/Profile.module.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "./store/product";

import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { MdDelete} from 'react-icons/md'
import { BsPen } from 'react-icons/bs'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// mui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';







// ********************** Render ************************



export default function Profile() {


  const navigate = useNavigate();

  const [customList, setCustom] = useState('');
  const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState("")
    const [handdelete,setDelete] = useState("")
   
  //  setup modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const dispatch = useDispatch()

  
 
  const state = useSelector((state) => state);
  console.log(state);
  if ( state.post.isLoading) {
    return <div className={styles.Loading}>Loading...</div>
  }

  const handleCreate = (e) => {

    e.preventDefault();
    console.log(title,description,tags);
  }

  

    
  // const handleDelete = () => {
    
  //   const jwtToken = localStorage.getItem("token")
  //   var options = {
  //       method:"DELETE",
  //       headers:{
  //           "accept": "*/*",
  //           "Authorization":"Bearer " + jwtToken,
  //       },
        
        
  //   };
  //   fetch("https://test-react.agiletech.vn/posts/" + id,options).then((response) => {
  //       response.json()
  //   })
  //   toast("Đã xoá sản phẩn thành công")
  
    
    
  // }
  const id = (state.post.data.posts.find((item) => item.id))
 
 const newId = id.id;
//  console.log(typeof(newId));
//  console.log(newId);

 
 



  const signOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  



  return (
    <>

   <Container className={styles.content} fluid>
    <Row className="d-flex justify-content-between">
      <Col xs={2} className={styles.color}>
    <div className={styles.nav_left}>

      <div className={styles.icons}>
          <div className={styles.icon1}></div>
          <div className={styles.icon2}></div>
      </div>
      <div className={styles.swapper}>
        <div className={styles.post}>Post</div>
        <div onClick={signOut} className={styles.button_logout}>sign out</div>
      </div>
    </div>
      </Col >
      <Col xs={9} className={styles.col_9}>
    <div className={styles.swaper_create}>
      <Link to='/addpost' className="text-decoration-none">
        <div className={styles.btn_create}>Add new</div>
      </Link>
      
      <div className="d-flex gap-5">
        <input type='text' className={styles.input} placeholder='Title' />
        <input type='text'  className={styles.input} placeholder='Tags' />
      </div>
      
    
    </div>
   <div className={styles.padding_right}>
     <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Tags</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.post.data.posts.map((item,index) => (
          <tr className="text-center" >
            <td>{index+1}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.tags}</td>
            <td>
              <BsPen />
              <MdDelete className={styles.delete} value={handdelete}  />
              
              </td>
          </tr>
          ))}
          
        </tbody>
      </Table>
   </div>
      </Col>
    </Row>


   </Container>



  

   
    </>
  );
}