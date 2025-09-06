export default function Programs() {
  return (
    <div id="programs">
      <div className="bg-dark-gray h-4"></div>
      <div className="relative isolate m-auto bg-white px-6 py-20 lg:px-8">
        {/* Fondo con gradiente */}
        <div
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>

        <div className="mx-auto container text-center">
          <h2 className="font-slab text-dark text-4xl">
            Elegí el programa ideal para vos!
          </h2>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-6xl lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-3xl bg-white/60 p-8 ring-1 ring-gray-900/10">
            <h3 className="text-base font-semibold text-orange">
              Acompañamiento Grupal
            </h3>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-gray-900">
              Reconectar en Comunidad
            </p>
            <p className="mt-4 text-base text-gray-600">
              A veces, lo que necesitamos no es solo avanzar… Es no hacerlo
              sol@s.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-600 list-disc list-inside">
              <li>Cambiar hábitos desde un enfoque real y humano.</li>
              <li>Aprender a alimentarse mejor sin dejar de disfrutar.</li>
              <li>Sentirse mejor con su cuerpo y su mente.</li>
              <li>
                Acompañarse en procesos de salud, vínculos, duelos o cambios
                laborales.
              </li>
            </ul>
            <a
              href="#"
              className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white bg-orange"
            >
              Recibir info
            </a>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-3xl bg-dark-gray p-8 ring-1 shadow-2xl ring-gray-900/10 text-white">
            <h3 className="text-base font-semibold text-orange">4 semanas</h3>
            <p className="mt-4 text-2xl font-semibold tracking-tight">
              Acompañamiento Individual
            </p>
            <p className="mt-4 text-base text-gray-300">
              Un espacio para mirar hacia adentro, ordenar, construir hábitos,
              sanar vínculos, transformar la forma en la que te alimentás, pensás
              o te hablás.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-300 list-disc list-inside">
              <li>Cambios de hábitos y alimentación consciente.</li>
              <li>Mejora emocional, autoestima y confianza.</li>
              <li>
                Trastornos alimentarios, procesos de salud, vínculos y trabajo.
              </li>
              <li>Opcional: encuentros presenciales puntuales.</li>
            </ul>
            <a
              href="#"
              className="mt-8 block rounded-md bg-orange px-3.5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Recibir info
            </a>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl bg-white/60 p-8 ring-1 ring-gray-900/10">
            <h3 className="text-base font-semibold text-orange">
              Recursos gratuitos
            </h3>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-gray-900">
              Gratis
            </p>
            <p className="mt-4 text-base text-gray-600">
              Este espacio está pensado para acompañarte también desde lo simple,
              lo cotidiano, lo accesible.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-600 list-disc list-inside">
              <li>Guías prácticas.</li>
              <li>Recetas simples y reales.</li>
              <li>Herramientas para organizarte y reconectar.</li>
              <li>Ejercicios para trabajar emociones y hábitos.</li>
            </ul>
            <a
              href="#"
              className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white bg-orange"
            >
              Recibir info
            </a>
          </div>
        </div>
      </div>
      <div className="bg-dark-gray h-4"></div>
    </div>
  );
}
