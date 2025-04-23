import { useDispatch } from "react-redux";
import Button from "./Button";
import { decQuantity, incQuantity } from "../Features/cart/cartSlice";

function QuantityButton({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-1 items-center md:gap-3">
      <Button type="round" onClick={() => dispatch(decQuantity(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(incQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default QuantityButton;
