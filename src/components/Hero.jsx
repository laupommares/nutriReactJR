export default function Hero() {
  return (
    <section className="relative flex justify-center bg-white pt-40 pb-24 overflow-hidden max-h-[90vh]">
      {/* Fondo ilustrado */}
      <div
        className="absolute inset-0 bg-[url('/bg-dibujos.svg')] bg-no-repeat bg-[length:600px] bg-right-top opacity-20 pointer-events-none"
      ></div>

      <div className="container relative z-10 flex flex-col md:flex-row items-center gap-12">
        {/* Texto */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-dark font-serif leading-tight mb-6">
            Un espacio para reconectar con tu bienestar
          </h1>
          <p className="text-lg text-dark font-serif leading-relaxed">
            Soy Juliana, nutricionista y coach ontológica. Acompaño desde la
            experiencia, el respeto y la conciencia a quienes buscan sanar su
            relación con el cuerpo, la alimentación y su propósito.
          </p>
          <p className="italic text-dark font-serif text-right p-8">
            Con amor, Juliana ✨
          </p>
          <div>
            <a
              href="#programas"
              className="bg-orange text-dark px-6 py-3 rounded-lg font-semibold text-lg shadow hover:bg-light-orange transition inline-block"
            >
              Conocer programas
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="md:w-1/2">
          <img
            src="/tunos.jpg"
            alt="Juliana Re"
            className="rounded-xl shadow-lg w-full max-w-sm mx-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
