import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../ProductCard/ProductCard'
import styles from './Catalog.module.css'
import { useEffect } from 'react'
import { getProducts } from '../../reduxToolkit/productsSlice'

export default function Catalog() {
  const products = useSelector((state) => state.products.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <div className= { styles.catalog } id='catalog'>
      <h1 className= { styles.title }>Catalog</h1>
      <div className={ styles.cardsOfCatalog }>
        { products.map((product) => {
          return <ProductCard 
            img = { product.image }
            title = { product.title }
            category = { product.category }
            price = { product.price }
            key = {product.id } 
            /> 
        })}
      </div>
    </div>
  )
}
