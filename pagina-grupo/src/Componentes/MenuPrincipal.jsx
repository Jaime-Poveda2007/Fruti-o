import { useState } from "react";
import "./MenuPrincipal.css";

function MenuPrincipal() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const bannerInfo = {
    titulo: "LAVANDA Está de Vuelta 💜",
    boton: "Buscar una tienda",
    imagen: "https://www.starbucks.com.co/siteassets/menu/category/lavanda-hero.jpg"
  };

  const bebidas = [
    { id: 1, nombre: "Vainilla Lavanda Latte", top: "20%", left: "55%" },
    { id: 2, nombre: "Vainilla Lavanda Latte Helado", top: "15%", left: "75%" },
    { id: 3, nombre: "Lavanda Mocha Blanco Frappuccino", top: "55%", left: "52%" },
    { id: 4, nombre: "Matcha Helado con Lavanda Cold Foam", top: "65%", left: "72%" },
  ];

  return (
    <section className="menu-principal">
      <div className="banner">

        <div className="banner-left">
          <h2>{bannerInfo.titulo}</h2>
          <button className="banner-btn">{bannerInfo.boton}</button>
        </div>

        <div className="banner-right">
          <div className="banner-imagen-container">
            {bebidas.map((bebida) => (
              <div
                key={bebida.id}
                className={"etiqueta " + (hoveredCard === bebida.id ? "activo" : "")}
                style={{ top: bebida.top, left: bebida.left }}
                onMouseEnter={() => setHoveredCard(bebida.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {bebida.nombre}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default MenuPrincipal;