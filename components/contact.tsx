import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex h-[calc(200vh-150px)] items-center justify-center">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/thank-you" // redirige a esta página al enviar
        className="bg-black text-white rounded-md border-2 border-secondary py-5 px-60 bg-opacity-70"
      >
        {/* Campo oculto obligatorio para Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        {/* Campo honeypot invisible para evitar spam */}
        <p className="hidden">
          <label>
            No llenar si sos humano: <input name="bot-field" />
          </label>
        </p>

        <h1 className="text-4xl text-center font-bold my-2">Contáctenos</h1>

        <label htmlFor="nombre" className="block mt-2 mb-1">Nombre</label>
        <input
          id="nombre"
          type="text"
          name="nombre"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          required
          autoFocus
        />

        <label htmlFor="mail" className="block mt-2 mb-1">Correo electrónico</label>
        <input
          id="mail"
          type="email"
          name="email"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          required
        />

        <label htmlFor="mensaje" className="block mt-2 mb-1">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          rows={5}
          required
        />

        <button
          type="submit"
          className="text-2xl italic bg-black hover:bg-secondary px-4 py-1 rounded-sm border-secondary border-2 text-white transition-all duration-300 mt-4"
        >
          Enviar
        </button>

        <div className="mt-4 text-center">
          <Link href="/">
            <span className="underline text-secondary">Volver al inicio</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Contact;
