import "./App.css";
import Header from "./Components/Head/Header";
import Home from "./Components/Home/Home";
import { ProductContext } from "./Components/Context/ProductContext";
import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Components/Cart/Cart";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import ProductCollection from "./Components/Collection/ProductCollection";
import About from "./Components/About/About";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
function App() {
  const [products, setProducts] = useState([
    {
      id: "4903850",
      title: "Performance Whey Protein",
      Stock: 0,
      MRP: 3000,
      price: 1999,
      rating: 3,
      serving: 28,
      weight: 1,
      flavour: "Choclate",
      goal: ["body building", "bulking up"],
      category: "Whey Protein",
      image:
        "https://drive.google.com/file/d/1dI4YkKBINdXSCUxQC7MQnSSlv2sZco4O/view?usp=sharing",

      infoImage: [
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/proteen2.png",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/3_17.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/5_23.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/4_24.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/2_29.jpg",
        ,
      ],
    },
    {
      id: "4903852",
      title: "Whey Protein",
      Stock: 15,
      MRP: 5999,
      price: 3999,
      rating: 3,
      serving: 29,
      weight: 1,
      flavour: "Mango",
      goal: ["body building", "bulking up"],
      category: "Whey Protein",
      image:
        "https://drive.google.com/file/d/1dI4YkKBINdXSCUxQC7MQnSSlv2sZco4O/view?usp=sharing",

      infoImage: [
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/proteen2.png",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/3_17.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/5_23.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/4_24.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/2_29.jpg",
        ,
      ],
    },
    {
      id: "4903812",
      title: "Whey Protein",
      Stock: 15,
      MRP: 5999,
      price: 3999,
      rating: 3,
      serving: 29,
      weight: 1,
      flavour: "Vanila",
      category: "Whey Protein",
      goal: ["body building", "bulking up"],
      image:
        "https://drive.google.com/file/d/1dI4YkKBINdXSCUxQC7MQnSSlv2sZco4O/view?usp=sharing",
      infoImage: [
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/proteen2.png",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/3_17.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/5_23.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/4_24.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/2_29.jpg",
        ,
      ],
    },

    {
      id: "49085780",
      title: "Whey Protein",
      Stock: 10,
      MRP: 3000,
      price: 1999,
      rating: 3,
      serving: 28,
      weight: 2,
      flavour: "Choclate",
      category: "Whey Protein",
      goal: ["body building", "bulking up", "performance"],
      image:
        "https://drive.google.com/file/d/1dI4YkKBINdXSCUxQC7MQnSSlv2sZco4O/view?usp=sharing",
      infoImage: [
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/proteen2.png",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/3_17.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/5_23.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/4_24.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/2_29.jpg",
        ,
      ],
    },
    {
      id: "4903567852",
      title: "Whey Protein",
      Stock: 15,
      MRP: 5999,
      price: 3999,
      rating: 3,
      serving: 29,
      weight: 1,
      flavour: "Strawberry",
      goal: ["body building", "performance"],
      category: "Whey Protein",
      image:
        "https://drive.google.com/file/d/1dI4YkKBINdXSCUxQC7MQnSSlv2sZco4O/view?usp=sharing",
      infoImage: [
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/proteen2.png",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/3_17.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/5_23.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/4_24.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/2_29.jpg",
        ,
      ],
    },
    {
      id: "490382312",
      title: "Whey Protein",
      Stock: 15,
      MRP: 5999,
      price: 3999,
      rating: 3,
      serving: 29,
      weight: 3,
      flavour: "Mango",
      goal: ["body building", "bulking up", "weight loss"],
      category: "Whey Protein",
      image:
        "https://drive.google.com/file/d/1dI4YkKBINdXSCUxQC7MQnSSlv2sZco4O/view?usp=sharing",
      infoImage: [
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/proteen2.png",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/3_17.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/5_23.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/4_24.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/2_29.jpg",
        ,
      ],
    },
    {
      id: "4903809302",
      title: "Whey Isolate",
      Stock: 15,
      MRP: 5999,
      price: 3999,
      rating: 3,
      serving: 29,
      weight: 1,
      flavour: "Vanilla",
      category: "Whey Isolate",
      goal: ["lean muscle", "bulking up"],
      image:
        "https://drive.google.com/file/d/1dI4YkKBINdXSCUxQC7MQnSSlv2sZco4O/view?usp=sharing",
      infoImage: [
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/proteen2.png",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/3_17.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/5_23.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/4_24.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/2_29.jpg",
        ,
      ],
    },

    {
      id: "490334256802",
      title: "Whey Isolate",
      Stock: 15,
      MRP: 5999,
      price: 3999,
      rating: 3,
      serving: 29,
      weight: 1,
      flavour: "Vanilla",
      category: "Whey Isolate",
      goal: ["body building", "bulking up"],
      image:
        "https://drive.google.com/file/d/1dI4YkKBINdXSCUxQC7MQnSSlv2sZco4O/view?usp=sharing",
      infoImage: [
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/proteen2.png",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/3_17.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/5_23.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/4_24.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/2_29.jpg",
        ,
      ],
    },

    {
      id: "4903095802",
      title: "Whey Isolate",
      Stock: 15,
      MRP: 5999,
      price: 3999,
      rating: 3,
      serving: 29,
      weight: 1,
      flavour: "Vanilla",
      goal: ["body building", "bulking up"],
      category: "Whey Isolate",
      image:
        "https://drive.google.com/file/d/1dI4YkKBINdXSCUxQC7MQnSSlv2sZco4O/view?usp=sharing",
      infoImage: [
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/proteen2.png",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/3_17.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/5_23.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/4_24.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/2_29.jpg",
        ,
      ],
    },

    {
      id: "490203943802",
      title: "Whey Protein",
      Stock: 15,
      MRP: 5999,
      price: 3999,
      rating: 3,
      serving: 29,
      weight: 2,
      flavour: "Vanilla",
      goal: ["body building", "bulking up", "lean muscle"],
      category: "Whey Protein",
      image:
        "https://drive.google.com/file/d/1dI4YkKBINdXSCUxQC7MQnSSlv2sZco4O/view?usp=sharing",
      infoImage: [
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/proteen2.png",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/3_17.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/5_23.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/4_24.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/2_29.jpg",
        ,
      ],
    },
    {
      id: "4909589303802",
      title: "Raw Whey",
      Stock: 15,
      MRP: 5999,
      price: 3999,
      rating: 3,
      serving: 29,
      weight: 1,
      flavour: "Vanilla",
      category: "Raw Whey",
      goal: ["body building", "bulking up"],
      image:
        "https://drive.google.com/file/d/1dI4YkKBINdXSCUxQC7MQnSSlv2sZco4O/view?usp=sharing",

      infoImage: [
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/proteen2.png",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/3_17.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/5_23.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/4_24.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/2_29.jpg",
        ,
      ],
    },
    {
      id: "4903030802",
      title: "Raw Whey",
      Stock: 10,
      MRP: 5999,
      price: 3999,
      rating: 3,
      serving: 29,
      weight: 1,
      flavour: "Vanilla",
      category: "Raw Whey",
      goal: ["body building", "bulking up"],
      image:
        "https://drive.google.com/file/d/1dI4YkKBINdXSCUxQC7MQnSSlv2sZco4O/view?usp=sharing",

      infoImage: [
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/proteen2.png",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/3_17.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/5_23.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/4_24.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/2_29.jpg",
        ,
      ],
    },
    {
      id: "490312234802",
      title: "Raw Whey",
      Stock: 10,
      MRP: 5999,
      price: 5999,
      rating: 3,
      serving: 29,
      weight: 1,
      flavour: "Vanilla",
      category: "Raw Whey",
      goal: ["performance", "bulking up"],
      image:
        "https://drive.google.com/file/d/1dI4YkKBINdXSCUxQC7MQnSSlv2sZco4O/view?usp=sharing",

      infoImage: [
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/proteen2.png",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/3_17.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/5_23.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/4_24.jpg",
        "http://ankursoni.in/sudeep/wp-content/uploads/2023/09/2_29.jpg",
        ,
      ],
    },
  ]);

  const [category, setCategory] = useState([
    { categoryname: "Stack & Combo", categoryimg: "" },
    { categoryname: "Whey Protein", categoryimg: "" },
    { categoryname: "Whey Isolate", categoryimg: "" },
    { categoryname: "Raw Whey", categoryimg: "" },
  ]);

  const [goal, setgoal] = useState([
    { goalname: "performance", goalimg: "" },
    { goalname: "body building", goalimg: "" },
    { goalname: "lean muscle", goalimg: "" },
    { goalname: "bulking up", goalimg: "" },
    { goalname: "weight loss", goalimg: "" },
  ]);

  const [cartIsShown, setCartIsShown] = useState(false);

  const ShowCartHandler = () => {
    setCartIsShown(true);
  };

  const HideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div className="App">
      <ToastContainer position="bottom-right" />
      <ProductContext.Provider
        value={{ products, setProducts, category, setCategory, goal, setgoal }}
      >
        {cartIsShown && <Cart onhideCart={HideCartHandler}></Cart>}

        <Switch>
          <Route path="/about" exact>
            <Header
              className="HeaderMAin"
              onshowCart={ShowCartHandler}
            ></Header>
            <About></About>
            <Footer></Footer>
          </Route>

          <Route path="/" exact>
            <Header
              className="HeaderMAin"
              onshowCart={ShowCartHandler}
            ></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>

          <Route path="/collection/:productCategory">
            <Header
              className="HeaderMAin"
              onshowCart={ShowCartHandler}
            ></Header>

            <ProductCollection></ProductCollection>

            <Footer></Footer>
          </Route>

          <Route path="/product/:productId">
            <Header
              className="HeaderMAin"
              onshowCart={ShowCartHandler}
            ></Header>

            <ProductDetail></ProductDetail>

            <Footer></Footer>
          </Route>

          <Route path="*">
            <h1>Not Found</h1>
          </Route>
        </Switch>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
