import styles from './HeroImage.module.css'
import heroImage from '../../images/heroImage.jpg'

export default function HeroImage() {
  return (
    <div className={styles.heroImageContainer}>
      <img src={ heroImage } alt='heroImage' className={ styles.heroImage }></img>
      <div className= { styles.heroImageText }>
        <h1>New Collection</h1>
        <p>UPTO 40% OFF</p>
        <a href='#catalog'>
          <button className= { styles.button }>Shop Now →</button>
        </a>
      </div>
    </div>
  )
}