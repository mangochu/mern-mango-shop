import { Add, Remove } from "@material-ui/icons";
import Announcement from "../../components/Announcement"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import { Bottom, Button, Container, Details, Hr, Image, Info, PriceDetail, ProducColorText, Product, ProductAmount, ProductAmountContainer, ProductColor, ProductColorWrap, ProductDetail, ProductItem, ProductPrice, ProductRemove, ProductWrapper, RemoveBtn, Summary, SummaryItem, SummaryItemPrice, SummaryItemText, SummaryTitle, Title, Top, TopButton, TopText, TopTexts, Wrapper } from "./CartElements";
import { useDispatch, useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { useEffect, useState } from "react";
import { userRequest } from '../../requestMethods'
import { useNavigate } from 'react-router-dom'
import Sidebar from "../../components/Sidebar";
import { addToCart, clearCart, decreaseCart, removeFromCart } from "../../redux/cartRedux";

const avatar = require("./../../assets/images/avatar.gif").default

const KEY = process.env.REACT_APP_STRIPE

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const quantity = useSelector(state => state.cart.quantity)
  const [stripeToken, setStripeToken] = useState(null)
  const history = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const onToken = token => {
    setStripeToken(token)
  }

  const handleDecreaseCart = (item) => {
    dispatch(decreaseCart(item))
  }

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
  }

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post('/checkout/payment', {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        })
        history('/success', { data: res.data })
      } catch { }
    }
    stripeToken && cart.total >= 1 && makeRequest()
  }, [stripeToken, cart.total, history])
  return (
    <Container>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Announcement />
      <Navbar toggle={toggle} />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton onClick={() => history(-1)}>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Cart ({quantity})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled" onClick={() => handleClearCart()}>CLEAR CART</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map(product => (
              <ProductWrapper key={product._id}>
                <Product>
                  <ProductDetail>
                    <Image src={product.img} />
                    <Details>
                      <ProductItem>
                        <b>Product:</b> {product.title}
                      </ProductItem>
                      <ProductItem>
                        <b>ID:</b> {product._id}
                      </ProductItem>
                      <ProductColorWrap>
                        <ProducColorText><b>Color:</b></ProducColorText>
                        <ProductColor color={product.color} />
                      </ProductColorWrap>
                      <ProductItem>
                        <b>Size:</b> {product.size}
                      </ProductItem>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Remove onClick={() => { handleDecreaseCart(product) }} />
                      <ProductAmount>{product.cartQuantity}</ProductAmount>
                      <Add onClick={() => handleAddToCart(product)} />
                    </ProductAmountContainer>
                    <ProductPrice>$ {product.price * product.cartQuantity}</ProductPrice>
                  </PriceDetail>
                  <ProductRemove>
                    <RemoveBtn onClick={() => handleRemoveFromCart(product)} >Remove</RemoveBtn>
                  </ProductRemove>
                </Product>
                <Hr />
              </ProductWrapper>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 0.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ 0.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name='Mango Shop'
              image={avatar}
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
