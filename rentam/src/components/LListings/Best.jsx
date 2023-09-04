import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faToilet, faRestroom, faCity } from '@fortawesome/free-solid-svg-icons'

import './Best.css'

const Best = () => {
  return (
    <>
    <div className='test-div'>
        <div className="icon first">
            <i class="bi bi-buildings-fill"></i>
        </div>
        <div className="field home-type">
            <select name="buildings" id="home" className='field-content home-select'>
                <option value="select" selected disabled>--Select home type--</option>
                <option value="apartment">Apartment</option>
                <option value="studio">Studio</option>
                <option value="room">Room</option>
                <option value="hotel">Hotel</option>
            </select>
        </div>
        <div className="icon second">
            <i class="bi bi-geo-alt-fill"></i>
        </div>
        <div className="field location">
        <input className="field-content location-input" type="text" placeholder='Location'/>
        </div>
        <div className="icon third">
            <i class="bi bi-cash"></i>
        </div>
        <div className="field price">
        <select name="buildings" id="home" className='field-content select-price'>
            <option value="select" selected disabled>--Enter Price range--</option>
            <option value="1">50,000 - 200,000</option>
            <option value="2">200,000 - 350,000</option>
            <option value="3">350,000 - 500,000</option>
            <option value="4">500,000 - 750,000</option>
            <option value="5">750,000 - 1,000,000</option>
            <option value="6">1,000,000+</option>
        </select>
        </div>
        <div className="field btn">
            <button className='field-content btn-search' type='button'>Search</button>
        </div>
        <div className="toggle-next previous-toggles">
            <i className="bi bi-chevron-left toggle"></i>
        </div>
        {/* <hr /> */}
        <div className="content one">
            <div className="image">Image Goes Here</div>
            <div className="title">Modern Studio</div>
            <div className="amount">CFA 750,000</div>
            <div className="brief-location">
                <i class="bi bi-geo-alt-fill"></i>
                CheckPoint
            </div>
            <div className="hustel-name">
                <i class="bi bi-building"></i> 
                Passion Island
            </div>
            <div className="parlour describe">
                <FontAwesomeIcon className='FontAwesomeIcon' icon={faRestroom} />
                1
            </div>
            <div className="bedroom describe">
                <FontAwesomeIcon className='FontAwesomeIcon' icon={faBed} />
                1
            </div>
            <div className="toilet describe">
                <FontAwesomeIcon className='FontAwesomeIcon' icon={faToilet} />
                1
            </div>
        </div>
        <div className="content two">
        <div className="image">Image Goes Here</div>
            <div className="title">Modern Studio</div>
            <div className="amount">CFA 750,000</div>
            <div className="brief-location">
                <i class="bi bi-geo-alt-fill"></i>
                CheckPoint
            </div>
            <div className="hustel-name">
                <i class="bi bi-building"></i> 
                Geneviva
            </div>
            <div className="parlour describe">
                <FontAwesomeIcon className='FontAwesomeIcon' icon={faRestroom} />
                1
            </div>
            <div className="bedroom describe">
                <FontAwesomeIcon className='FontAwesomeIcon' icon={faBed} />
                1
            </div>
            <div className="toilet describe">
                <FontAwesomeIcon className='FontAwesomeIcon' icon={faToilet} />
                1
            </div>
        </div>
        <div className="content three">
        <div className="image">Image Goes Here</div>
            <div className="title">Modern Studio</div>
            <div className="amount">CFA 750,000</div>
            <div className="brief-location">
                <i class="bi bi-geo-alt-fill"></i>
                CheckPoint
            </div>
            <div className="hustel-name">
                <i class="bi bi-building"></i> 
                Geneviva
            </div>
            <div className="parlour describe">
                <FontAwesomeIcon className='FontAwesomeIcon' icon={faRestroom} />
                1
            </div>
            <div className="bedroom describe">
                <FontAwesomeIcon className='FontAwesomeIcon' icon={faBed} />
                1
            </div>
            <div className="toilet describe">
                <FontAwesomeIcon className='FontAwesomeIcon' icon={faToilet} />
                1
            </div>
        </div>
        <div className="content four">
        <div className="image">Image Goes Here</div>
            <div className="title">Modern Studio</div>
            <div className="amount">CFA 750,000</div>
            <div className="brief-location">
                <i class="bi bi-geo-alt-fill"></i>
                CheckPoint
            </div>
            <div className="hustel-name">
                <i class="bi bi-building"></i> 
                Geneviva
            </div>
            <div className="parlour describe">
                <FontAwesomeIcon className='FontAwesomeIcon' icon={faRestroom} />
                1
            </div>
            <div className="bedroom describe">
                <FontAwesomeIcon className='FontAwesomeIcon' icon={faBed} />
                1
            </div>
            <div className="toilet describe">
                <FontAwesomeIcon className='FontAwesomeIcon' icon={faToilet} />
                1
            </div>
        </div>
        <div className="toggle-next next-toggles">
            <i className="bi bi-chevron-right toggle"></i>
        </div>
    </div>
    <div className="second-div">

    </div>
        {/* <div className="best">
            <div className="head">
                <span className="head-span home-type">
                    <div className="icon-div">
                        <i class="bi bi-buildings-fill icon"></i>
                    </div>
                    
                <select name="buildings" id="home" className='field-content'>
                        <option value="select" selected disabled>--Select home type--</option>
                        <option value="apartment">Apartment</option>
                        <option value="studio">Studio</option>
                        <option value="room">Room</option>
                        <option value="hotel">Hotel</option>
                    </select>
                </span>
                <span className="head-span location">
                    <div className="icon-div">
                        <i class="bi bi-geo-alt-fill icon"></i>
                    </div>
                    
                    <input className="field-content" type="text" placeholder='Location'/>
                </span>
                <span className="head-span price">
                    <div className="icon-div">
                        <i class="bi bi-cash icon"></i>
                    </div>
                    <select name="buildings" id="home" className='field-content'>
                        <option value="select" selected disabled>--Enter Price range--</option>
                        <option value="1">50,000 - 200,000</option>
                        <option value="2">200,000 - 350,000</option>
                        <option value="3">350,000 - 500,000</option>
                        <option value="4">500,000 - 750,000</option>
                        <option value="5">750,000 - 1,000,000</option>
                        <option value="6">1,000,000+</option>
                    </select>
                </span>
                <span className="search">
                    <button className='btn-search' type='button'>Search</button>
                </span>
                <hr />
            </div>
            
            <div className="row">
                <div className="col">

                </div>
                <div className="col">
                    
                </div>
            </div>
        </div> */}
    </>
  )
}

export default Best