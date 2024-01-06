import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const Product = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
    <main>
       <div class="head-title">
         <div class="left">
           <h1>Product</h1>
           <ul class="breadcrumb">
             <li>
               <a href="#">Product</a>
             </li>
             {/* <li><i class='bx bx-chevron-right' ></i></li> */}
             {/* <li>
               <a class="active" href="#">Home</a>
             </li> */}
           </ul>
         </div>
         <a href="#" className="btn-download">
            <i className='bx bxs-cloud-download' ></i>
            <span  variant="primary" onClick={handleShow}>
              Add Product
            </span>
          </a>
       </div>

       <ul class="box-info">
         <li>
           <i class='bx bxs-calendar-check' ></i>
           <span class="text">
             <h3>1020</h3>
             <p>New Product</p>
           </span>
         </li>
         <li>
           <i class='bx bxs-group' ></i>
           <span class="text">
             <h3>2834</h3>
             <p>Today Product</p>
           </span>
         </li>
         <li>
           <i class='bx bxs-dollar-circle' ></i>
           <span class="text">
             <h3>2543</h3>
             <p>Total Product</p>
           </span>
         </li>
       </ul>


       <div class="table-data">


         <div class="order">
           <div class="head">
             <h3>All Product</h3>
             <i class='bx bx-search' ></i>
             <i class='bx bx-filter' ></i>
           </div>
           <table>
             <thead>
               <tr>
                 <th>User</th>
                 <th>Date Order</th>
                 <th>Status</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td>
                   <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                   <p>John Doe</p>
                 </td>
                 <td>01-10-2023</td>
                 <td><span class="status completed">Completed</span></td>
               </tr>
               <tr>
                 <td>
                   <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                   <p>John Doe</p>
                 </td>
                 <td>01-10-2023</td>
                 <td><span class="status pending">Pending</span></td>
               </tr>
               <tr>
                 <td>
                   <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                   <p>John Doe</p>
                 </td>
                 <td>01-10-2023</td>
                 <td><span class="status process">Process</span></td>
               </tr>
               <tr>
                 <td>
                   <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                   <p>John Doe</p>
                 </td>
                 <td>01-10-2023</td>
                 <td><span class="status pending">Pending</span></td>
               </tr>
               <tr>
                 <td>
                   <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                   <p>John Doe</p>
                 </td>
                 <td>01-10-2023</td>
                 <td><span class="status completed">Completed</span></td>
               </tr>
             </tbody>
           </table>
         </div>









         <div class="todo">
           <div class="head">
             <h3>Todos</h3>
             <i class='bx bx-plus' ></i>
             <i class='bx bx-filter' ></i>
           </div>
           <ul class="todo-list">
             <li class="completed">
               <p>Recent Products</p>
               <i class='bx bx-dots-vertical-rounded' ></i>
             </li>
             <li class="completed">
               <p>Todo List</p>
               <i class='bx bx-dots-vertical-rounded' ></i>
             </li>
             <li class="not-completed">
               <p>Todo List</p>
               <i class='bx bx-dots-vertical-rounded' ></i>
             </li>
             <li class="completed">
               <p>Todo List</p>
               <i class='bx bx-dots-vertical-rounded' ></i>
             </li>
             <li class="not-completed">
               <p>Todo List</p>
               <i class='bx bx-dots-vertical-rounded' ></i>
             </li>
           </ul>
         </div>
       </div>



     </main>






     {/* /// ########################### bootstarp model ########################## */}
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product Data</Modal.Title>

        </Modal.Header>
        <Modal.Body>
          {/* Woohoo, you are reading this text in a modal! */}
     


          <Form>
          <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
          <Form.Label className='text-primary '>Enter Product Name</Form.Label>
      <Form.Control type="text" placeholder="Noman" />
       
      </Form.Group>


  
      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
        <Form.Label className='text-primary '>Enter Product Code</Form.Label>
        <Form.Control type="text" placeholder="0000-00000000-00" />
      </Form.Group>



      <Form.Group controlId="formFile" className="mb-1">
      <Form.Label className='text-primary '>Add Product Images</Form.Label>
    
        <Form.Control type="file" />
      </Form.Group>
     
    </Form>
          
        </Modal.Body>


        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
 {/* /// ########################### bootstarp model ########################## */}




 </div>
  )
}

export default Product
