import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Empresa from "./components/Empresa";
import Produtos from "./components/Produtos";
import Contato from "./components/contato";
import Footer from "./components/Footer"
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Empresa />
      <Produtos />
      <Contato />
      <Footer/>

      <a
  href="https://wa.me/555184190274"
  className="whatsapp"
  target="_blank"
  rel="noopener noreferrer"
>
  WhatsApp
</a>

    </>
  );
}



