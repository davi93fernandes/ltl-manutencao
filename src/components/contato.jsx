export default function Contato() {
  return (
    <section className="section" id="contato">
      <h1>Contato</h1>
      <p>
        Entre em contato para solicitar orçamento ou tirar dúvidas sobre
        nossos produtos e serviços.
      </p>

      <form
        className="form-contato"
        name="contato"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contato" />

        <div className="campo">
          <label>Nome</label>
          <input type="text" name="nome" required />
        </div>

        <div className="campo">
          <label>E-mail</label>
          <input type="email" name="email" required />
        </div>

        <div className="campo">
          <label>Mensagem</label>
          <textarea name="mensagem"></textarea>
        </div>

        <button className="btn" type="submit">
          Enviar mensagem
        </button>
      </form>
    </section>
  );
}



