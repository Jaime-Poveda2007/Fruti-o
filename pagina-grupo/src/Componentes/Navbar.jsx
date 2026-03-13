import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuActivo, setMenuActivo] = useState(null);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const navInfo = {
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg",
    marca: "Starbucks"
  };

  const links = [
    { id: 1, nombre: "CARTA", href: "#carta" },
    { id: 2, nombre: "CAFE", href: "#cafe" },
    { id: 3, nombre: "NOVEDADES", href: "#novedades" },
    { id: 4, nombre: "REWARDS", href: "#rewards" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={navInfo.logo} alt={navInfo.marca} />
        </div>
        
        <button
          className="navbar-hamburguesa"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={"navbar-links " + (menuAbierto ? "abierto" : "")}>
          {links.map((link) => (
            <li key={link.id}>
              {}
              <a
                href={link.href}
                className={menuActivo === link.id ? "activo" : ""}
                onClick={() => {
                  setMenuActivo(link.id);
                  setMenuAbierto(false);
                }}
              >
                {link.nombre}
              </a>
            </li>
          ))}
        </ul>

        <div className={"navbar-acciones " + (menuAbierto ? "abierto" : "")}>
          <a href="#tiendas" className="navbar-tienda">
            <span className="icono-ubicacion">📍</span>
            Buscar una tienda
          </a>
          <button className="btn-registro">Registrese ahora</button>
          <button className="btn-login">Iniciar sesion</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;