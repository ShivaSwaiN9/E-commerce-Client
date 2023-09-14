import "./Header.scss";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";

const Header = () => {
  const [Scrolled, setScrolled] = useState(false);
  const [ShowCart, setShowCart] = useState(false);
  const [ShowSearch, setShowSearch] = useState(false);
  const {cartCount} = useContext(Context)
  const navigate = useNavigate();
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${Scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate ("/")}>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className="center" onClick={() => navigate ("/")}>SoundSculpt</div>
          <div className="right">
            <TbSearch onClick={() => setShowSearch(true)} />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
             {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {ShowCart && <Cart setShowCart={setShowCart} />}
      {ShowSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
