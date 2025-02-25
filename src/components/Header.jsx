import { BsCart3 } from "react-icons/bs";
import Cookies from "js-cookie";
import { MdOutlineMenu } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartElement from "../elements/header/CartElement";
import { useLocation} from "react-router-dom";
import NavMenuElement from "../elements/header/NavMenuElement";
import {
  getRefreshToken,
  getUserInfo,
} from "../redux/action/userAction";
import SearchInputElement from "../elements/header/SearchInputElement";

const Header = () => {
  const accessToken = Cookies.get("accessToken");
  const refreshToken = Cookies.get("refreshToken");
  const dispatch = useDispatch();
  const location = useLocation();
  const [state, setState] = useState({
    cartOpen: false,
    profileOpen: false,
  });
  const { user } = useSelector((state) => state.user);
  const { cartOpen, profileOpen } = state;
  const { cart } = useSelector((state) => state.cart);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleState = (key) => {
    setState((prevState) => ({
      ...prevState,
      cartOpen: key === "cart" ? !prevState.cartOpen : false,
    }));
  };

  const handleNavMenu = () => {
    setOpenMenu(!openMenu);
  };

  console.log(user);
  const closeModals = () => {
    setState((prevState) => ({
      ...prevState,
      cartOpen: false,
      profileOpen: false,
    }));
  };

  useEffect(() => {
    if (refreshToken && !accessToken) {
      dispatch(getRefreshToken());
    }
  }, [dispatch, refreshToken, accessToken, location.pathname]);

  useEffect(() => {
    if (accessToken) {
      dispatch(getUserInfo());
    }
  }, [dispatch, accessToken]);

  return (
    <header className="bg-white fixed top-0 w-full z-10 px-2 border-b">
      {/* Overlay when cart or profile is open */}
      {(cartOpen || profileOpen) && (
        <div
          onClick={closeModals}
          className="fixed top-0 bottom-0 right-0 left-0 bg-secondary/50 z-30"
        ></div>
      )}

      <CartElement cartOpen={cartOpen} handleCart={() => toggleState("cart")} />

      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-between space-x-2 py-4 max-h-[70px]">
          {/* Logo */}
          <div className="lg:block hidden text-xl font-semibold tracking-[2px]">
            BTUMARKET.GE
          </div>

          {/* Search bar */}
          <SearchInputElement />

          {/* Navigation */}
          <div className="flex flex-row justify-between w-[30%] px-2  md:w-auto">
            <NavMenuElement
              user={user}
              handleNavMenu={handleNavMenu}
              openMenu={openMenu}
            />

            {/* Buttons (Cart, Profile, Menu) */}
            <div className="flex flex-row justify-evenly items-center w-full gap-x-0 md:gap-x-3">
              {/* Cart button */}
              <button className="relative" onClick={() => toggleState("cart")}>
                <BsCart3 className="text-lg lg:text-xl" />
                <div
                  className={`${
                    cart.length ? "flex" : "hidden"
                  } items-center justify-center w-6 h-6 rounded-full bg-red-500 text-white text-[12px] absolute -top-3 -right-3`}
                >
                  {cart.length}
                </div>
              </button>

              {/* Menu button */}
              <button
                onClick={handleNavMenu}
                className="block md:hidden text-lg "
              >
                <MdOutlineMenu />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
