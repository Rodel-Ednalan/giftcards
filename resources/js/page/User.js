import React , { useEffect, useState } from 'react'

import Painterro from 'painterro'


import { getRequest } from '../config/axiosClient'
import CreateUserModal from '../components/CreateUserModal'


function User() {
  const [ users, setUsers] = useState([])

  useEffect(() => {
    getAllUsers()
    // Painterro().show()
  }, [])

  const getAllUsers = async () => {
    try {
      const users = await getRequest('users')
      const data = users.data.data
      setUsers(data)
    } catch ( err ) { 
      alert(err)
    }
  }

  return (
    <div className="row">
      <CreateUserModal />
      <table class="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.length &&
            users.map((val, key) => (
              <tr>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default User;

