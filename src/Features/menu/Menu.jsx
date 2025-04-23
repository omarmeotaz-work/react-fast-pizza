import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
function Menu() {
  const menu = useLoaderData();
  return (
    <div className="font-roboto">
      <h1 className="text-center text-yellow-500 text-2xl my-8">
        Straight out of the oven, straight to you.
      </h1>
      <ul className="px-2 space-y-2 divide-y divide-stone-300">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </div>
  );
}
export async function Loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
