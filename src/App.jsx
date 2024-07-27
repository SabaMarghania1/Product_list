
import Header from "./components/Header"
import Main from "./components/Main"
import Product from "./components/Product"
import ProductsList from "./components/ProductsList"
import Cart from "./components/Cart"

import data from "./data.json"
import { CartProvider } from "./contexts/CartContext"


export default function App() {

  return (
    <CartProvider>
    <div className="app">
      <Header/>

      <Main>


         <ProductsList>
          {data.map(product=>{
            return <Product key={product.name} product={product}/>
            })}
          </ProductsList>
          <Cart/>
      </Main>
      
    </div>
    </CartProvider>

  )
}
