export default function Contato() {
  return (
    <section className="section" id="contato">
      <h1>Contato</h1>
      <p>
        Entre em contato para solicitar orçamento ou tirar dúvidas sobre
        nossos produtos e serviços.
      </p>

      <form
        name="contato"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="form-contato"
      >
        {/* Campo anti-spam invisível */}
        <input type="hidden" name="form-name" value="contato" />
        <p hidden>
          <label>
            Não preencha: <input name="bot-field" />
          </label>
        </p>

        <div className="campo">
          <label htmlFor="nome">Nome</label>
          <input id="nome" type="text" name="nome" required />
        </div>

        <div className="campo">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" name="email" required />
        </div>

        <div className="campo">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" name="mensagem" required />
        </div>

        <button className="btn" type="submit">
          Enviar mensagem
        </button>
      </form>
    </section>
  );
}


