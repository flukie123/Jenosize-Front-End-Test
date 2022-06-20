import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #fff;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem ;
  z-index: 10;
  border-bottom: 3px solid #909497;
  
`;

export const Firstpath = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Name = styled(Link)`
  margin-top: 20px;
  text-decoration: none;
  color: #000;
  font-size: 20px;
  @media screen and (max-width: 825px) {
    font-size: 1rem;
  }

  
`;
export const Text = styled.input`
  display: flex ;
  height: 30px;
  border: 2px solid #000;
  border-radius: 20px;
  @media screen and (max-width: 1000px) {
    display: none;
    border-top: 1px solid #ccc;
    
  }
`;

export const NavLogo = styled(Link)`
  color: #000;
  display: flex;
  text-decoration: none;
   height: 100%;
   margin-right: 20px;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
  `;


export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  background-color: #fff;
  &.active {
    color: #15cdfc;
    border-bottom: 3px solid #e6e6e6;
    
  }
  @media screen and (max-width: 830px) {
    border-top: 0.2px solid #ccc;
    padding: 1em;
    transition: 0.3s;
    border-bottom: #15cdfc;
    border-radius: 5px;
    border-left: 1px solid;
    &.active {
    color: #fff;
    border-bottom: 3px solid;
    background-color: #BDC3C7;
    
  }
    &:hover {
      background: #797D7F;
      
    }
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #000;


  @media screen and (max-width: 830px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    &.is-expanded {
        display: block;
      }
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 830px) {
    display: none;
    margin-top: 1em;
    font-size: 25px;
    width: 50vw;
    padding-top: 47px;
    &.is-expanded {
        display: inline;
        margin-top: 1.55rem;
        font-size: 0.8rem;
        width: 12rem;
        
      }
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 830px) {
    display: none;
    &.is-expanded{
      display: flex;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #58D68D;
    color: #fff;
  }
  /* @media screen and (max-width: 830px){
    display: none;
    &.is-expanded {
      display: block;
    }
  } */
`;
export const NavBtnLink2 = styled(Link)`
display: none;
@media screen and (max-width: 830px){
  display: block;
  color: #fff;
  align-items: center;
  text-decoration: none;
  padding: .5rem 1rem;
  height: 20;
  cursor: pointer;
  background-color: #fff;
  border-top: 1px solid #000;
  border-radius: 1px;
  margin-top: .1rem;
  background-color: #256ce1;
  border-radius: 20px;
  /* Second Nav */

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #58D68D;
    color: #fff;
  }
}
`;
