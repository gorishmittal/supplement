import classes from './CartItem.module.css';
import demoImage from "../../assets/proteen.png"

const CartItem = (props) => {
  const price = `₹${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      
  
        <img className={classes.CartProductImg} src={demoImage}></img>
    


      <div>
        <h2>{props.title} | {props.flavour} Flavour | {props.weight} Kg | {props.serving} Servings</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;