import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const NavItems = [
    {
      title: "Home",
      url: "registerpage",
      icon: "fa-solid fa-house-user",
      cName: "nav-links"
    },
    {
      title: "Use State",
      url: "/state",
      icon: "fa-sharp fa-solid fa-circle-info",
      cName: "nav-links"
    },
    {
      title: "Register",
      url: "/registerpage",
      icon: "fa-solid fa-briefcase",
      cName: "nav-links"
    },
    {
      title: "Contact",
      url: "#",
      icon: "fa-solid fa-address-book",
      cName: "nav-links"
    },
    {
      title: "UseEffect",
      url: "/useeffect",
      icon: "fa-solid fa-briefcase",
      cName: "nav-links"
    },
    {
      title: "Contact",
      url: "#",
      icon: "fa-solid fa-address-book",
      cName: "nav-links"
    },
    {
      title: "Let's Connect",
      url: "#",
      cName: "nav-button"
    }
  ];

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="NavbarItems">
      <h3 className="logo">
        <i className="fab fa-react"></i>Hooks
      </h3>
      <div className="Hamburger-Cross-Icons" onClick={handleClick}>
        <i className={open ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={open ? "MenuItems active" : "MenuItems"}>
        {NavItems.map((Item, index) => (
          <li key={index}>
            <Link to={Item.url} className={Item.cName}>
              <i className={Item.icon}></i>
              {Item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
