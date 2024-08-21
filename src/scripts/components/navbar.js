// navbar.js
class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="app-bar">
        <div class="app-bar__menu">
          <button id="hamburgerButton">☰</button>
        </div>
        <div class="app-bar__brand" tabindex="0">
          <h1>Yeboleilo</h1>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
          <ul>
            <li><a href="#/home">Home</a></li>
            <li><a href="#/favorite">Favorite</a></li>
            <li class="nav-item"><a href="https://www.instagram.com/ade.wann_/" target="_blank">About</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('nav-bar', Navbar);
