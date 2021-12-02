import { Close } from "@material-ui/icons"
import { useDispatch, useSelector } from "react-redux"
import { Bottom, Container, Desc, Hr, Icon, Logo, MenuItem, MenuItem2, MenuLink, Middle, Top, User, Wrapper } from "./SidebarElements"
import { logOut } from '../../redux/userRedux'


const Sidebar = ({ isOpen, toggle }) => {
  const dispatch = useDispatch()
  const { currentUser } = useSelector(state => state.user)

  const handleLogout = () => {
    dispatch(logOut())
  }


  return (
    <Container isOpen={isOpen}>
      <Icon onClick={toggle}>
        <Close style={{ transform: 'scale(1.5)' }} />
      </Icon>
      <Wrapper>
        <Top show={currentUser === null}>
          <User>
            {(currentUser === null) ? 'USER' : `Hi, ${currentUser.username}`}
          </User>
          <Hr />
          <MenuItem onClick={() => handleLogout()}>Log out</MenuItem>
        </Top>
        <Middle show={currentUser === null}>
          <MenuLink to='/login'>Sign in</MenuLink>
          <MenuLink to='/register'>Sign up</MenuLink>
        </Middle>
        <MenuLink to='/cart'>Cart</MenuLink>
        <Hr />
        <MenuItem2>Language</MenuItem2>
        <MenuItem2>Search</MenuItem2>
      </Wrapper>
      <Bottom>
        <Logo to='/'>Mango.</Logo>
        <Desc> &copy; This is my personal practice website of Ecommerce Web Shop. | Privacy Policy</Desc>
      </Bottom>
    </Container>
  )
}

export default Sidebar
