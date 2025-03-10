import React from 'react'
import Nav from '../components/Nav'
import "../css/tracking.css";

const Tracking = () => {
  return (
    <div>

     
      <Nav/>
      <h1>Tracking</h1>
        <section class="" style={{backgroundColor: "#eee;"}}>
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card card-stepper" style={{borderRadius: "10px;"}}>
            <div class="card-body p-4">

              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-column">
                  <span class="lead fw-normal">Your order has been delivered</span>
                  <span class="text-muted small">by DHFL on 21 Jan, 2020</span>
                </div>
                <div>
                  <button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-primary" type="button">Track order details</button>
                </div>
              </div>
              <hr class="my-4"/>

              <div class="d-flex flex-row justify-content-between align-items-center align-content-center">
                <span class="dot"></span>
                <hr class="flex-fill track-line"/><span class="dot"></span>
                <hr class="flex-fill track-line"/><span class="dot"></span>
                <hr class="flex-fill track-line"/><span class="dot"></span>
                <hr class="flex-fill track-line"/><span
                  class="d-flex justify-content-center align-items-center big-dot dot">
                  <i class="fa fa-check text-white"></i></span>
              </div>

              <div class="d-flex flex-row justify-content-between align-items-center">
                <div class="d-flex flex-column align-items-start"><span>15 Mar</span><span>Order placed</span>
                </div>
                <div class="d-flex flex-column justify-content-center"><span>15 Mar</span><span>Order
                    placed</span></div>
                <div class="d-flex flex-column justify-content-center align-items-center"><span>15
                    Mar</span><span>Order Dispatched</span></div>
                <div class="d-flex flex-column align-items-center"><span>15 Mar</span><span>Out for
                    delivery</span></div>
                <div class="d-flex flex-column align-items-end"><span>15 Mar</span><span>Delivered</span></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      


    </div>
  )
}

export default Tracking