import React from 'react';
import {useState} from 'react';

export default function Form(){
   const [num,setNum]=useState('');
   function Check(){
    if(num.length>10 || num.length<10){
      alert("enter valid number");
      return
    }
    else{
        alert('form submit sucessfully')
    }
   }
    return(
        <React.Fragment>
        <div class="container mt-5 ">
            <div class="row">
                <div class="col-5 m-auto ">
                    <div class="card  bg-secondary ">
                        <form name="form">
                            <div class="card-header bg-info text-dark text-center h1">Form</div>
                            <div class="card-body">
                                <input type="text" name="fullname" class="form-control" placeholder="Fullname" required /><br/>
                                <input type="email" name="email" class="form-control" placeholder="email" required /><br/>
                                <input type="number"  class="form-control" placeholder="phone number"required  onChange={(e)=>{setNum(e.target.value)}}/>
                                <div id="num"></div>
                                <textarea name="type" class="form-control" id="" cols="5" rows="5" placeholder="type text" required /><br/>
                                <button class="btn btn-primary" type="submit" onClick={()=>{Check()}}>Sumbit feedback</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}