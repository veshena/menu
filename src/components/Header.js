import { Link } from 'react-router-dom'

function Header() {

  return (
    <nav className='head'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/breakfast">Breakfast</Link>
        </li>
        <li>
          <Link to="/lunch">Lunch</Link>
        </li>
        <li>
          <Link to="/drinks">Drinks</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Header