import { useEffect, useState } from "react"
import Product from "../Product"
// import { popularProducts } from "./data"
import { Container } from "./ProductsElements"
import axios from 'axios'

const Products = ({ cat, filters, sort }) => {

  const [products, setProducts] = useState([])
  const [filteredproducts, setfilterdProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat ? `https://mern-shop-practice.herokuapp.com/api/products?category=${cat}` : `https://mern-shop-practice.herokuapp.com/api/products`)
        setProducts(res.data)
        // console.log(res);
      } catch (err) { }
    }
    getProducts()
  }, [cat])

  useEffect(() => {
    cat && setfilterdProducts(
      products.filter(item => Object.entries(filters).every(([key, value]) =>
        item[key].includes(value)
      ))
    )
  }, [products, cat, filters])

  useEffect(() => {
    if (sort === "newest") {
      setfilterdProducts(
        prev => [...prev].sort((a, b) => a.createdAt - b.createdAt)
      )
    } else if (sort === "asc") {
      setfilterdProducts(
        prev => [...prev].sort((a, b) => a.price - b.price)
      )
    } else if (sort === "desc") {
      setfilterdProducts(
        prev => [...prev].sort((a, b) => b.price - a.price)
      )
    }
  }, [sort])

  // console.log({ products, cat, filters, sort })
  return (
    <Container>
      {cat ? filteredproducts.map(item => <Product item={item} key={item._id} />)
        : products.slice(0,8).map(item => <Product item={item} key={item._id} />
        )}
    </Container>
  )
}

export default Products
