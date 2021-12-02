import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import { Link } from "react-router-dom"
import { Circle, Container, Icon, Image, Info } from "./ProductElements"


const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <FavoriteBorder />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
