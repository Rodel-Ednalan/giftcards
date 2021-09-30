import React , { useEffect, useState } from 'react'
import Painterro from 'painterro'

import { getRequest, postRequest } from '../config/axiosClient'

function CreateUserModal() {
  const [ modal, setModal] = useState(false)
  const [ formValue, setFormValue] = useState([])

  const toggleModal = () => { 
    setModal(!modal)
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ 
      ...formValue,
      [name]: value,
    });
  }

  const registerUser = async () => { 
    try { 
      const create = await postRequest('register', formValue)
      window.location.reload();
    } catch (err) { 
      alert(err)
    }
  }

  return (
    <>
      <button type="button" class="btn btn-primary" onClick={toggleModal}>
        Create User
      </button>
      <div class="modal" id="myModal" style={{ 
        display: modal ? 'block' : 'none'}}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Create User</h4>
              <button type="button" class="close" onClick={toggleModal}>&times;</button>
            </div>

            <div class="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <div class="form-group">
                    <label>Name </label>
                    <input onChange={handleChange} type="text" class="form-control" name="name"   />
                  </div>
                  <div class="form-group">
                    <label>Email</label>
                    <input onChange={handleChange} type="text" class="form-control" name="email"   />
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <input onChange={handleChange} type="passwor" class="form-control" name="password"   />
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" onClick={registerUser}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateUserModal;

