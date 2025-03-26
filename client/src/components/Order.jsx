import React from 'react'
import { Link } from 'react-router'
import "../css/order.css"

const Order = ({props}) => {
  return (
    <div>

        <div class="card mb-3 " style={{width: "80%", marginLeft: "10%"}} >
          <div className='container d-flex flex-row mb-3'>
            <div class="card-body  p-2" >
                <img src={props.imgSource} style={{width: "40%"}}   class="card-img-top"   alt="..." />
                <h5 class="card-title">OrderID: {props.id}</h5>
              
               
              
            </div>
            <div className='p-2 '>
              <div className='orderTitle'>
               {props.name}
              </div>
              <div>
                
                </div>
            </div>
            <div className='p-2'>
              <div className='orderTitle'>
                Price
              </div>
              <div>
               ${props.price}
              </div>
            </div>
            <div className='p-2'>
              <div className='orderTitle'>Status: </div>
              <div className=''>First Draft</div>
            </div>
            <div className='p-2 '>
              <div className='orderTitle'>Shipping Info:</div>
              <div>1234 street jackson avenue</div>
            </div>
            <div className='p-2'>
              <div className='orderTitle'>
                Date Purchased:
              </div>
              <div>{props.date}</div>
            </div>
            
            </div>
            <div className='d-flex align-items-end mr-5'  >
            <Link to={"/tracking"}><button type="button" class="btn btn-primary  btn-sm">Track your order</button></Link>
            <button type="button" class="btn btn-danger btn-sm" style={{marginRight: "1%"}}>Cancel your order</button>
            <Link to={"/upload"}><button type="button" class="btn  btn-sm">Upload</button></Link>
            
            </div>
        </div>

    </div >
  )
}

export default Order