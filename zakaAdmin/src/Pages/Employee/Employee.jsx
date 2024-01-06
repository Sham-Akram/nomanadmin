import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const Employee = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>










      <main>
        <div className="head-title">
          <div className="left">
            <h1>Employee</h1>
            <ul className="breadcrumb">
              <li>
                <a href="#">Employee</a>
              </li>
              {/* <li><i className='bx bx-chevron-right' ></i></li> */}
              {/* <li>
               <a className="active" href="#">Home</a>
             </li> */}
            </ul>
          </div>
          <a href="#" className="btn-download">
            <i className='bx bxs-cloud-download' ></i>
            <span  variant="primary" onClick={handleShow}>
              Add Employee
            </span>
          </a>
        </div>

        <ul className="box-info">
          <li>
            <i className='bx bxs-calendar-check' ></i>
            <span className="text">
              <h3>1020</h3>
              <p>New Employee</p>
            </span>
          </li>
          <li>
            <i className='bx bxs-group' ></i>
            <span className="text">
              <h3>2834</h3>
              <p>Visitors</p>
            </span>
          </li>
          <li>
            <i className='bx bxs-dollar-circle' ></i>
            <span className="text">
              <h3>2543</h3>
              <p>Total Employee</p>
            </span>
          </li>
        </ul>


        <div className="table-data">


          <div className="order">
            <div className="head">
              <h3>Employee Data</h3>
              <i className='bx bx-search' ></i>
              <i className='bx bx-filter' ></i>
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
                  <td><span className="status completed">Completed</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2023</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2023</td>
                  <td><span className="status process">Process</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2023</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>
                    <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g" />
                    <p>John Doe</p>
                  </td>
                  <td>01-10-2023</td>
                  <td><span className="status completed">Completed</span></td>
                </tr>
              </tbody>
            </table>
          </div>









          <div className="todo">
            <div className="head">
              <h3>Famous Employee</h3>
              <i className='bx bx-plus' ></i>
              <i className='bx bx-filter' ></i>
            </div>
            <ul className="todo-list">
              <li className="completed">
                <p>Todo List</p>
                <i className='bx bx-dots-vertical-rounded' ></i>
              </li>
              <li className="completed">
                <p>Todo List</p>
                <i className='bx bx-dots-vertical-rounded' ></i>
              </li>
              <li className="not-completed">
                <p>Todo List</p>
                <i className='bx bx-dots-vertical-rounded' ></i>
              </li>
              <li className="completed">
                <p>Todo List</p>
                <i className='bx bx-dots-vertical-rounded' ></i>
              </li>
              <li className="not-completed">
                <p>Todo List</p>
                <i className='bx bx-dots-vertical-rounded' ></i>
              </li>
            </ul>
          </div>
        </div>



      </main>







     {/* /// ########################### bootstarp model ########################## */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD Employee Data</Modal.Title>

        </Modal.Header>
        <Modal.Body>
          {/* Woohoo, you are reading this text in a modal! */}
     


          <Form>
          <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
          <Form.Label className='text-primary '>Enter Empoyee Name</Form.Label>
      <Form.Control type="text" placeholder="Noman" />
       
      </Form.Group>

      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
        <Form.Label className='text-primary '>Enter Employee Email address</Form.Label>
        <Form.Control type="email" placeholder="noman@example.com" />
      </Form.Group>
  
      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
        <Form.Label className='text-primary '>Enter Employee CNIC</Form.Label>
        <Form.Control type="text" placeholder="0000-00000000-00" />
      </Form.Group>

      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
        <Form.Label className='text-primary '>Enter Employee Password</Form.Label>
        <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder="xxxxxxxxxxxxxx"
      />
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long
      </Form.Text>
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-1">
      <Form.Label className='text-primary '>Add Employee Image</Form.Label>
    
        <Form.Control type="file" />
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group> */}

     
    </Form>
          
        </Modal.Body>


        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Employee
          </Button>
        </Modal.Footer>
      </Modal>
 {/* /// ########################### bootstarp model ########################## */}




    </div>
  )
}

export default Employee
