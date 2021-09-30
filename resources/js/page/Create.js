import React , { useEffect, useState } from 'react'
import Painterro from 'painterro'

import { getRequest } from '../config/axiosClient'

function Create() {
  const [ users, setUsers] = useState([])

  useEffect(() => {
    getAllUsers()
  }, [])

  const getAllUsers = async () => {
    try {
      const users = await getRequest('users')
      const data = users.data.data
      setUsers(data)
    } catch ( err ) { 

    }
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <div class="form-group">
          <label>Title </label>
          <input type="text" class="form-control"  placeholder="Enter username"  />
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        <div class="form-group">
          <label>Users</label>
          <select class="form-control">
            <option disabled selected> --- </option>
            {
              users.length &&
              users.map((val, key) => (
                <option>{ val.name }</option>
              ))
            }
          </select>
        </div>
        <button 
          onClick={ () => Painterro().show()  }> Open Editor 
        </button>
      </div>
    </div>
  );
}

export default Create;

