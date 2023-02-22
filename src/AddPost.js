import React, { useState } from 'react'
import axios from 'axios'
import styles from './styles/addPost.module.css'
import { Container, Row, Col} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPost } from './store/product'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router";
import Table from 'react-bootstrap/Table';


const AddPost = () => {
    const jwtToken = localStorage.getItem("token")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState("")



    const dispatch = useDispatch()
    const navigate = useNavigate();
    // const handleSubmit = (values) => {
        
    //     console.log("form submit", values);

    //     const action = addPost(values);
    //     console.log(action);
    //     dispatch(action);
    // }
    // const data = []

    // const addPost = (e) => {
    //     e.preventDefault();
    //     fetch("https://test-react.agiletech.vn/posts", {
    //         method:"POST",
    //         headers:{
                
    //             "Authorization":"Bearer " + jwtToken,
                
    //         },
    //          data.push(title,description,tags),
    //         body: JSON.stringify(data)
    //     }).then((res) => {
    //         return res.json();
    //     }).then((resp) => {
    //         console.log(resp);
    //     }).catch((err) => {
    //         console.log(err.message);
    //     })
    // }


    const Create = () => {
        const data = {
            title: title,
            description: description,
            tags: tags
        }
        console.log(data);
        var options = {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer " + jwtToken,
            },
            body: JSON.stringify(data),
            
        };
        fetch("https://test-react.agiletech.vn/posts",options).then((response) => {
            response.json()
        })
        toast("Thêm sản phẩm thành công")

        
        
    }

    // const handleCreate = () => {
    //     var formData = {
    //         title: title,
    //         description: description,
    //         tags: tags
    //     }
    //     Create(formData)
    // }

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
        <Link to='/profile' onClick={e => dispatch(fetchPost())} className="text-decoration-none">
            <div className={styles.post} >Post</div>
        </Link>
        <div onClick={signOut} className={styles.button_logout}>sign out</div>
      </div>
    </div>
      </Col >
      <Col xs={9} className={styles.col_9}>
            {/* <div className={styles.swaper_create}>
            <input type='text' placeholder='title' value={title} onChange={e => setTitle(e.target.value)}/>
            <input type='text' placeholder='description' value={description} onChange={e => setDescription(e.target.value)}/>
            <input type='text' placeholder='tags' value={tags} onChange={e => setTags(e.target.value)}/>
            <button  onClick={Create}>submit</button>
            <hr/>
            <Link to='/profile'  onClick={e => dispatch(fetchPost())}>back</Link>
        <ToastContainer/>
            
            
            </div> */}

        <Table striped bordered hover>
        <thead>
          <tr className="text-center">
           
            <th>Title</th>
            <th>Description</th>
            <th>Tags</th>
           
          </tr>
        </thead>
        <tbody>
          
          <tr className="text-center" >
            <td>   <input type='text' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} className={styles.input}/></td>
            <td> <input type='text' placeholder='Description' value={description} onChange={e => setDescription(e.target.value)} className={styles.input}/></td>
            <td> <input type='text' placeholder='Tags' value={tags} onChange={e => setTags(e.target.value)} className={styles.input}/></td>
            
            
          </tr>
         
          
        </tbody>
      </Table>
      <div className='d-flex justify-content-center gap-4'>
          <button  onClick={Create} className={styles.btn_submit}>Tạo mới</button>
          {/* <Link to='/profile'  onClick={e => dispatch(fetchPost())} className={styles.btn_submit}>Trở về</Link> */}
            <ToastContainer/>
      </div>
   
      </Col>
    </Row>


   </Container>
    </>
  )
}

export default AddPost