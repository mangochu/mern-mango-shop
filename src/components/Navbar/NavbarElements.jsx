import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../RWD";

export const Container = styled.div`
  height: 60px;
  ${mobile({ height: '50px' })}
`

export const Wrapper = styled.div`
  position: relative;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: '10px 0' })}
`

export const MobileIcon = styled.div`
  display: none;
  ${mobile({ display: 'block', position: 'relative', fontSize: '2.2rem', marginLeft: '10px' })}
`

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ display: 'none' })}
`

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`

export const SearchContainer = styled.div`
  border: 1px solid lightgray;
  align-items: center;
  margin-left: 20px;
  padding: 5px;
  display: flex;
`

export const Input = styled.input`
  border: none;
  ${mobile({ width: '30px' })}
`

export const Center = styled.div`
  flex: 1;
  text-align: center;
`

export const NavLogo = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 2em;
  ${mobile({ fontSize: '24px' })}
`

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ display: 'none' })}
  display: ${prop => prop.show ? 'flex' : 'none'};
`

export const Right2 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ display: 'none' })}
  display: ${prop => prop.show ? 'none' : 'flex'};
`
export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  text-decoration: none;
  color: #000;
`

export const MenuItem = styled(Link)`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  text-decoration: none;
  color: #000;
  ${mobile({ marginLeft: 0, marginRight: '15px' })}
`

export const MenuItem2 = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  text-decoration: none;
  color: #000;
  ${mobile({ marginLeft: 0, marginRight: '15px' })}
`
