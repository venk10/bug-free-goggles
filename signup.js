import React from 'react';
import {Link} from 'react-router-dom';
import Home from './home';

export default function Signup(){

    return(
        <React.Fragment>
            <img  id="food" src="https://cdn-icons-png.flaticon.com/512/3570/3570168.png" alt=''/><b id="title"> Foodie </b>
            <form id="signup" onSubmit={()=> {<Home />}}>
                <label for="firstname" id="label">First Name :</label>
                <input name="firstname" type="text" id="firstname" required /><br/>
                <label for="lastname" id="label">Last Name : </label>
                <input type="text" name="lastname" id="lastname" required /><br/>
                <label for="mail" id="label">Email id :  </label>
                <input type="email" name="mail" id="mail" required />
                <br/>
                <label for="num1" id="label">Phone no : </label>
                <input name="num" type="number" id="num1" required />
                <br/>
                <label for="password"id="label">password :  </label>
                <input type="password" name="password1" id="password" required />
                <br/>
                <label for="password"id="label">confirm :  </label>
                <input type="password" name="password2" id="confirm" required />
                <br/>
                <label for="dob" id="label">Date of birth :</label>
                <input name="dob" type="date" id="dob" required/>
                <br/>
                <input id="check" type="checkbox" required /><Link id="terms" > Accept terms and condition</Link>
                <br/>
                <button type="submit"  id="sign"><b>signup</b></button><br/><br/>
                <h4>OR</h4>
                <Link to='/login' id="new">Already have account</Link>
            </form>
        </React.Fragment>
    )
}