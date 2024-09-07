import "./Navbar.css";

const Navbar = ({ logo, s_icon, b_icon, h_icon }) => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li>
            <a href="#">New</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">Kids</a>
          </li>
          <li>
            <a href="#">Jordan</a>
          </li>
          <li>
            <a href="#">Sale</a>
          </li>
        </ul>
        <div className="cart">
          <img src={s_icon} alt="" />
          <img src={h_icon} alt="" />
          <img src={b_icon} alt="" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
