export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sobre Nosotros */}
          <div>
            <h3 className="serif-title text-xl mb-4">CHOCOLICIUS</h3>
            <p className="serif-text text-gray-400 text-sm leading-relaxed">
              Emprendimiento de chocolates artesanales hecho con amor en Villa Dolores, Córdoba.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="serif-title text-xl mb-4">Enlaces Rápidos</h3>
            <ul className="serif-text text-gray-400 text-sm space-y-2">
              <li><a href="#productos" className="hover:text-pink-400 transition-colors">Productos</a></li>
              <li><a href="#servicios" className="hover:text-pink-400 transition-colors">Servicios</a></li>
              <li><a href="#talleres" className="hover:text-pink-400 transition-colors">Talleres</a></li>
              <li><a href="#historia" className="hover:text-pink-400 transition-colors">Nuestra Historia</a></li>
              <li><a href="#contacto" className="hover:text-pink-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="serif-title text-xl mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/chcolicius_vd.oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <span className="text-white font-bold">f</span>
              </a>
              <a
                href="https://instagram.com/chcolicius_vd.oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <span className="text-white font-bold">I</span>
              </a>
              <a
                href="tel:+543544407216"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <span className="text-white font-bold">W</span>
              </a>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-700 pt-8">
          <p className="serif-text text-gray-400 text-center text-sm">
            &copy; 2024 CHOCOLICIUS. Todos los derechos reservados. Hecho con amor en Villa Dolores, Córdoba.
          </p>
        </div>
      </div>
    </footer>
  );
}
