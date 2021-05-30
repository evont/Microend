

import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

const Header: FunctionalComponent = () => {
 function toLink(link: string) {
     location.href = link; // base 路由有可能影响到href
 }
  return (
    <header class={style.header}>
      <nav>
        <a href="javascript:void(0)" onClick={() => toLink("/")}>Home</a>
        <a href="javascript:void(0)" onClick={() => toLink("/c/mvue2")}>Vue2</a>
        <a href="javascript:void(0)" onClick={() => toLink("/c/mvue3")}>Vue3</a>
        <a href="javascript:void(0)" onClick={() => toLink("/c/mreact")}>React</a>
      </nav>
    </header>
  );
};

export default Header;
