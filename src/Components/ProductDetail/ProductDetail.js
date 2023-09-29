import React from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductInforamtion from "./ProductInforamtion";
import RecomendedProducts from "./RecomendedProducts";
import OurCertification from "./OurCertification";

const ProductDetail = () => {

    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const params = useParams();

  console.log(params.productId);
  return (
    <div>
      <div className="info-and-image-section">
        <ProductInforamtion id={params.productId}></ProductInforamtion>
      </div>

        <OurCertification></OurCertification>
      <RecomendedProducts id={params.productId} ></RecomendedProducts>
    </div>
  );
};

export default ProductDetail;
