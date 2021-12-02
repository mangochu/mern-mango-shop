import { Facebook, GitHub, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import { Center, ContactItem, Container, Desc, Left, List, ListItem, Logo, Payment, Right, SocialContainer, SocialIcon, Title } from "./FooterElements";
const img1 = require('../../assets/images/Visa.svg').default
const img2 = require('../../assets/images/Mastercard.svg').default
const img3 = require('../../assets/images/Apple Pay.svg').default
const img4 = require('../../assets/images/Google Pay.svg').default


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo to='/'>MANGO.</Logo>
        <Desc>
         This is my personal practice website of Ecommerce Web Shop.
        </Desc>
        <SocialContainer>
          <SocialIcon href='https://www.facebook.com/'>
            <Facebook />
          </SocialIcon>
          <SocialIcon href='https://www.instagram.com/'>
            <Instagram />
          </SocialIcon>
          <SocialIcon href='https://twitter.com/'>
            <Twitter />
          </SocialIcon>
          <SocialIcon href='https://github.com/'>
            <GitHub />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> No. 1050, Nanxing Rd., Beitun Dist., Taichung City 406015, Taiwan (R.O.C.)
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> mangochu81806@gmail.com
        </ContactItem>
        <Payment src={img1} />
        <Payment src={img2} />
        <Payment src={img3} />
        <Payment src={img4} />
      </Right>
    </Container>
  );
};

export default Footer;
