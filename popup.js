import React from 'react'

function popup(props) {
    const[num,setNum]=useState(1)
    const[price,setPrice]=useState(150)
    function change(){
        if(num>1){
        setNum(num-1)}
    }
        useEffect(()=>{setPrice( num*150)},[num])

  return (
    <div className='popup'>
        <div className='popup-inner'>
        <div className="container mt-5 ">
            <div className="row">
                <div class="col-5 m-auto ">
                    <div className="card ">
                            <div className="card-header" >
                                <img className="card-img-top" src="https://b.zmtcdn.com/data/dish_photos/4b6/b6b08c6a40d366584c479467e66714b6.png?output-format=webp"alt="chicken"></img>
                                <h3>chicken briyani</h3>
                            </div>
                            <div className="card-body"></div>
                            <div className='card-footer'>
                                <button id="add"onClick={()=>change()}>-</button>
                                <input id="increase" value={num}/>
                                <button id="add" onClick={()=>{setNum(num+1)}}>+</button>
                                <button id="final" onClick={()=>{alert('order placed sucessfully');}}>place order ₹{price}</button>
                                <button className='close-btn'>close</button>
                                {props.children}
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default popup