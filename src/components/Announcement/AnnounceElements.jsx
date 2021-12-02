import styled from "styled-components";
import { mobile } from "../../RWD";

export const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile({ height: '100%' })}
`
