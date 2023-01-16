import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        header
      </header>
      <aside className="sidebar" id="nav">
      <a href="nav" className="botonMenu">
          <span class="material-symbols-outlined menu">menu</span>
        </a>
        <a href="nav" className="botonClose">
          <span class="material-symbols-outlined close">close</span>
        </a>
        <ul className="sideElem">
          <li className="sideItem">
            Perfil
            <a href="#" className="sideLink"></a>
          </li>
          <li className="sideItem">
            Inventario
            <a href="#" className="sideLink"></a>
          </li>
          <li className="sideItem">
            Estadisticas
            <a href="#" className="sideLink"></a>
          </li>
          <li className="sideItem">
            Logros
            <a href="#" className="sideLink"></a>
          </li>
        </ul>
      </aside>
      <article className="main">main</article>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;
