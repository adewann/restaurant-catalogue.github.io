// footer.js
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer>
        <p>Copyright &copy; 2024 - <span>Yeboleilo</span></p>
        </footer>
      `;
  }
}

customElements.define('app-footer', Footer);
