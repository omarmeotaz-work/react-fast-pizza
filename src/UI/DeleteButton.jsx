import { useDispatch } from "react-redux";
import { delItem } from "../Features/cart/cartSlice";
import Button from "./Button";

function DeleteButton({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(delItem(pizzaId))}>
      Remove
    </Button>
  );
}

export default DeleteButton;
