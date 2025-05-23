import { formatCurrency } from "../../utils/helpers";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantity } from "../cart/cartSlice.js";
import DeleteButton from "../../UI/DeleteButton.jsx";
import QuantityButton from "../../UI/QuantityButton.jsx";
function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantity(id));

  function handleAddtoCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-600">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm uppercase text-stone-500 font-medium">
              Sold out
            </p>
          )}

          {currentQuantity !== 0 && (
            <div className="flex items-center gap-3 sm:gap-8">
              <QuantityButton pizzaId={id} currentQuantity={currentQuantity} />
              <DeleteButton pizzaId={id} />
            </div>
          )}
          {!soldOut && currentQuantity === 0 && (
            <Button type="small" onClick={handleAddtoCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
