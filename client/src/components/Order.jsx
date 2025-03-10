import React from 'react'

const Order = (props) => {
  return (
    <div>

        <div class="card" style={{width: "18rem;", marginRight: "25rem", marginLeft: "25rem", marginBottom:"2rem", marginTop: "1rem"}}>
            <div class="card-body">
                <h5 class="card-title">Product Name {props.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Price: ${props.description}</p>
                <p class="card-text">Date Purchased: {props.description}</p>
                <p class="card-text">Delivered: {props.description}</p>
            </div>
        </div>

    </div>
  )
}

export default Order