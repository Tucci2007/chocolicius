import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductsSection from '@/components/ProductsSection';
import ServicesSection from '@/components/ServicesSection';
import WorkshopsSection from '@/components/WorkshopsSection';
import StorySection from '@/components/StorySection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Scroll to section if hash exists
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => handleNavigation(hash), 100);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onNavigate={handleNavigation} />

      {/* Hero Section */}
      <section className="relative h-96 md:h-screen bg-gradient-to-br from-pink-100 via-white to-yellow-50 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-pink-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="serif-title text-5xl md:text-7xl pink-text mb-6">
            CHOCOLICIUS
          </h1>
          <p className="serif-text text-2xl md:text-3xl text-gray-700 mb-8">
            Chocolate Artesanal Hecho con Amor
          </p>
          <p className="serif-text text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            Descubre nuestros productos premium, servicios especiales y talleres para niños. 
            Cada bocado es una historia de pasión y dedicación.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleNavigation('productos')}
              className="btn-primary py-4 px-8 text-lg font-semibold"
            >
              Ver Productos
            </button>
            <button
              onClick={() => handleNavigation('contacto')}
              className="btn-secondary py-4 px-8 text-lg font-semibold"
            >
              Contactanos
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        <ProductsSection />
        <ServicesSection />
        <WorkshopsSection />
        <StorySection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
