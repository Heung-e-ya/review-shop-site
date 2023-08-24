import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Nav from "react-bootstrap/Nav";

const NavMenu = () => {
  const menuList = ["STORE", "BRAND", "EVENT", "CUSTOMER"];
  return (
    <div className="head-container">
      <div className="logo-container">
        <img src="https://www.yonexmall.com/images/site/logo.jpg" />
      </div>
      <div className="menu-container">
        <Nav fill variant="underline" defaultActiveKey="/home">
          <Nav.Item>
            {menuList.map((menu) => (
              <Nav.Link>{menu}</Nav.Link>
            ))}
          </Nav.Item>
        </Nav>
      </div>
      <div className="login-container">
        <FontAwesomeIcon icon={faUser} /> <p>로그인</p>
      </div>
      <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="제품검색" />
      </div>
    </div>
  );
};

export default NavMenu;
