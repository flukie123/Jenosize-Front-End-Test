import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavBtnLink2,
  NavLogo,
  Text,
  Name,
  Firstpath
} from './NavbarElements';



export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <Nav>

        <Firstpath>
          <NavLogo to='/'>
            <img src={require('../../images/logo.png')} alt='logo' />
          </NavLogo>
          <Name to='/' activeStyle>NFT source</Name>
        </Firstpath>
        <Bars onClick={() => setIsExpanded(!isExpanded)} />

        <NavMenu className={` ${isExpanded ? "is-expanded" : ""}`}>
          <NavLink to='/marketplace' activeStyle>
            Marketplace
          </NavLink>
          <NavLink to='/stack' activeStyle>
            Stack
          </NavLink>
          <NavLink to='/feed' activeStyle>
            Feed
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavBtnLink2 to='/connectwallet'>Connect Wallet</NavBtnLink2>
        </NavMenu>

        <NavBtn>
          <Text placeholder='  Search' />
          <NavBtnLink to='/connectwallet'>Connect Wallet</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};


