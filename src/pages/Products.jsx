import Filter from "../components/Filter"
import { PaginationContainer, ProductsContainer } from "../components"
import { customFetch } from "../utils"


const url = '/products'

export const loader = async({request}) =>{
  const response = await customFetch(url)
  const products = response.data.data
  const meta = response.data.meta
  return {products, meta}
}
function Products() {

  return (
    <section className="align-elements">
      <Filter/>
      <ProductsContainer/>
      <PaginationContainer/>
    </section>
  )
}

export default Products