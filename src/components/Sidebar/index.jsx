import { Close } from "@material-ui/icons"
import { Bottom, Container, Desc, Icon, Logo, MenuItem, Wrapper } from "./SidebarElements"

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <Container isOpen={isOpen}>
      <Icon onClick={toggle}>
        <Close style={{ transform: 'scale(1.5)' }} />
      </Icon>
      <Wrapper>
        <MenuItem>Sign in</MenuItem>
        <MenuItem>Sign up</MenuItem>
        <MenuItem>Cart</MenuItem>
        <MenuItem>Language</MenuItem>
        <MenuItem>Search</MenuItem>
      </Wrapper>
      <Bottom>
        <Logo to='/'>Mango.</Logo>
        <Desc> &copy; This is my personal practice website of Ecommerce Web Shop. | Privacy Policy</Desc>
      </Bottom>
    </Container>
  )
}

export default Sidebar
