import React , { useEffect, useState } from 'react'

import { getRequest } from '../config/axiosClient'

function Received() {
  const [ giftCards, setGiftCards] = useState([])

  useEffect(() => {
    getAllGiftCards()
  }, [])

  const getAllGiftCards = async () => {
    try {
       let details = localStorage.getItem('userLoggedDetails')
      details = JSON.parse(details)
      const giftCards = await getRequest(`recievedgiftcards/${details.id}`)
      const data = giftCards.data.data
      setGiftCards(data)
    } catch ( err ) { 
      console.log(err)
    }
  }

  return (
    <div className="row">
        {
          giftCards.length &&
          giftCards.map((val, key) => (
            <div class="col-md-3">
              <div class="card" >
                <img class="card-img-top" src={val.card} alt="Card image"
                   />
                <div class="card-body">
                  <h4 class="card-title">{val.title}</h4>
                  <button  style={{float: 'right'}}  type="button" class="btn btn-primary btn-sm">Download</button>
                </div>
              </div>
            </div>
          ))
        }
    </div>
  );
}

export default Received;

