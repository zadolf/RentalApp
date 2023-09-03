import React from 'react'
import './Best.css'

const Best = () => {
  return (
    <div className='container' id='best-main'>
        <div className="container">
            <div class="dropdown">
                <button class="btn btn-ligth dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Choose home type
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Apartment</a></li>
                    <li><a class="dropdown-item" href="#">Studio</a></li>
                    <li><a class="dropdown-item" href="#">Room</a></li>
                </ul>
            </div>
        </div>
        <div className="row">

        </div>
    </div>
  )
}

export default Best