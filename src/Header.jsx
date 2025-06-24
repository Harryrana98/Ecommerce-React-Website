import { Link } from "react-router-dom"
function Header() {
  return (
    <>
    <div className="headerDiv">
         <h1>Ecommerce</h1>
         <nav>
          <ul className="menuSection">
            <li> <Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li><Link to={"/blog"}>Blog</Link></li>
            </ul>
         </nav>
    </div>
    </>
  )
}

export default Header