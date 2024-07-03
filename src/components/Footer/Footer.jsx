import styles from './Footer.module.css'
import LogoWhite from '../../images/LogoWhite.png'
import pinterest from '../../images/pinterest.png'
import telegram from '../../images/telegram.png'
import vk from '../../images/vk.png'

export default function Footer() {
  return (
    <footer className={ styles.footer}>
      <div className={ styles.socialNetworks }>
        <a href='https://www.vk.com/'>
          <img src={ vk } alt="" className={ styles.imgSocialNet } />
        </a>
        <a href='https://www.t.me/'>
          <img src={ telegram } alt="" className={ styles.imgSocialNet } />
        </a>
        <a href='https://www.pinterest.com/'>
          <img src={ pinterest } alt="" className={ styles.imgSocialNet } />
        </a>
      </div>
      <img src={ LogoWhite } alt="LogoWhite" className={ styles.logo } />
    </footer>
  )
} 