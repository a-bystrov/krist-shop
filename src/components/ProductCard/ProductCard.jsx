import styles from './ProductCard.module.css'

export default function ProductCard(props) {
  return (
    <div className={ styles.productCard }>
      <div className={ styles.containerImg}>
        <img src={ props.img } alt={ styles.title } className={ styles.img } />
      </div>
      <h1 className={ styles.title }>{ props.title }</h1>
      <p className={ styles.category }>{ props.category }</p>
      <p className={ styles.price }>${ props.price }</p>
    </div>
  )
}