interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
}

const products: Product[] = [
  {
    id: 'alfajor_boda',
    name: 'Alfajores de Boda',
    image: '/pasted_file_eIYEry_alfajor_boda.jpg',
    description: 'Alfajores de chocolate con dulce de leche y crocante de maní, con una decoración a elección en chocolate.',
    price: '$6000 la media docena'
  },
  {
    id: 'corazon_pinata_navidad',
    name: 'Torta Piñata Navidad',
    image: '/pasted_file_mer5ca_corazon_piñata_navidad.jpg',
    description: 'Torta piñata: Bases de chocolates rellena de golosinas con diseño personalizado.',
    price: '$35000'
  },
  {
    id: 'corazones',
    name: 'Bouquet de Bombones',
    image: '/pasted_file_geymih_corazones.jpg',
    description: 'Bouquet de bombones: Lapicero/ maceta impresa en 3D con flores artificiales y 5 o 6 bombones rellenos.',
    price: '$11500'
  },
  {
    id: 'corazones_happy',
    name: 'Bloque de 27 Bombones',
    image: '/pasted_file_C2dmGW_corazones_happy.jpg',
    description: 'Bloque de 27 bombones rellenos para cumpleaños u ocasiones especiales.',
    price: '$37000'
  },
  {
    id: 'corazones_souveniers',
    name: 'Bombones Abiertos',
    image: '/pasted_file_ozpbPD_corazones_souveniers.jpg',
    description: 'Base de chocolate rellenos con chocolinas, crema Block y crema Bon o bon con decoración a elección por 12 unidades.',
    price: '$11000'
  },
  {
    id: 'frutillas_chocolate',
    name: 'Box de Frutillas',
    image: '/pasted_file_Mrmu6o_frutillas_chocolate.jpg',
    description: 'Box de 10 frutillas + 3 chocolatines.',
    price: '$10000'
  },
  {
    id: 'huevo_rasta',
    name: 'Huevo Rasta',
    image: '/pasted_file_73rd1e_huevo_rasta.jpg',
    description: 'Contiene una base de chocolate negro, relleno de bizcochuelo de chocolate, dulce de leche y trocitos de chocolate blanco. Decorado con dulce de leche, chocolate y trozos de alfajor Rasta.',
    price: '$20000'
  },
  {
    id: 'frutillas_huevitos',
    name: 'Bowl de Cerámica',
    image: '/pasted_file_pTAg14_frutillas_huevitos.jpg',
    description: 'Bowl de cerámica con 8 frutillas bañadas en chocolate + 12 bombones con frutos secos y pétalos de rosa.',
    price: '$18000'
  },
  {
    id: 'huevitos_cereales',
    name: 'Box de 15 Bombones',
    image: '/pasted_file_qYUVoD_huevitos_cereales.jpg',
    description: 'Box de 15 bombones rellenos expuestos.',
    price: '$8500'
  },
  {
    id: 'pelota_AFA',
    name: 'Torta Piñata AFA',
    image: '/pasted_file_iZyqvw_pelota_AFA.jpg',
    description: 'Torta piñata: Bases de chocolates rellena de golosinas con diseño personalizado.',
    price: '$37000'
  },
  {
    id: 'souveniers_80',
    name: 'Alfajores Oreo Souvenirs',
    image: '/pasted_file_eKLDFX_souveniers_80\'.jpg',
    description: 'Alfajores oreo para souvenirs.',
    price: '$1200 c/u consultar x mayor'
  },
  {
    id: 'tabla_dia_del_padre',
    name: 'Tabla Dulce Día del Padre',
    image: '/pasted_file_vNoqvW_tabla_dia_del_padre.jpg',
    description: '3 alfajores de chocolate, 3 bombones expuestos, 6 bombones, 6 medallas de chocolate con frutos secos y 2 medallas de chocolate con frase personalizada.',
    price: '$19000'
  },
  {
    id: 'tabletitas',
    name: 'Paletas Souvenir',
    image: '/pasted_file_7PhvqM_tabletitas.jpg',
    description: 'Paletas souvenir con decoración a elección. Base de chocolate rellenas con vainillas y dulce de leche.',
    price: '$1500 c/u consultar por mayor'
  }
];

export default function ProductsSection() {
  return (
    <section id="productos" className="py-16 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title serif-title text-4xl pink-text mb-12">
          Nuestros Productos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Imagen del Producto */}
              <div className="relative overflow-hidden h-64 bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold serif-title mb-3 pink-text">
                  {product.name}
                </h3>

                <p className="serif-text text-gray-700 text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="gold-price">
                    {product.price}
                  </span>
                  <button className="btn-primary py-2 px-4 text-sm">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
