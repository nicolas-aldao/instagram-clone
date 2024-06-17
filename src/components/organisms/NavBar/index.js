import React, { useEffect, useContext } from "react";
import { MdHome, MdFavoriteBorder, MdPersonOutline } from "react-icons/md";

import { Context } from "../../../Context";
import { Link, Nav } from "./styles";

const SIZE = "32px";

export const NavBar = () => {
  // TODO: NEEDS REFACTOR
  const email = "demo";
  const password = "demo";

  const { signIn } = useContext(Context);

  const autoLogin = async () => {
    await signIn({ email, password }, () => {
      console.log("logged");
    });
  };

  useEffect(() => {
    autoLogin();
  }, []);

  return (
    <Nav>
      <Link to="/">
        <MdHome size={SIZE} />
      </Link>
      <Link to="/favs">
        <MdFavoriteBorder size={SIZE} />
      </Link>
      <Link to="/user">
        <MdPersonOutline size={SIZE} />
      </Link>
    </Nav>
  );
};
