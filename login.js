import React from 'react';
import {Link} from 'react-router-dom';



export default function Login(){

    return(
        <React.Fragment>
            <img  id="food" src="https://cdn-icons-png.flaticon.com/512/3570/3570168.png" alt=''/><b id="title"> Foodie </b>
            <form id="login" onSubmit='/Home'>
            <input id="placeholder" type="text" placeholder="Name,phone no or Email" required/>
            <input id="placeholder"  type="password" placeholder="Password" required/>
            <button id="placeholder" type="submit" ><b>Log in</b></button><br/><br/>
            <h4>OR</h4>
            <Link to='/signup' id="new">create new account</Link>
            </form>     
        </React.Fragment>
    )
}