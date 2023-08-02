import React from'react';


export default function About(){
    return(
        <div id='gri'>
        <div className="grid">
            <div id="history"><h1>History</h1>
                <p> Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, 
                    serving their multiple needs. Customers use our platform to search and discover restaurants, read and write
                    customer generated reviews and view and upload photos, order food delivery, book a table and make payments
                    while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific 
                    marketing tools which enable them to engage and acquire customers to grow their business while also providing
                    a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure,
                    which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery 
                    partners with transparent and flexible earning opportunities.
                </p>
            </div>
            <div><img id="office" src="https://media-cdn.tripadvisor.com/media/daodao/photo-s/14/f6/2c/b2/restaurant-front-view.jpg" alt=""/></div>
        </div> 
        <h1>career</h1>
        <form id="form" >
            <input id="input" type="text" placeholder="job title" required/><br/>
            <input id="input" type="text" placeholder="location" required/><br/>
            <input id="input" type="submit" value="search" onClick={()=>{alert('form sumbit')}}/>
        </form>
        <br/>
        <h1>Benifits</h1>
        <ul>
            <li>health insurance</li><br/>
            <li>yearly hike</li><br/>
            <li>Flexible shifts</li><br/>
            <li>paid leave</li>
        </ul>
        </div>
    )
}

