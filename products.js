// Carnes y productos con precios específicos
const precios = {
    Tacos: { bistec: 16, chorizo: 16, costilla: 16, pastor: 16, lengua: 16, tripa: 18, sesos: 16, buche: 16, suadero: 16, cabeza: 16, higado: 16 },
    Quesadillas: { bistec: 27, chorizo: 27, costilla: 27, pastor: 27, lengua: 27, tripa: 32, sesos: 27, buche: 27, suadero: 27, cabeza: 27, higado: 27 },
    Tortas: { bistec: 27, chorizo: 27, costilla: 27, pastor: 27, lengua: 27, tripa: 32, sesos: 27, buche: 27, suadero: 27, cabeza: 27, higado: 27 },
    Megas: { bistec: 70, chorizo: 70, costilla: 70, pastor: 70, lengua: 70, tripa: 80, sesos: 70, buche: 70, suadero: 70, cabeza: 70, higado: 70 },
    Orugas: { bistec: 27, chorizo: 27, costilla: 27, pastor: 27, lengua: 27, tripa: 32, sesos: 27, buche: 27, suadero: 27, cabeza: 27, higado: 27 },
    Volcanes: { bistec: 20, chorizo: 20, costilla: 20, pastor: 20, lengua: 20, tripa: 22, sesos: 20, buche: 20, suadero: 20, cabeza: 20, higado: 20 },
    Quesitortas: { bistec: 32, chorizo: 32, costilla: 32, pastor: 32, lengua: 32, tripa: 35, sesos: 32, buche: 32, suadero: 32, cabeza: 32, higado: 32 },
};

// Precios específicos para Chilaquiles Chicos y Grandes por carne
const preciosChilaquiles = {
    chicos: {
        bistec: 50,
        chorizo: 50,
        costilla: 50,
        pastor: 50,
        lengua: 50,
        tripa: 60,
        sesos: 50,
        buche: 50,
        suadero: 50,
        cabeza: 50,
        higado: 50
    },
    grandes: {
        bistec: 100,
        chorizo: 100,
        costilla: 100,
        pastor: 100,
        lengua: 100,
        tripa: 110,
        sesos: 100,
        buche: 100,
        suadero: 100,
        cabeza: 100,
        higado: 100
    }
};

// Generar items del menú dinámicamente
const menuItems = [];

// Generar productos Tacos, Quesadillas, Tortas, etc.
for (const [category, carnes] of Object.entries(precios)) {
    for (const [carne, price] of Object.entries(carnes)) {
        if (category !== 'Chilaquiles') {  // Excluyendo los chilaquiles sin tamaño
            menuItems.push({
                name: `${category} de ${capitalize(carne)}`,
                category,
                price,
                image: `assets/products_images/${category.toLowerCase()}/${category.toLowerCase()}_${carne}.jpg`,
                description: getProductDescription(category, carne)
            });
        }
    }
}

// Añadir Chilaquiles chicos y grandes con precio editable
for (const carne of Object.keys(precios.Tacos)) {
    const precioChico = preciosChilaquiles.chicos[carne];
    const precioGrande = preciosChilaquiles.grandes[carne];

    menuItems.push({
        name: `Chilaquiles Chicos de ${capitalize(carne)}`,
        category: 'Chilaquiles',
        price: precioChico,
        image: `assets/products_images/chilaquiles/chilaquiles_chicos_${carne}.jpg`,
        description: `Deliciosos chilaquiles chicos con ${carne}, bañados en salsa y acompañados de queso y crema.`
    });

    menuItems.push({
        name: `Chilaquiles Grandes de ${capitalize(carne)}`,
        category: 'Chilaquiles',
        price: precioGrande,
        image: `assets/products_images/chilaquiles/chilaquiles_grandes_${carne}.jpg`,
        description: `Deliciosos chilaquiles grandes con ${carne}, bañados en salsa y acompañados de queso y crema.`
    });
}

// Bebidas
menuItems.push(
    { name: 'Coca Cola 600ml', category: 'Bebidas', price: 25, image: 'assets/products_images/bebidas/cocacola_600ml.png', description: 'Refrescante Coca-Cola de 600 ml, ideal para acompañar tus comidas o disfrutar en cualquier momento del día.' },
    { name: 'Sprite 600ml', category: 'Bebidas', price: 25, image: 'assets/products_images/bebidas/sprite_600ml.png', description: 'Refrescante Sprite de 600 ml, ideal para acompañar tus comidas o disfrutar en cualquier momento del día.' },
    { name: 'Fanta 600ml', category: 'Bebidas', price: 25, image: 'assets/products_images/bebidas/fanta_600ml.jpg', description: 'Refrescante Fanta de 600 ml, ideal para acompañar tus comidas o disfrutar en cualquier momento del día.' },
    { name: 'Mundet 600ml', category: 'Bebidas', price: 25, image: 'assets/products_images/bebidas/mundet_600ml.jpg', description: 'Refrescante Mundet de 600 ml, ideal para acompañar tus comidas o disfrutar en cualquier momento del día.' }
);

// Función para capitalizar texto
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Función para generar descripciones dinámicas
function getProductDescription(category, carne) {
    const descriptions = {
        Tacos: `Exquisitos tacos de ${carne} preparados al momento, servidos con tortillas calientes y acompañados de salsas y guarniciones.`,
        Quesadillas: `Deliciosas quesadillas de ${carne} con queso derretido en tortillas recién hechas, perfectas para cualquier ocasión.`,
        Tortas: `Sabrosas tortas rellenas de ${carne}, servidas con pan fresco y los mejores complementos.`,
        Megas: `Impresionantes megas rellenas de ${carne}, diseñadas para los que tienen un gran apetito.`,
        Orugas: `Originales orugas de ${carne}, una opción única y deliciosa para disfrutar.`,
        Volcanes: `Crujientes volcanes con base de tortilla y ${carne}, coronados con queso gratinado.`,
        Quesitortas: `Una combinación perfecta de quesadilla y torta, con ${carne} y queso fundido.`,
        Chilaquiles: `Tradicionales chilaquiles con ${carne}, bañados en salsa y acompañados de queso y crema.`
    };
    return descriptions[category] || `Delicioso platillo de ${carne} en la categoría de ${category}.`;
}

console.log(menuItems);

