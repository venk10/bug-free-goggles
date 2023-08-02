import React from 'react';
import {Link} from 'react-router-dom';



export default function Order(){
    return(
        <React.Fragment>
        <div id="items">
            <div><Link to='/briyani'><img className="items" src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"alt="biryani"/></Link>
            <Link id="text">Briyani</Link></div>

            <div><Link to='/cake'><img className="items"src="https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png" alt="cake"/></Link>
            <Link id="text">Cake</Link></div>

            <div><Link to='/burger'><img className="items"src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"alt="burger"/></Link>
            <Link id="text">Burger</Link></div>
        </div>
        </React.Fragment>
    )
}