import React from 'react'
import DemoProduct from "../../assets/proteen2.png"
import "./ProductCategory.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const ProductCategory = (props) => {
  return (
    <div>

<div class="container">
        <div class="card">
            <div class="imgBx">
                <img src={DemoProduct}></img>
            </div>

            <div class="contentBx">

                <h2>{props.category}</h2>
  
                <Link to={`/collection/${props.category}`}>
                <p>Know More</p>
                </Link>
            </div>

        </div>
    </div>

    </div>
  )
}

export default ProductCategory