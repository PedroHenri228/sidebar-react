import { useState } from "react";
import "./styles.css";
import MenuIcon from './bootstrap-icons/icons/list.svg'; 
import CloseIcon from './bootstrap-icons/icons/x.svg'; 
import HomeIcon from './bootstrap-icons/icons/house-fill.svg'; 
import DashboardIcon from './bootstrap-icons/icons/speedometer2.svg'; 
import ProductIcon from './bootstrap-icons/icons/columns-gap.svg'; 
import SupplierIcon from './bootstrap-icons/icons/person.svg'; 
import ContactIcon from './bootstrap-icons/icons/phone.svg'; 
import AboutIcon from './bootstrap-icons/icons/bookmark-fill.svg'; 

const navItems = [
  { name: "Inicio", icon: <img src={HomeIcon} alt="Inicio"/> },
  { name: "Dashboard", icon: <img src={DashboardIcon} alt="Dashboard" className="icon"/> },
  { name: "Produto", icon: <img src={ProductIcon} alt="Produto" className="icon"/> },
  { name: "Fornecedores", icon: <img src={SupplierIcon} alt="Fornecedores" className="icon"/> },
  { name: "Contato", icon: <img src={ContactIcon} alt="Contato" className="icon"/> },
  { name: "Sobre-nós", icon: <img src={AboutIcon} alt="Sobre-nós" className="icon"/> }
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-inner">
        <header className="sidebar-header">
          <button
            type="button"
            className="sidebar-burger"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <img src={CloseIcon} alt="Fechar" className="icon" sizes="30" /> : <img src={MenuIcon} alt="Menu" className="icon" sizes="30" />}
          </button>
        </header>
        <nav className="sidebar-menu">
          {navItems.map((item) => (
            <button key={item.name} type="button" className="sidebar-button">
              {item.icon}
              <p>{item.name}</p>
            </button>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Sidebar;
