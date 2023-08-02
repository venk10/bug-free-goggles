import React from 'react';
import Image1 from './images/image1.png'
import Image2 from './images/image2.png'

export default function Home(){
    return(
        <>
        <div className="home">
        <div><img id="front" src={Image1} alt=""/></div>
        <div><img id="front" src={Image2}alt=""/></div>
        <div><img id="front" src="https://i.gifer.com/origin/68/6802d15571afa4627396be13d9ffd3e5_w200.webp" alt=""/></div>
        <div><img id="front" src="https://kingsbuffets.com/wp-content/uploads/2020/05/el_buffet_seguro_e_higienico_medidas_proteccion.gif" alt=""/></div>
        <div><img id="front" src="https://i.pinimg.com/originals/14/a6/b6/14a6b606efffeab2b165af0e568dc919.jpg" alt=""/></div>
        <div><img id="front" src="https://i.gifer.com/origin/85/8584b046bffe4f6ef42a77667d7f35d9_w200.webp" alt=""/></div> 
    </div>   
        </>
    )
}