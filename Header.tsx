import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Productos', id: 'productos' },
    { label: 'Servicios', id: 'servicios' },
    { label: 'Talleres', id: 'talleres' },
    { label: 'Nuestra Historia', id: 'historia' },
    { label: 'Contacto', id: 'contacto' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo y Marca */}
          <div className="flex items-center gap-3">
            <img 
              src="/pasted_file_JK0Jp3_logo.jpg" 
              alt="Chocolicius Logo" 
              className="h-12 w-12 object-cover rounded-full"
            />
            <div>
            <h1 className="text-2xl font-bold pink-text" style={{fontFamily: 'Playfair Display, serif'}}>CHOCOLICIUS</h1>
            <p className="text-sm gold-text" style={{fontFamily: 'Crimson Text, serif'}}>Hecho con amor</p>
            </div>
          </div>

          {/* Menú de Navegación - Desktop */}
          <nav className="hidden md:flex gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-700 hover:pink-text transition-colors font-semibold" style={{fontFamily: 'Crimson Text, serif'}}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Carrito y Menú Mobile */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ShoppingCart className="w-6 h-6 pink-text" />
              <span className="absolute top-0 right-0 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Botón Menú Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menú Mobile */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left serif-text text-gray-700 hover:pink-text py-2 transition-colors font-semibold"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
