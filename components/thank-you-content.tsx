import Link from "next/link";

const ThankYouContent = () => {
  return (
    <div className="text-center text-white mt-20">
      <h1 className="text-4xl font-bold mb-4">¡Gracias por contactarte!</h1>
      <p className="text-xl">Nos pondremos en contacto a la brevedad.</p>
      <Link href="/">
        <span className="underline text-secondary mt-6 block text-lg">
          Volver al inicio{" "}
        </span>
      </Link>
    </div>
  );
};

export default ThankYouContent;
