import { Phone, Instagram, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contacto" className="py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title serif-title text-4xl pink-text mb-12">
          Contacto
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Teléfono */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Phone className="w-12 h-12 pink-text mx-auto mb-4" />
            <h3 className="serif-title text-xl pink-text mb-3">Teléfono</h3>
            <a
              href="tel:+543544407216"
              className="serif-text text-gray-700 hover:pink-text transition-colors font-semibold text-lg"
            >
              3544-407216
            </a>
            <p className="serif-text text-gray-600 text-sm mt-2">
              Llamadas y WhatsApp
            </p>
          </div>

          {/* Instagram */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Instagram className="w-12 h-12 pink-text mx-auto mb-4" />
            <h3 className="serif-title text-xl pink-text mb-3">Instagram</h3>
            <a
              href="https://instagram.com/chcolicius_vd.oficial"
              target="_blank"
              rel="noopener noreferrer"
              className="serif-text text-gray-700 hover:pink-text transition-colors font-semibold text-lg"
            >
              @chcolicius_vd.oficial
            </a>
            <p className="serif-text text-gray-600 text-sm mt-2">
              Síguenos en redes
            </p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Mail className="w-12 h-12 pink-text mx-auto mb-4" />
            <h3 className="serif-title text-xl pink-text mb-3">Contacto Directo</h3>
            <p className="serif-text text-gray-700 font-semibold text-lg">
              Envíanos un mensaje
            </p>
            <p className="serif-text text-gray-600 text-sm mt-2">
              Responderemos pronto
            </p>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h3 className="serif-title text-2xl pink-text mb-6 text-center">
            Envíanos tu Mensaje
          </h3>

          <form className="space-y-6">
            <div>
              <label className="serif-text block text-gray-700 font-semibold mb-2">
                Nombre
              </label>
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-200 serif-text"
              />
            </div>

            <div>
              <label className="serif-text block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-200 serif-text"
              />
            </div>

            <div>
              <label className="serif-text block text-gray-700 font-semibold mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                placeholder="Tu teléfono"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-200 serif-text"
              />
            </div>

            <div>
              <label className="serif-text block text-gray-700 font-semibold mb-2">
                Asunto
              </label>
              <input
                type="text"
                placeholder="¿Sobre qué es tu consulta?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-200 serif-text"
              />
            </div>

            <div>
              <label className="serif-text block text-gray-700 font-semibold mb-2">
                Mensaje
              </label>
              <textarea
                placeholder="Cuéntanos tu consulta..."
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-200 serif-text resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-primary w-full py-3 font-semibold"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
