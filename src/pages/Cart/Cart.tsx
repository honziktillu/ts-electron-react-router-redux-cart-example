import { useSelector, useDispatch } from "react-redux";
import { PizzaState } from "../PizzaOrder/pizzaSlice";
import { remove } from "../PizzaOrder/pizzaSlice";
import "./Cart.css";

export default function Cart() {
  const orders = useSelector((state: PizzaState) => state.pizza.orders);
  const dispatch = useDispatch();

  const removePizza = (index: number) => {
    dispatch(remove(index));
  };

  const renderOrders = () => {
    const foo = [];
    for (const [key, value] of Object.entries(orders)) {
      foo.push(
        <p key={key}>
          {key}: {value}
          <button className="cart-delete-button" onClick={() => removePizza(key as unknown as number)}>X</button>
        </p>
      );
    }
    return foo;
  };

  return (
    <>
      <p>Your order:</p>
      {renderOrders()}
    </>
  );
}
