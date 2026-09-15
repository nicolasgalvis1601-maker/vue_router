export const categoryMenus = {
  hamburguesas: {
    title: 'Hamburguesas',
    description: 'Carne a la parrilla, panes suaves y salsas de la casa en cada mordisco.',
    banner: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1600&q=85',
    products: [
      { name: 'Clásica Doble', ingredients: 'Doble carne, cheddar, lechuga, tomate y salsa especial.', price: 18500, tag: 'Más pedido', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=85' },
      { name: 'BBQ Bacon', ingredients: 'Carne de res, tocineta crocante, aros de cebolla y BBQ.', price: 22900, tag: 'Nuevo', image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=85' },
      { name: 'Verde Grill', ingredients: 'Medallón de garbanzo, aguacate, espinaca y tomate.', price: 17900, tag: 'Vegetariano', image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=85' },
      { name: 'Jalapeño Fire', ingredients: 'Carne, pepper jack, jalapeños y mayonesa de chipotle.', price: 19900, tag: 'Picante', image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=85' }
    ],
    chef: { name: 'La Suprema del Chef', ingredients: 'Triple carne, gouda ahumado, cebolla caramelizada y salsa de trufa.', price: 28900, image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=900&q=85' }
  },
  perros: {
    title: 'Perros calientes',
    description: 'Recetas callejeras con salchicha premium, toppings abundantes y mucho sabor.',
    banner: 'https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=1600&q=85',
    products: [
      { name: 'Perro Sabor', ingredients: 'Salchicha premium, queso, ripio, papitas y salsas de la casa.', price: 13900, tag: 'Más pedido', image: 'https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=800&q=85' },
      { name: 'Choriperro', ingredients: 'Chorizo santarrosano, chimichurri, cebolla y queso costeño.', price: 16900, tag: 'Nuevo', image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=800&q=85' },
      { name: 'Perro Mexicano', ingredients: 'Salchicha, guacamole, pico de gallo, jalapeño y nachos.', price: 15900, tag: 'Picante', image: 'https://images.unsplash.com/photo-1612392062798-2dbaa5c4a3a0?auto=format&fit=crop&w=800&q=85' },
      { name: 'Perro Veggie', ingredients: 'Salchicha vegetal, cebolla crispy, tomate y mostaza dulce.', price: 14900, tag: 'Vegetariano', image: 'https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?auto=format&fit=crop&w=800&q=85' }
    ],
    chef: { name: 'El Callejero', ingredients: 'Salchicha ahumada, pulled pork, queso fundido, maíz y salsa de ajo.', price: 19900, image: 'https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=900&q=85' }
  },
  pizzas: {
    title: 'Pizzas',
    description: 'Masa artesanal, borde dorado y combinaciones recién salidas del horno.',
    banner: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1600&q=85',
    products: [
      { name: 'Pepperoni Clásica', ingredients: 'Salsa de tomate, mozzarella, pepperoni y orégano.', price: 24900, tag: 'Más pedido', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=85' },
      { name: 'Pollo BBQ', ingredients: 'Pollo a la parrilla, mozzarella, cebolla morada y BBQ.', price: 26900, tag: 'Nuevo', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=85' },
      { name: 'Huerta Italiana', ingredients: 'Tomate cherry, champiñones, pimentón, albahaca y mozzarella.', price: 23900, tag: 'Vegetariano', image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=85' },
      { name: 'Diavola', ingredients: 'Salami picante, jalapeños, mozzarella y aceite de ají.', price: 27900, tag: 'Picante', image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=85' }
    ],
    chef: { name: 'La Forno', ingredients: 'Prosciutto, burrata, rúgula fresca, tomates secos y reducción balsámica.', price: 32900, image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85' }
  },
  bebidas: {
    title: 'Bebidas',
    description: 'Opciones frías y refrescantes para acompañar tu comida o disfrutar solas.',
    banner: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1600&q=85',
    products: [
      { name: 'Limonada de Coco', ingredients: 'Limón natural, crema de coco, hielo y un toque de hierbabuena.', price: 8900, tag: 'Más pedido', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=85' },
      { name: 'Maracuyá Tropical', ingredients: 'Pulpa de maracuyá, naranja, hielo y semillas frescas.', price: 7900, tag: 'Nuevo', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=85' },
      { name: 'Malteada de Vainilla', ingredients: 'Helado de vainilla, leche fría, crema y galleta.', price: 12900, image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=85' },
      { name: 'Mango Biche', ingredients: 'Mango verde, limón, hielo y borde de sal y pimienta.', price: 9900, tag: 'Picante', image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=85' }
    ],
    chef: { name: 'Sangría de la Casa', ingredients: 'Vino tinto, frutos rojos, manzana, naranja y especias.', price: 16900, image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=85' }
  },
  postres: {
    title: 'Postres',
    description: 'El cierre perfecto: dulces caseros, texturas cremosas y porciones para compartir.',
    banner: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1600&q=85',
    products: [
      { name: 'Cheesecake de Frutos Rojos', ingredients: 'Base de galleta, crema de queso y coulis de frutos rojos.', price: 12900, tag: 'Más pedido', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=85' },
      { name: 'Brownie con Helado', ingredients: 'Brownie de chocolate, helado de vainilla y salsa de chocolate.', price: 13900, tag: 'Nuevo', image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=800&q=85' },
      { name: 'Copa Tropical', ingredients: 'Mango, piña, yogur griego, granola y miel.', price: 10900, tag: 'Vegetariano', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=85' },
      { name: 'Churros de Canela', ingredients: 'Churros crujientes, azúcar de canela, arequipe y chocolate.', price: 9900, image: 'https://images.unsplash.com/photo-1624371414361-e670edf4898a?auto=format&fit=crop&w=800&q=85' }
    ],
    chef: { name: 'Volcán de Chocolate', ingredients: 'Bizcocho tibio de chocolate, centro líquido y helado de vainilla.', price: 15900, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85' }
  }
}
