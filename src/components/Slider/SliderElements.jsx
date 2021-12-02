import styled from "styled-components";
import { mobile } from "../../RWD";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: 'none' })}
`
export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === "left" && '10px'};
  right: ${props => props.direction === "right" && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 5;
`

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease-in-out;
  transform: translateX(${props => props.slideIndex * -100}vw);
`

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 50px;
  background-color: #${props => props.bg};
`

export const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
`

export const Image = styled.img`
  height: 80%;
`

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`

export const TextWrapper = styled.div`
max-width: 740px;
`

export const Title = styled.h1`
  font-size: 75px;
  color: #${props => props.tc};
`

export const SubTitle = styled.h2`
  font-size: 30px;
`

export const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  line-height: 1.5;
`

export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`
