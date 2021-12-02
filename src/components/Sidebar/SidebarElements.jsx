import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: white;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`
export const Icon = styled.div`

  font-size: 2rem;
  cursor: pointer;
  margin: 40px 10px 60px;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
`

export const Top = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 10px;
display: ${prop => prop.show ? 'none' : 'flex'};
`
export const MenuItem = styled.div`
margin-bottom: 15px;
`

export const User = styled.div`
color: darkblue;
font-size: 25px;
`

export const Middle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
display: ${prop => prop.show ? 'flex' : 'none'};
`

export const MenuLink = styled(Link)`
margin-bottom: 15px;
color: black;
text-decoration: none;
`

export const MenuItem2 = styled.div`
color: #555;
font-size: 20px;
margin-bottom: 15px;
`

export const Hr = styled.hr`
  width: 150px;
  background-color: #ccc;
  border: none;
  height: 1px;
  margin: 15px 0;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin: 0 20px;
  bottom: 30px;
`

export const Logo = styled(Link)`
  font-size: 2em;
  text-decoration: none;
  color: black;
  display: flex;
`

export const Desc = styled.div`
  display: flex;
  justify-content: center;
`
