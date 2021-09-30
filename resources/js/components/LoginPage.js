import React , { useEffect, useState } from 'react'

import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import CreateUserModal from './CreateUserModal'

import { postRequest } from '../config/axiosClient'

function LoginPage() {
  const [ formValue, setFormValue] = useState([])
  const history = useHistory();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ 
      ...formValue,
      [name]: value,
    });
  }

  const login = async () => {
    try {
      const loginMethod = await postRequest('login', formValue)
      const { data } = loginMethod.data
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('userLoggedDetails', JSON.stringify(data))
      history.go('/users')
    } catch (err) {
      alert(err)
    }
  };

  return (
    <>
      <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'}} className="container">
      <div style={{width: '50%'}} class="card">
        <div class="card-header">Login</div>
        <div class="card-body">
       <div className="form-group">
                <label for="email">Email address:</label>
                  <input type="email" className="form-control" name="email"  onChange={handleChange}/>
              </div>
                <div className="form-group">
                  <label for="pwd">Password:</label>
                  <input type="password" className="form-control"  name="password" onChange={handleChange} />
                </div>

                <button type="button" className="btn btn-primary" onClick={login}>Submit</button>

                <CreateUserModal />
        </div>
      </div>
      </div>
    </>
  );
}

export default LoginPage;
