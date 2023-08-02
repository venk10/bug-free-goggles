import React from 'react';

export default function Burger(){
    return(
        <React.Fragment>
        <div className="burgers">
            <button id='but'><img id="burger" src="https://b.zmtcdn.com/data/dish_photos/17a/e8a50734930bc08600de9639600f517a.jpg?output-format=webp" alt="chicken"/>
            <span id="font" href="#">Chicken burger-₹170</span></button>

            <button id='but'><img id="burger" src="https://b.zmtcdn.com/data/dish_photos/ab4/6088e592b328eef17e21ad17769a2ab4.jpg?output-format=webp" alt="veg"/>
            <span id="font">Veg burger-₹120</span></button>

            <button id='but'><img id="burger" src="https://b.zmtcdn.com/data/dish_photos/6f4/85f964bd6132f7ff1bfd631a4307c6f4.jpg" alt="cheese"/>
            <span id="font">Cheese burger-₹130</span></button>

            <button id='but'><img id="burger" src="https://b.zmtcdn.com/data/dish_photos/63e/d06028b2bbec3475d6096a5422f2e63e.jpg?output-format=webp" alt="paneer"/>
            <span id="font">Paneer burger-₹140</span></button>

            <button id='but'><img id="burger" src="https://theheirloompantry.co/wp-content/uploads/2022/07/fried-egg-burger-the-heirloom-pantry-2.jpg" alt="egg"/>
            <span id="font" >Egg burger-₹150</span></button>

            <button id='but'><img id="burger" src="https://hips.hearstapps.com/hmg-prod/images/190509-lamb-burger-349-1558039574.jpg?crop=0.668xw:1.00xh;0.177xw,0&resize=1200:*" alt="lamb"/>
            <span id="font" >Lamb burger-₹160</span></button>
        </div>
        </React.Fragment>
    )
}