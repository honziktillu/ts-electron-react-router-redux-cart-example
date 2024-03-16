import { useDispatch } from "react-redux";
import { add } from "./pizzaSlice";
import { useState } from "react";

export default function PizzaOrder() {
  const [currentSelect, setSelect] = useState("Hawai");
  const dispatch = useDispatch();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(add(currentSelect));
  };

  const change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };

  return (
    <>
      <h1>Pizza Order</h1>
      <form>
        <select name="pizza" onChange={change}>
          <option value="Hawai">Hawai</option>
          <option value="Salamos">Salamos</option>
          <option value="Fishy">Fishy</option>
          <option value="Cheesy">Cheesy</option>
        </select>
        <input type="submit" value="Order pizza" onClick={submit} />
      </form>
    </>
  );
}
