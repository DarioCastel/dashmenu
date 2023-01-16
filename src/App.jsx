import "./App.css";
import image1 from "./img/ilidan.png"

function App() {
  return (
    <div className="App">
      <header className="header">header</header>
      <aside className="sidebar" id="nav">
        <div className="headernav">
          <div className="logo">
            <img src={image1} alt="logo1" />
            <div className="close">
              <a href="nav" className="botonClose">
                <span class="material-symbols-outlined close">close</span>
              </a>
            </div>
          </div>
          <div className="titulo">Demon Hunter</div>
        </div>

        <div className="element">
          <ul className="sideElem">
            <div className="box">
              <div className="icon"><i class="fa-regular fa-user"></i></div>
              <li className="sideItem">
                Perfil
                <a href="#" className="sideLink"></a>
              </li>
            </div>
            <div className="box">
              <div className="icon"><i class="fa-solid fa-box-open"></i></div>
              <li className="sideItem">
                Inventario
                <a href="#" className="sideLink"></a>
              </li>
            </div>
            <div className="box">
              <div className="icon"><i class="fa-sharp fa-solid fa-chart-simple"></i></div>
              <li className="sideItem">
                Estadisticas
                <a href="#" className="sideLink"></a>
              </li>
            </div>
            <div className="box">
              <div className="icon"><i class="fa-solid fa-trophy"></i></div>
              <li className="sideItem">
                Logros
                <a href="#" className="sideLink"></a>
              </li>
            </div>
            
          </ul>
        </div>
      </aside>
      <article className="main">main</article>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;
