import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
  min-height: 80vh;
`
const Title = styled.h1`
  font-size: 70px;
`
const SubTitle = styled.h2`
  font-size: 40px;
`
const Desc = styled.p`
  font-size: 20px;
`

const NotFound = () => {
  return (
    <Container>
      <Title>404</Title>
      <SubTitle>That page cannot be found.</SubTitle>
      <Desc>Go back to the <Link to="/">Homepage</Link></Desc>
    </Container>
  )
}

export default NotFound
