import { useState } from "react";

export default function Contato() {
  const [enviado, setEnviado] = useState(false);

  return (
    <section className="contato">
      <form
        name="contato"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={() => setEnviado(true)}
        className="form-contato"
      >
        <input type="hidden" name="form-name" value="contato" />

        {!enviado ? (
          <>
            <h2>Fale Conosco</h2>

            <input type="text" name="nome" placeholder="Seu nome" required />
            <input type="email" name="email" placeholder="Seu e-mail" required />
            <textarea name="mensagem" placeholder="Mensagem" required />

            <button type="submit" className="btn">Enviar</button>
          </>
        ) : (
          <div className="sucesso">
            <h2>Mensagem enviada com sucesso ✅</h2>
            <p>Em breve entraremos em contato.</p>

            <a
              href="https://wa.me/55SEUNUMEROAQUI"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whats"
            >
              Falar agora pelo WhatsApp
            </a>
          </div>
        )}
      </form>
    </section>
  );
}
