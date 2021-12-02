import { MenuRounded, Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { Center, Container, Input, Language, Left, MenuItem, MenuItem2, MobileIcon, NavLogo, Right, Right2, SearchContainer, User, Wrapper } from './NavbarElements'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../redux/userRedux'

const Navbar = ({ toggle }) => {
  const quantity = useSelector(state => state.cart.quantity)
  const { currentUser } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logOut())
  }

  // console.log(quantity);
  return (
    <Container>
      <Wrapper>
        <MobileIcon>
          <MenuRounded style={{ transform: 'scale(1.5)' }} onClick={toggle} />
        </MobileIcon>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", frontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center><NavLogo to='/'>MANGO.</NavLogo></Center>
        <Right show={currentUser === null}>
          <MenuItem to='/login' >SIGN IN</MenuItem>
          <MenuItem to='/register' >SIGN UP</MenuItem>
        </Right>
        <Right2 show={currentUser === null}>
          <User>
            {(currentUser === null) ? 'USER' : `Hi, ${currentUser.username}`}
          </User>
          <MenuItem2 onClick={() => handleLogout()}>LOG OUT</MenuItem2>
        </Right2>
        <MenuItem to='/cart'>
          <Badge badgeContent={quantity} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </MenuItem>
      </Wrapper>
    </Container>
  )
}

export default Navbar
