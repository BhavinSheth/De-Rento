import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Card.css'


function Card() {
    return (
        <div className='Card text-center'>
            <div className='overflow'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Fat_Tire_Bike_by_Ensey_Motorized_Bikes.jpg/1200px-Fat_Tire_Bike_by_Ensey_Motorized_Bikes.jpg' alt='' className='card-img-top'/>
            </div>
            <div className='card-body text-light'>
                <h3> Product Name </h3>
                <h4> Product Price </h4>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
        </div>
    )
}

export default Card;