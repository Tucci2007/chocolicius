export default function WorkshopsSection() {
  return (
    <section id="talleres" className="py-16 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title serif-title text-4xl pink-text mb-12">
          Talleres de Chocolate
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Contenido Principal */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="serif-text text-gray-700 text-lg leading-relaxed mb-6">
                Realizamos talleres para niños de 3 a 12 años con el objetivo de impulsarlos a crear, desarrollar nuevas habilidades y enamorarse del chocolate. Hoy en día tenemos 2 alumnos de 9 y 12 años que emprenden con lo que han aprendido en dichos talleres.
              </p>

              <p className="serif-text text-gray-700 text-lg leading-relaxed mb-6">
                Por lo general se realizan los días sábados, en un salón de fiestas de nuestra localidad. Requiere una inversión de{' '}
                <span className="gold-price">$24000</span>.
              </p>

              <p className="serif-text text-gray-700 text-lg leading-relaxed mb-6">
                ¡Nuestros talleres incluyen todos los materiales y la diversión asegurada! Los niños comparten un desayuno y aprenden a dibujar sobre el chocolate, decoramos wafles y mini donas, bañamos frutillas en chocolate, realizamos chupetines y alfajores. Las creaciones pueden variar según el objetivo del taller al igual que la temática.
              </p>

              <p className="serif-title text-2xl pink-text text-center py-6">
                ¡Es una mañana a puro chocolate, música y sorpresas!
              </p>

              <button className="btn-primary w-full py-3">
                Inscribir a mi hijo/a
              </button>
            </div>
          </div>

          {/* Imágenes */}
          <div className="flex flex-col gap-6">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img
                src="/pasted_file_T3vIhg_vicki_chamba.jpg"
                alt="Vicki Chamba en taller"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img
                src="/pasted_file_izABWi_vicki_chamba_halloween.jpg"
                alt="Vicki Chamba Halloween"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
