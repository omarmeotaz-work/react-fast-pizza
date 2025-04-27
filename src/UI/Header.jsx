import { Link } from "react-router-dom";
import SearchOrder from "../Features/order/SearchOrder";
import UserName from "./UserName";

function Header() {
  return (
    <header className="flex items-center justify-between bg-yellow-500 px-4 py-3 border-b border-stone-200 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Vite React Pizza Co.
      </Link>
      <SearchOrder />

      <UserName />
    </header>
  );
}

export default Header;
