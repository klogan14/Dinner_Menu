
import './Header.css'
import {Link} from 'react-router-dom';
function Header() {

    return (
      <div className='header-component'>
        <Link to='/'><h1>Home</h1> </Link >
        <Link to='/menu'><h1>Menu</h1> </Link >
        <Link to='/recipes'><h1>Recipes</h1> </Link >

      </div>
        )

}

export default Header;