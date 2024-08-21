class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
    <h1 class="hero-title" tabindex="0"> Nikmati pengalaman kuliner dengan menu kami yang disiapkan dengan bahan-bahan segar dan bumbu-bumbu berkualitas
    </h1>
    </div>`;
  }
}
customElements.define('hero-element', Hero);
