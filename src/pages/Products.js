import { Link } from "react-router-dom"

const Products = () => {
  return (
    <section>
      <h1>Welcome to products page</h1>

      <ul>
        <li><Link to={'/products/product-detail/p1'}>A book</Link></li>
        <li><Link to={'/products/product-detail/p2'}>A carpet</Link></li>
        <li><Link to={'/products/product-detail/p3'}>An apple</Link></li>
      </ul>
    </section>
  )
}

export default Products