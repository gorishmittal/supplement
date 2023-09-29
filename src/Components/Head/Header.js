import React, { useContext } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import HeaderCartButton from "./HeaderCartButton";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ProductContext } from "../Context/ProductContext";

const Header = (props) => {
  const { category, setCategory } = useContext(ProductContext);
  console.log(category);

  return (
    <div className="header">
      <div class="logo">
        {" "}
        <img className="header_logo" src={logo}></img>
      </div>

      <nav class="navbar">
        <ul class="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" class="hamburger">
            &#9776;
          </label>

          <div class="menu">
            <li class="productCSS">
              <a>PRODUCTS</a>

              <ul class="dropdownHeader">
                {category.map((items) => (
                  <Link to={`/collection/${items.categoryname}`}>
                    <li>
                      <a>{items.categoryname}</a>
                    </li>
                  </Link>
                ))}
              </ul>
            </li>

            <Link to="/">
              <li>
                <a>HOME</a>
              </li>
            </Link>

            <Link to="/about">
              <li>
                <a>ABOUT US</a>
              </li>
            </Link>

            <li>
              <a href="/">EVENTS</a>
            </li>
           
          </div>
        </ul>
      </nav>

      <SearchIcon className="searchIcon"></SearchIcon>
      <PersonIcon className="personIcon"></PersonIcon>
      <HeaderCartButton onClick={props.onshowCart}></HeaderCartButton>
    </div>
  );
};

export default Header;
