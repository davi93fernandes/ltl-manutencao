import Logo from "./Logo.jsx";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Logo />
        <span>Correntes para fornos industriais</span>
      </div>

      <div className="menu">
        <a href="#empresa">Empresa</a>
        <a href="#produtos">Produtos</a>
        <a href="#contato">Contato</a>
        
      </div>
    </nav>
  );
}


