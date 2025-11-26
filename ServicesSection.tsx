export default function ServicesSection() {
  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title serif-title text-4xl pink-text mb-12">
          Nuestros Servicios
        </h2>

        {/* Video Chocomóvil */}
        <div className="mb-16 flex justify-center">
          <div className="w-full max-w-2xl">
            <video
              controls
              className="w-full rounded-lg shadow-lg"
              poster="/pasted_file_orNo3o_choco_movil.jpg"
            >
              <source src="/pasted_file_PyA8GM_video_chocomovil.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>

        {/* Servicios Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Cascada de Chocolate */}
          <div className="flex flex-col items-center">
            <h3 className="serif-title text-3xl pink-text mb-6 text-center">
              Cascada de Chocolate
            </h3>

            <div className="mb-6 w-full">
              <img
                src="/pasted_file_U9kYsk_fuente_de_chocolate.jpg"
                alt="Cascada de Chocolate"
                className="w-full rounded-lg shadow-lg object-cover h-80"
              />
            </div>

            <p className="serif-text text-gray-700 text-center mb-6 leading-relaxed">
              Nuestra cascada de chocolate incluye el asesoramiento al cliente, el montaje y el mantenimiento a la hora del evento. También incluye una amplia variedad de sabores como lo son frutillas, banana, kiwi, malvaviscos, oreos, cubanitos, obleas, mini donas, turrones de arroz y merenguitos. Para servirse incluye vasos de poli papel con frases chocolatosas y palillos de brocheta.
            </p>

            <p className="serif-text text-gray-700 text-center mb-6">
              ¡El precio ronda entre los{' '}
              <span className="gold-price">$170000</span>
              {' '}para 30 a 40 personas, este puede variar según la cantidad de invitados que tengas!
            </p>

            <button className="btn-primary">
              Contratar Cascada
            </button>
          </div>

          {/* Chocomóvil */}
          <div className="flex flex-col items-center">
            <h3 className="serif-title text-3xl pink-text mb-6 text-center">
              Chocomóvil
            </h3>

            <div className="mb-6 w-full">
              <img
                src="/pasted_file_orNo3o_choco_movil.jpg"
                alt="Chocomóvil"
                className="w-full rounded-lg shadow-lg object-cover h-80"
              />
            </div>

            <p className="serif-text text-gray-700 text-center mb-6 leading-relaxed">
              Contamos con el servicio de un stand de mini donas para tu evento. El mismo cuenta con salsas (chocolate, dulce de leche y caramelo) y toppings (oreos, bombones de banana, chips de chocolate, chocolinas, granas, gomitas, rocklets, malvaviscos y crocante de maní) entregándole al invitado dos minis donas con la posibilidad de que elija que toppings agregarle.
            </p>

            <div className="mb-6 w-full">
              <h4 className="serif-title text-xl pink-text mb-4 text-center">
                ¿Cómo contratar el servicio?
              </h4>
              <p className="serif-text text-gray-700 text-center mb-4 leading-relaxed">
                Para adquirir este servicio en tu evento, podes comunicarte con nosotros para asesorarte según la cantidad de invitados que tengas y tus gustos. Coordinamos la fecha y el horario en el que debemos asistir y lo atendemos durante 1 hora 30 min o 2 horas aproximadamente. En caso que sobren productos, lo servimos en la mesa de tus invitados.
              </p>
            </div>

            <div className="w-full bg-pink-50 p-6 rounded-lg">
              <p className="serif-text text-gray-700 text-center mb-3">
                Este servicio ronda entre:
              </p>
              <div className="space-y-2 text-center">
                <p className="gold-price animate-gold-pulse">
                  $220000 para 100 invitados
                </p>
                <p className="gold-price animate-gold-pulse">
                  $270000 para 150 invitados
                </p>
                <p className="gold-price animate-gold-pulse">
                  $320000 para 200 invitados
                </p>
              </div>
            </div>

            <button className="btn-primary mt-6">
              Contratar Chocomóvil
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
