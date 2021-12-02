import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import Products from "../../components/Products";
import { Container, Filter, FilterContainer, FilterText, Option, Select, Title } from "./ProductListElements";
import { useLocation } from 'react-router-dom'
import { useState } from "react";
import Sidebar from "../../components/Sidebar";

const ProductList = () => {
  const location = useLocation()
  const cat = location.pathname.split('/')[2]
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("Newest")
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  const handleFilters = (e) => {
    const value = e.target.value
    setFilters({
      ...filters,
      [e.target.name]: value
    })
  }

  console.log(filters);
  return (
    <Container>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Announcement />
      <Navbar toggle={toggle}/>
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={e => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
