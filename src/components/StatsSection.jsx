const StatsSection = () => {
    return (
        <section>
            <div className="bg-dark-gray h-4"></div>
            <div className="bg-white py-20 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">

                        {/* Bloque 1 */}
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base/7 text-[#6D6D6D]">
                                Ayudando a las personas a alcanzar sus objetivos de salud.
                            </dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-[#6D6D6D] sm:text-5xl">
                                Más de 10 años
                            </dd>
                        </div>

                        {/* Bloque 2 */}
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base/7 text-[#6D6D6D]">
                                Opiniones verificadas
                            </dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-[#6D6D6D] sm:text-5xl flex items-center justify-center gap-1">
                                4.9
                                <span
                                    className="material-symbols-outlined relative top-1"
                                    style={{ fontSize: "48px" }}
                                >
                                    star
                                </span>
                            </dd>
                        </div>

                        {/* Bloque 3 */}
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base/7 text-[#6D6D6D]">
                                Programas nutricionales diseñados.
                            </dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-[#6D6D6D] sm:text-5xl">
                                + 1000
                            </dd>
                        </div>

                    </dl>
                </div>
            </div>
                        <div className="bg-dark-gray h-4"></div>

        </section>
    );
};

export default StatsSection;
