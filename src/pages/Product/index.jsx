import { Add, Remove } from "@material-ui/icons";
import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import { AddContainer, Amount, AmountContainer, Button, Container, Desc, ErrorText, Filter, FilterColor, FilterContainer, FilterSize, FilterSizeOption, FilterTitle, Image, ImgContainer, InfoContainer, Price, Title, Wrapper } from "./ProductElements";
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";
import { addProduct } from '../../redux/cartRedux'
import { useDispatch } from 'react-redux'
import Sidebar from "../../components/Sidebar";


const Product = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const [product, setProduct] = useState({})
  const [cartQuantity, setQuantity] = useState(1)
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [errorchoose, setErrorChoose] = useState(true)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get('/products/find/' + id)
        setProduct(res.data)
      } catch { }
    }
    getProduct()
  }, [id])

  const handleQuantity = type => {
    if (type === "dec") {
      cartQuantity > 1 && setQuantity(cartQuantity - 1)
    } else {
      setQuantity(cartQuantity + 1)
    }
  }

  const handleClick = () => {
    //update cart
    dispatch(addProduct({ ...product, cartQuantity, color, size }))
  }

  const Errorchoose = () => {
    setErrorChoose(false)
  }

  return (
    <Container>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Announcement />
      <Navbar toggle={toggle} />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
            {product.desc}
          </Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map(c => <FilterColor color={c} key={c} onClick={() => setColor(c)} />)}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map(s => <FilterSizeOption key={s}>{s}</FilterSizeOption>)}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity('dec')} />
              <Amount>{cartQuantity}</Amount>
              <Add onClick={() => handleQuantity('inc')} />
            </AmountContainer>
            <Button onClick={(color === "" || size === "") ? Errorchoose : handleClick}>ADD TO CART</Button>
          </AddContainer>
          <ErrorText errorchoose={errorchoose}>Please choose color and size</ErrorText>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
