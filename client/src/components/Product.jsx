import React from 'react'

const Product = ({prop}) => {
  return (
    <div>
        <div class="card" style={{width: "18rem"}}>
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{prop.title}</h5>
            <p class="card-text">{prop.description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    </div>
  )
}

export default Product