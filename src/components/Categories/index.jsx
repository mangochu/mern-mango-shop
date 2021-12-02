import CategoryItem from "../CategoryItem"
import { Container } from "./CategoriesElements"
import { categories } from "./data"

const Categories = () => {
  return (
    <Container>
      {categories.map(item =>
        <CategoryItem item={item} key={item.id}/>
      )}
    </Container>
  )
}

export default Categories
