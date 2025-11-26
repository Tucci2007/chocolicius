export default function StorySection() {
  return (
    <section id="historia" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title serif-title text-4xl pink-text mb-12">
          Nuestra Historia
        </h2>

        <div className="relative">
          {/* Imagen 1 - Certificado */}
          <div className="float-right ml-8 mb-8 w-48 md:w-64">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img
                src="/pasted_file_Qt7HIt_certificado.jpg"
                alt="Certificado"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Párrafo 1 */}
          <p className="serif-text text-gray-700 text-lg leading-relaxed mb-6">
            <span className="serif-title text-2xl pink-text">CHOCOLICIUS</span> es más que un emprendimiento, es una historia de amor, perseverancia y sueños que comenzó en 2019, cuando con tan solo 11 años inicié este camino para juntar dinero para mi viaje de estudio. Lo que empezó como pequeños bombones elaborados junto a mi mamá, con cajitas de cartulina dorada hechas a mano y un corazón lleno de ilusión, se transformó en una pasión que fue creciendo con cada creación.
          </p>

          {/* Imagen 2 - Primer Taller */}
          <div className="float-left mr-8 mb-8 w-48 md:w-64">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img
                src="/pasted_file_D9Iicp_primer_taller.jpg"
                alt="Primer Taller"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Párrafo 2 */}
          <p className="serif-text text-gray-700 text-lg leading-relaxed mb-6">
            En 2023, a los 14 años, nació una nueva etapa, los talleres de chocolate para niños. Mi objetivo era compartir ese amor profundo por el chocolate y abrir para ellos una puerta hacia el arte y la imaginación sin límites.
          </p>

          {/* Párrafo 3 */}
          <p className="serif-text text-gray-700 text-lg leading-relaxed mb-6">
            Sin embargo, también en 2023 la vida me presentó un gran desafío, mi diagnóstico de diabetes. Fue un cambio doloroso y difícil, que al inicio trajo lágrimas y negación. Nada de lo que encontraba en las confiterías era apto para mí, y esa frustración encendió en mí una nueva misión; crear opciones dulces y deliciosas que también fueran saludables. Así nacieron mis propuestas bajas en azúcar; bombones, donas integrales con chocolate, trufas y más, todas elaboradas con amor y dedicación, pensadas para que nadie se quede sin disfrutar de un momento dulce.
          </p>

          {/* Imagen 3 - Primeros Huevitos */}
          <div className="float-right ml-8 mb-8 w-48 md:w-64">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img
                src="/pasted_file_UFXv6Y_primeros_huevitos.jpg"
                alt="Primeros Huevitos"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Párrafo Final */}
          <p className="serif-text text-gray-700 text-lg leading-relaxed">
            Hoy, <span className="serif-title text-2xl pink-text">CHOCOLICIUS</span> es el reflejo de un sueño que sigue creciendo, de la resiliencia frente a los desafíos y de la certeza de que el chocolate no solo endulza el paladar, sino también el alma. Cada producto lleva detrás una historia de amor, esfuerzo y esperanza, con el deseo de compartir con cada persona la magia de un bocado inolvidable.
          </p>

          {/* Clearfix */}
          <div className="clear-both"></div>
        </div>
      </div>
    </section>
  );
}
