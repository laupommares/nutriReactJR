const AboutMe = () => {
  return (
    <section className="bg-white py-20">
      <div className="container flex flex-col-reverse md:flex-row items-center gap-8 mx-auto">
        {/* Texto */}
        <div className="md:w-2/3 text-dark font-serif leading-relaxed">
          <h2 className="text-orange text-2xl font-slab mb-6">✨ Bienvenid@ a este espacio</h2>
          <h1 className="text-4xl font-serif font-bold mb-6">
            Soy Juliana, <br /> nutricionista y coach ontológica
          </h1>

          <p className="mb-4 leading-6">
            Hace más de diez años acompaño procesos hacia una vida más saludable, consciente y con propósito.
            Desde mi propia experiencia de sanación, hoy elijo compartir con sensibilidad, presencia y confianza
            en lo que la vida nos trae a aprender.
            <br /><br />
            Este espacio es para quienes buscan mejorar su alimentación y bienestar físico, pero también para
            quienes están transitando desafíos personales, laborales o de salud. Estoy para acompañarte con
            claridad, sostén y dirección.
            <br /><br />
            Creo profundamente en una vida donde podamos cuidarnos, disfrutar, crecer y vivir con sentido. Y
            también en que no tenemos que hacerlo sol@s.
            <br /><br />
            <span className="italic">
              Gracias por estar acá. Ojalá este espacio te sume, te abrace y te inspire a reconectar con lo que
              realmente te hace bien.
            </span>
          </p>

          <p className="mt-4 font-semibold">
            Con amor,
            <br />
            Juliana 🧡
          </p>
        </div>

        {/* Imagen */}
        <div className="md:w-1/2">
          <img
            src="/juli-about.jpg"
            alt="Juliana"
            className="rounded-xl shadow-md w-full max-w-sm mx-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
