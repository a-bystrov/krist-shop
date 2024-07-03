import { useDispatch } from 'react-redux';
import Logo from '../../images/Logo.png';
import styles from './Header.module.css';
import { useRef } from 'react';
import { changeSearch, getProducts } from '../../reduxToolkit/productsSlice';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const dispatch = useDispatch()
  const searchRef = useRef()
  const navigate = useNavigate()

  function handleChangeSearch() {
    const search = searchRef.current.value
    dispatch(changeSearch(search))
  }

  function handleKeyDownEnterSearch(event) {
    const search = searchRef.current.value
    if(event.key === 'Enter') {
      navigate('/')
      dispatch(getProducts(search))
    }
  }

  return (
    <header className={ styles.header }>
      <img src={ Logo } alt="Logo" />
      <ul className={ styles.menu }>
        <li className={ styles.menuItem } onClick={ () =>  navigate('/') }>Catalog</li>
        <li className={ styles.menuItem } onClick={ () =>  navigate('/aboutUs') }>About Us</li>
        <li className={ styles.menuItem } onClick={ () =>  navigate('/contacts') }>Contacts</li>
      </ul>
      <input 
        type='text' 
        placeholder='Search' 
        className= { styles.search } 
        ref={ searchRef }
        onChange={ handleChangeSearch }
        onKeyDown={ handleKeyDownEnterSearch }
        />
      
    </header>
  )
}