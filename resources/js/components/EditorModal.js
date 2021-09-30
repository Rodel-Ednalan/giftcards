import React , { useEffect, useState } from 'react'
import Painterro from 'painterro'

import { getRequest, postRequest } from '../config/axiosClient'

function EditorModal() {
  const [ users, setUsers] = useState([])
  const [ modal, setModal] = useState(false)
  const [ preview, setPreview] = useState("")
  const [ formValue, setFormValue] = useState([])

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

  const toggleModal = () => { 
    setModal(!modal)
  }

  const openEditor = () => { 
    Painterro({
      saveHandler: function (image, done) {
        const preview = image.asDataURL(image.hasAlphaChannel() ? 'image/png' : 'image/jpeg');
        done(true);
        setPreview(preview)

        setFormValue({ 
          ...formValue,
          card: preview,
        });

      },
    }).show() 
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ 
      ...formValue,
      [name]: value,
    });
  }

  const sendGift = async () => {
    try {   
      let details = localStorage.getItem('userLoggedDetails')
      details = JSON.parse(details)
      const data = {
        ...formValue,
        sender_id: details.id,
      }
      const create = await postRequest('giftcards', data)
      alert('asdawsd');
      window.location.reload();
    } catch (err) { 

    }
  }

  return (
    <>
      <button style={{margin: '15px'}}type="button" class="btn btn-primary" onClick={toggleModal}>
        Send Card
      </button>
      <div class="modal" id="myModal" style={{ display: modal ? 'block' : 'none' }}>
        <div class="modal-dialog">
          <form onSubmit={ sendGift }>
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Create Card</h4>
                <button type="button" class="close" onClick={toggleModal}>&times;</button>
              </div>

              <div class="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div class="form-group">
                      <label>Title </label>
                      <input type="text" class="form-control" name="title" onChange={handleChange} />
                    </div>
                    <div class="form-group">
                      <label>To</label>
                      <select class="form-control" name="reciever_id" onChange={handleChange}>
                        <option disabled selected> --- </option>
                        {
                          users.length &&
                          users.map((val, key) => (
                            <option value={val.id}>{ val.name }</option>
                          ))
                        }
                      </select>
                    </div>
                    <button 
                      type="button"
                      onClick={ openEditor }> Open Editor 
                    </button>
                    <img style={{width: '100%',height: '200px',objectFit: 'contain'}}className="img-thumbnail" src={ preview } />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-danger">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditorModal;

