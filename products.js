// Lista de productos
const menuItems = [
    /* TACOS */
    {
        name: 'Tacos de Bistec',
        category: 'Tacos',
        price: 15,
        image: 'assets/products_images/tacos/tacos_bistec.jpg',
        description: 'Deliciosos tacos de Bistec, con salsa especial y acompañados de cebolla y cilantro.'
    },
    {
        name: 'Tacos de Chorizo',
        category: 'Tacos',
        price: 15,
        image: 'assets/products_images/tacos/tacos_chorizo.png',
        description: 'Deliciosos tacos de Chorizo, con salsa especial y acompañados de cebolla y cilantro.'
    },
    {
        name: 'Tacos de Costilla',
        category: 'Tacos',
        price: 15,
        image: 'assets/products_images/tacos/tacos_costilla.jpg',
        description: 'Deliciosos tacos de Costilla, con salsa especial y acompañados de cebolla y cilantro.'
    },
    {
        name: 'Tacos de Pastor',
        category: 'Tacos',
        price: 15,
        image: 'assets/products_images/tacos/tacos_pastor.jpg',
        description: 'Deliciosos tacos de Pastor, con salsa especial y acompañados de cebolla y cilantro.'
    },
    {
        name: 'Tacos de Lengua',
        category: 'Tacos',
        price: 15,
        image: 'assets/products_images/tacos/tacos_lengua.jpg',
        description: 'Deliciosos tacos de Lengua, con salsa especial y acompañados de cebolla y cilantro.'
    },
    {
        name: 'Tacos de Tripa',
        category: 'Tacos',
        price: 17,
        image: 'assets/products_images/tacos/tacos_tripa.jpg',
        description: 'Deliciosos tacos de tripa, con salsa especial y acompañados de cebolla y cilantro.'
    },
    {
        name: 'Tacos de Sesos',
        category: 'Tacos',
        price: 15,
        image: 'assets/products_images/tacos/tacos_sesos.jpg',
        description: 'Deliciosos tacos de sesos, con salsa especial y acompañados de cebolla y cilantro.'
    },
    {
        name: 'Tacos de Buche',
        category: 'Tacos',
        price: 15,
        image: 'assets/products_images/tacos/tacos_buche.jpg',
        description: 'Deliciosos tacos de buche, con salsa especial y acompañados de cebolla y cilantro.'
    },
    {
        name: 'Tacos de Suadero',
        category: 'Tacos',
        price: 15,
        image: 'assets/products_images/tacos/tacos_suadero.jpg',
        description: 'Deliciosos tacos de suadero, con salsa especial y acompañados de cebolla y cilantro.'
    },
    {
        name: 'Tacos de Cabeza',
        category: 'Tacos',
        price: 15,
        image: 'assets/products_images/tacos/tacos_cabeza.jpg',
        description: 'Deliciosos tacos de cabeza, con salsa especial y acompañados de cebolla y cilantro.'
    },
    {
        name: 'Tacos de Higado',
        category: 'Tacos',
        price: 15,
        image: 'assets/products_images/tacos/tacos_higado.jpg',
        description: 'Deliciosos tacos de higado, con salsa especial y acompañados de cebolla y cilantro.'
    },
    {
        name: 'Tacos de Aldilla',
        category: 'Tacos',
        price: 15,
        image: 'assets/products_images/tacos/tacos_aldilla.jpg',
        description: 'Deliciosos tacos de aldilla, con salsa especial y acompañados de cebolla y cilantro.'
    },

        /* QUESADILLAS */

    {
        name: 'Quesadillas de Bistec',
        category: 'Quesadillas',
        price: 25,
        image: 'assets/products_images/quesadillas/quesadilla_bistec.jpg',
        description: 'Deliciosas quesadillas rellenas de bistec con queso y acompañadas de verduras, disponibles en maíz o harina, ideales para disfrutar de un sabor casero y lleno de tradición.'
    },
    {
        name: 'Quesadillas de Chorizo',
        category: 'Quesadillas',
        price: 25,
        image: 'assets/products_images/quesadillas/quesadilla_chorizo.jpeg',
        description: 'Deliciosas quesadillas rellenas de chorizo con queso y acompañadas de verduras, disponibles en maíz o harina, ideales para disfrutar de un sabor casero y lleno de tradición.'
    },
    {
        name: 'Quesadillas de Costilla',
        category: 'Quesadillas',
        price: 25,
        image: 'assets/products_images/quesadillas/quesadilla_costilla.jpg',
        description: 'Deliciosas quesadillas rellenas de costilla con queso y acompañadas de verduras, disponibles en maíz o harina, ideales para disfrutar de un sabor casero y lleno de tradición.'
    },
    {
        name: 'Quesadillas de Pastor',
        category: 'Quesadillas',
        price: 25,
        image: 'assets/products_images/quesadillas/quesadilla_pastor.jpg',
        description: 'Deliciosas quesadillas rellenas de pastor con queso y acompañadas de verduras, disponibles en maíz o harina, ideales para disfrutar de un sabor casero y lleno de tradición.'
    },
    {
        name: 'Quesadillas de Lengua',
        category: 'Quesadillas',
        price: 25,
        image: 'assets/products_images/quesadillas/quesadilla_lengua.jpg',
        description: 'Deliciosas quesadillas rellenas de lengua con queso y acompañadas de verduras, disponibles en maíz o harina, ideales para disfrutar de un sabor casero y lleno de tradición.'
    },
    {
        name: 'Quesadillas de Tripa',
        category: 'Quesadillas',
        price: 30,
        image: 'assets/products_images/quesadillas/quesadilla_tripa.jpg',
        description: 'Deliciosas quesadillas rellenas de tripa con queso y acompañadas de verduras, disponibles en maíz o harina, ideales para disfrutar de un sabor casero y lleno de tradición.'
    },
    {
        name: 'Quesadillas de Sesos',
        category: 'Quesadillas',
        price: 25,
        image: 'assets/products_images/quesadillas/quesadilla_sesos.jpg',
        description: 'Deliciosas quesadillas rellenas de sesos con queso y acompañadas de verduras, disponibles en maíz o harina, ideales para disfrutar de un sabor casero y lleno de tradición.'
    },
    {
        name: 'Quesadillas de Buche',
        category: 'Quesadillas',
        price: 25,
        image: 'assets/products_images/quesadillas/quesadilla_buche.jpg',
        description: 'Deliciosas quesadillas rellenas de buche con queso y acompañadas de verduras, disponibles en maíz o harina, ideales para disfrutar de un sabor casero y lleno de tradición.'
    },
    {
        name: 'Quesadillas de Suadero',
        category: 'Quesadillas',
        price: 25,
        image: 'assets/products_images/quesadillas/quesadilla_Suadero.jpg',
        description: 'Deliciosas quesadillas rellenas de suadero con queso y acompañadas de verduras, disponibles en maíz o harina, ideales para disfrutar de un sabor casero y lleno de tradición.'
    },
    {
        name: 'Quesadillas de Cabeza',
        category: 'Quesadillas',
        price: 25,
        image: 'assets/products_images/quesadillas/quesadilla_cabeza.jpg',
        description: 'Deliciosas quesadillas rellenas de cabeza con queso y acompañadas de verduras, disponibles en maíz o harina, ideales para disfrutar de un sabor casero y lleno de tradición.'
    },
    {
        name: 'Quesadillas de Higado',
        category: 'Quesadillas',
        price: 25,
        image: 'assets/products_images/quesadillas/quesadilla_higado.jpg',
        description: 'Deliciosas quesadillas rellenas de pastor con queso y acompañadas de verduras, disponibles en maíz o harina, ideales para disfrutar de un sabor casero y lleno de tradición.'
    },
    {
        name: 'Quesadillas de Aldilla',
        category: 'Quesadillas',
        price: 25,
        image: 'assets/products_images/quesadillas/quesadilla_aldilla.jpg',
        description: 'Deliciosas quesadillas rellenas de aldilla con queso y acompañadas de verduras, disponibles en maíz o harina, ideales para disfrutar de un sabor casero y lleno de tradición.'
    },

        /* TORTAS */

    {
        name: 'Tortas de Bistec',
        category: 'Tortas',
        price: 25,
        image: 'assets/products_images/tortas/torta_bistec.jpg',
        description: 'Tortas hechas con carne de bistec jugosa, acompañada de verduras frescas y salsas al gusto.'
    },
    {
        name: 'Tortas de Chorizo',
        category: 'Tortas',
        price: 25,
        image: 'assets/products_images/tortas/torta_chorizo.jpg',
        description: 'Tortas hechas con carne de chorizo jugoso, acompañada de verduras frescas y salsas al gusto.'
    },
    {
        name: 'Tortas de Costilla',
        category: 'Tortas',
        price: 25,
        image: 'assets/products_images/tortas/torta_costilla.png',
        description: 'Tortas hechas con carne de costilla jugosa, acompañada de verduras frescas y salsas al gusto.'
    },
    {
        name: 'Tortas de Pastor',
        category: 'Tortas',
        price: 25,
        image: 'assets/products_images/tortas/torta_pastor.png',
        description: 'Tortas hechas con carne de pastor jugoso, acompañada de verduras frescas y salsas al gusto.'
    },
    {
        name: 'Tortas de Lengua',
        category: 'Tortas',
        price: 25,
        image: 'assets/products_images/tortas/torta_lengua.png',
        description: 'Tortas hechas con carne de lengua jugosa, acompañada de verduras frescas y salsas al gusto.'
    },
    {
        name: 'Tortas de Tripa',
        category: 'Tortas',
        price: 30,
        image: 'assets/products_images/tortas/torta_tripa.png',
        description: 'Tortas hechas con carne de tripa jugosa, acompañada de verduras frescas y salsas al gusto.'
    },
    {
        name: 'Tortas de Sesos',
        category: 'Tortas',
        price: 25,
        image: 'assets/products_images/tortas/torta_sesos.png',
        description: 'Tortas hechas con carne de sesos jugosos, acompañada de verduras frescas y salsas al gusto.'
    },
    {
        name: 'Tortas de Buche',
        category: 'Tortas',
        price: 25,
        image: 'assets/products_images/tortas/torta_buche.png',
        description: 'Tortas hechas con carne de buche jugoso, acompañada de verduras frescas y salsas al gusto.'
    },
    {
        name: 'Tortas de Suadero',
        category: 'Tortas',
        price: 25,
        image: 'assets/products_images/tortas/torta_suadero.png',
        description: 'Tortas hechas con carne de suadero jugoso, acompañada de verduras frescas y salsas al gusto.'
    },
    {
        name: 'Tortas de Cabeza',
        category: 'Tortas',
        price: 25,
        image: 'assets/products_images/tortas/torta_cabeza.png',
        description: 'Tortas hechas con carne de cabeza jugosa, acompañada de verduras frescas y salsas al gusto.'
    },
    {
        name: 'Tortas de Higado',
        category: 'Tortas',
        price: 25,
        image: 'assets/products_images/tortas/torta_higado.png',
        description: 'Tortas hechas con carne de higado jugoso, acompañada de verduras frescas y salsas al gusto.'
    },
    {
        name: 'Tortas de Aldilla',
        category: 'Tortas',
        price: 25,
        image: 'assets/products_images/tortas/torta_aldilla.png',
        description: 'Tortas hechas con carne de aldilla jugosa, acompañada de verduras frescas y salsas al gusto.'
    },

        /* MEGAS */

    {
        name: 'Megas de Bistec',
        category: 'Megas',
        price: 60,
        image: 'assets/products_images/megas/mega_bistec.png',
        description: 'Megas de bistec. Son quesadillas de harina con tres tortillas, llenas de bistec y acompañadas de verduras frescas y salsas.'
    },
    {
        name: 'Megas de Chorizo',
        category: 'Megas',
        price: 60,
        image: 'assets/products_images/megas/mega_chorizo.png',
        description: 'Megas de chorizo. Son quesadillas de harina con tres tortillas, llenas de chorizo y acompañadas de verduras frescas y salsas.'
    },
    {
        name: 'Megas de Costilla',
        category: 'Megas',
        price: 60,
        image: 'assets/products_images/megas/mega_costilla.png',
        description: 'Megas de costilla. Son quesadillas de harina con tres tortillas, llenas de costilla y acompañadas de verduras frescas y salsas.'
    },
    {
        name: 'Megas de Pastor',
        category: 'Megas',
        price: 60,
        image: 'assets/products_images/megas/mega_pastor.png',
        description: 'Megas de pastor. Son quesadillas de harina con tres tortillas, llenas de pastor y acompañadas de verduras frescas y salsas.'
    },
    {
        name: 'Megas de Lengua',
        category: 'Megas',
        price: 60,
        image: 'assets/products_images/megas/mega_lengua.png',
        description: 'Megas de lengua. Son quesadillas de harina con tres tortillas, llenas de lengua y acompañadas de verduras frescas y salsas.'
    },
    {
        name: 'Megas de Tripa',
        category: 'Megas',
        price: 65,
        image: 'assets/products_images/megas/mega_tripa.png',
        description: 'Megas de tripa. Son quesadillas de harina con tres tortillas, llenas de tripa y acompañadas de verduras frescas y salsas.'
    },
    {
        name: 'Megas de Sesos',
        category: 'Megas',
        price: 60,
        image: 'assets/products_images/megas/mega_sesos.png',
        description: 'Megas de sesos. Son quesadillas de harina con tres tortillas, llenas de sesos y acompañadas de verduras frescas y salsas.'
    },
    {
        name: 'Megas de Buche',
        category: 'Megas',
        price: 60,
        image: 'assets/products_images/megas/mega_buche.png',
        description: 'Megas de buche. Son quesadillas de harina con tres tortillas, llenas de buche y acompañadas de verduras frescas y salsas.'
    },
    {
        name: 'Megas de Suadero',
        category: 'Megas',
        price: 60,
        image: 'assets/products_images/megas/mega_suadero.png',
        description: 'Megas de suadero. Son quesadillas de harina con tres tortillas, llenas de suadero y acompañadas de verduras frescas y salsas.'
    },
    {
        name: 'Megas de Cabeza',
        category: 'Megas',
        price: 60,
        image: 'assets/products_images/megas/mega_cabeza.png',
        description: 'Megas de cabeza. Son quesadillas de harina con tres tortillas, llenas de cabeza y acompañadas de verduras frescas y salsas.'
    },
    {
        name: 'Megas de Higado',
        category: 'Megas',
        price: 60,
        image: 'assets/products_images/megas/mega_higado.png',
        description: 'Megas de higado. Son quesadillas de harina con tres tortillas, llenas de higado y acompañadas de verduras frescas y salsas.'
    },
    {
        name: 'Megas de Aldilla',
        category: 'Megas',
        price: 60,
        image: 'assets/products_images/megas/mega_aldilla.png',
        description: 'Megas de aldilla. Son quesadillas de harina con tres tortillas, llenas de aldilla y acompañadas de verduras frescas y salsas.'
    },

        /* ORUGAS */

    {
        name: 'Orugas de Bistec',
        category: 'Orugas',
        price: 30,
        image: 'assets/products_images/orugas/oruga_bistec.jpg',
        description: 'Orugas de bistec. Son quesadillas de maíz con triple tortilla, rellenas de Bistec jugoso y acompañadas de verduras frescas.'
    },
    {
        name: 'Orugas de Chorizo',
        category: 'Orugas',
        price: 30,
        image: 'assets/products_images/orugas/oruga_chorizo.png',
        description: 'Orugas de chorizo. Son quesadillas de maíz con triple tortilla, rellenas de chorizo jugoso y acompañadas de verduras frescas.'
    },
    {
        name: 'Orugas de Costilla',
        category: 'Orugas',
        price: 30,
        image: 'assets/products_images/orugas/oruga_costilla.png',
        description: 'Orugas de costilla. Son quesadillas de maíz con triple tortilla, rellenas de costilla jugosa y acompañadas de verduras frescas.'
    },
    {
        name: 'Orugas de Pastor',
        category: 'Orugas',
        price: 30,
        image: 'assets/products_images/orugas/oruga_pastor.png',
        description: 'Orugas de pastor. Son quesadillas de maíz con triple tortilla, rellenas de pastor jugoso y acompañadas de verduras frescas.'
    },
    {
        name: 'Orugas de Lengua',
        category: 'Orugas',
        price: 30,
        image: 'assets/products_images/orugas/oruga_lengua.png',
        description: 'Orugas de lengua. Son quesadillas de maíz con triple tortilla, rellenas de lengua jugosa y acompañadas de verduras frescas.'
    },
    {
        name: 'Orugas de Tripa',
        category: 'Orugas',
        price: 35,
        image: 'assets/products_images/orugas/oruga_tripa.png',
        description: 'Orugas de tripa. Son quesadillas de maíz con triple tortilla, rellenas de tripa jugosa y acompañadas de verduras frescas.'
    },
    {
        name: 'Orugas de Sesos',
        category: 'Orugas',
        price: 30,
        image: 'assets/products_images/orugas/oruga_costilla.png',
        description: 'Orugas de sesos. Son quesadillas de maíz con triple tortilla, rellenas de sesos jugosos y acompañadas de verduras frescas.'
    },
    {
        name: 'Orugas de Buche',
        category: 'Orugas',
        price: 30,
        image: 'assets/products_images/orugas/oruga_buche.png',
        description: 'Orugas de buche. Son quesadillas de maíz con triple tortilla, rellenas de buche jugoso y acompañadas de verduras frescas.'
    },
    {
        name: 'Orugas de Suadero',
        category: 'Orugas',
        price: 30,
        image: 'assets/products_images/orugas/oruga_suadero.png',
        description: 'Orugas de suadero. Son quesadillas de maíz con triple tortilla, rellenas de suadero jugoso y acompañadas de verduras frescas.'
    },
    {
        name: 'Orugas de Cabeza',
        category: 'Orugas',
        price: 30,
        image: 'assets/products_images/orugas/oruga_costilla.png',
        description: 'Orugas de cabeza. Son quesadillas de maíz con triple tortilla, rellenas de cabeza jugosa y acompañadas de verduras frescas.'
    },
    {
        name: 'Orugas de Higado',
        category: 'Orugas',
        price: 30,
        image: 'assets/products_images/orugas/oruga_higado.png',
        description: 'Orugas de higado. Son quesadillas de maíz con triple tortilla, rellenas de higado jugoso y acompañadas de verduras frescas.'
    },
    {
        name: 'Orugas de Aldilla',
        category: 'Orugas',
        price: 30,
        image: 'assets/products_images/orugas/oruga_aldilla.png',
        description: 'Orugas de aldilla. Son quesadillas de maíz con triple tortilla, rellenas de aldilla jugosa y acompañadas de verduras frescas.'
    },

        /* VOLCANES */

    {
        name: 'Volcanes de Bistec',
        category: 'Volcanes',
        price: 22,
        image: 'assets/products_images/volcanes/volcan_bistec.jpg',
        description: 'Volcanes de bistec. Son tortillas duritas de maíz rellenas de queso y bistec, acompañados de una salsa que resalta su sabor.'
    },
    {
        name: 'Volcanes de Chorizo',
        category: 'Volcanes',
        price: 22,
        image: 'assets/products_images/volcanes/volcan_chorizo.jpg',
        description: 'Volcanes de chorizo. Son tortillas duritas de maíz rellenas de queso y chorizo, acompañados de una salsa que resalta su sabor.'
    },
    {
        name: 'Volcanes de Costilla',
        category: 'Volcanes',
        price: 22,
        image: 'assets/products_images/volcanes/volcan_costilla.jpg',
        description: 'Volcanes de costilla. Son tortillas duritas de maíz rellenas de queso y costilla, acompañados de una salsa que resalta su sabor.'
    },
    {
        name: 'Volcanes de Pastor',
        category: 'Volcanes',
        price: 22,
        image: 'assets/products_images/volcanes/volcan_pastor.png',
        description: 'Volcanes de pastor. Son tortillas duritas de maíz rellenas de queso y pastor, acompañados de una salsa que resalta su sabor.'
    },
    {
        name: 'Volcanes de Lengua',
        category: 'Volcanes',
        price: 22,
        image: 'assets/products_images/volcanes/volcan_lengua.png',
        description: 'Volcanes de lengua. Son tortillas duritas de maíz rellenas de queso y lengua, acompañados de una salsa que resalta su sabor.'
    },
    {
        name: 'Volcanes de Tripa',
        category: 'Volcanes',
        price: 25,
        image: 'assets/products_images/volcanes/volcan_tripa.png',
        description: 'Volcanes de tripa. Son tortillas duritas de maíz rellenas de queso y tripa, acompañados de una salsa que resalta su sabor.'
    },
    {
        name: 'Volcanes de Sesos',
        category: 'Volcanes',
        price: 22,
        image: 'assets/products_images/volcanes/volcan_sesos.png',
        description: 'Volcanes de Sesos. Son tortillas duritas de maíz rellenas de queso y sesos, acompañados de una salsa que resalta su sabor.'
    },
    {
        name: 'Volcanes de Buche',
        category: 'Volcanes',
        price: 22,
        image: 'assets/products_images/volcanes/volcan_costilla.png',
        description: 'Volcanes de buche. Son tortillas duritas de maíz rellenas de queso y buche, acompañados de una salsa que resalta su sabor.'
    },
    {
        name: 'Volcanes de Suadero',
        category: 'Volcanes',
        price: 22,
        image: 'assets/products_images/volcanes/volcan_costilla.png',
        description: 'Volcanes de suadero. Son tortillas duritas de maíz rellenas de queso y suadero, acompañados de una salsa que resalta su sabor.'
    },
    {
        name: 'Volcanes de Cabeza',
        category: 'Volcanes',
        price: 22,
        image: 'assets/products_images/volcanes/volcan_costilla.png',
        description: 'Volcanes de cabeza. Son tortillas duritas de maíz rellenas de queso y cabeza, acompañados de una salsa que resalta su sabor.'
    },
    {
        name: 'Volcanes de Higado',
        category: 'Volcanes',
        price: 22,
        image: 'assets/products_images/volcanes/volcan_costilla.png',
        description: 'Volcanes de higado. Son tortillas duritas de maíz rellenas de queso e higado, acompañados de una salsa que resalta su sabor.'
    },
    {
        name: 'Volcanes de Aldilla',
        category: 'Volcanes',
        price: 22,
        image: 'assets/products_images/volcanes/volcan_aldilla.png',
        description: 'Volcanes de aldilla. Son tortillas duritas de maíz rellenas de queso y aldilla, acompañados de una salsa que resalta su sabor.'
    },

        /* QUESITORTAS */

    {
        name: 'Quesitortas de Bistec',
        category: 'Quesitortas',
        price: 30,
        image: 'assets/products_images/quesitortas/quesitorta_bistec.jpg',
        description: 'Las quesitortas combinan lo mejor de una torta y una quesadilla, con tortillas de maíz o harina rellenas de bistec, queso y salsa. Un platillo delicioso y completo que te hará volver por más.'
    },
    {
        name: 'Quesitortas de Chorizo',
        category: 'Quesitortas',
        price: 30,
        image: 'assets/products_images/quesitortas/quesitorta_chorizo.jpg',
        description: 'Las quesitortas combinan lo mejor de una torta y una quesadilla, con tortillas de maíz o harina rellenas de chorizo, queso y salsa. Un platillo delicioso y completo que te hará volver por más.'
    },
    {
        name: 'Quesitortas de Costilla',
        category: 'Quesitortas',
        price: 30,
        image: 'assets/products_images/quesitortas/quesitorta_costilla.jpg',
        description: 'Las quesitortas combinan lo mejor de una torta y una quesadilla, con tortillas de maíz o harina rellenas de costilla, queso y salsa. Un platillo delicioso y completo que te hará volver por más.'
    },
    {
        name: 'Quesitortas de Pastor',
        category: 'Quesitortas',
        price: 30,
        image: 'assets/products_images/quesitortas/quesitorta_pastor.jpg',
        description: 'Las quesitortas combinan lo mejor de una torta y una quesadilla, con tortillas de maíz o harina rellenas de pastor, queso y salsa. Un platillo delicioso y completo que te hará volver por más.'
    },
    {
        name: 'Quesitortas de Lengua',
        category: 'Quesitortas',
        price: 30,
        image: 'assets/products_images/quesitortas/quesitorta_lengua.jpg',
        description: 'Las quesitortas combinan lo mejor de una torta y una quesadilla, con tortillas de maíz o harina rellenas de lengua, queso y salsa. Un platillo delicioso y completo que te hará volver por más.'
    },
    {
        name: 'Quesitortas de Tripa',
        category: 'Quesitortas',
        price: 35,
        image: 'assets/products_images/quesitortas/quesitorta_tripa.jpg',
        description: 'Las quesitortas combinan lo mejor de una torta y una quesadilla, con tortillas de maíz o harina rellenas de tripa, queso y salsa. Un platillo delicioso y completo que te hará volver por más.'
    },
    {
        name: 'Quesitortas de Sesos',
        category: 'Quesitortas',
        price: 30,
        image: 'assets/products_images/quesitortas/quesitorta_sesos.jpg',
        description: 'Las quesitortas combinan lo mejor de una torta y una quesadilla, con tortillas de maíz o harina rellenas de sesos, queso y salsa. Un platillo delicioso y completo que te hará volver por más.'
    },
    {
        name: 'Quesitortas de Buche',
        category: 'Quesitortas',
        price: 30,
        image: 'assets/products_images/quesitortas/quesitorta_buche.jpg',
        description: 'Las quesitortas combinan lo mejor de una torta y una quesadilla, con tortillas de maíz o harina rellenas de buche, queso y salsa. Un platillo delicioso y completo que te hará volver por más.'
    },
    {
        name: 'Quesitortas de Suadero',
        category: 'Quesitortas',
        price: 30,
        image: 'assets/products_images/quesitortas/quesitorta_suadero.jpg',
        description: 'Las quesitortas combinan lo mejor de una torta y una quesadilla, con tortillas de maíz o harina rellenas de suadero, queso y salsa. Un platillo delicioso y completo que te hará volver por más.'
    },
    {
        name: 'Quesitortas de Cabeza',
        category: 'Quesitortas',
        price: 30,
        image: 'assets/products_images/quesitortas/quesitorta_cabeza.jpg',
        description: 'Las quesitortas combinan lo mejor de una torta y una quesadilla, con tortillas de maíz o harina rellenas de cabeza, queso y salsa. Un platillo delicioso y completo que te hará volver por más.'
    },
    {
        name: 'Quesitortas de Higado',
        category: 'Quesitortas',
        price: 30,
        image: 'assets/products_images/quesitortas/quesitorta_higado.jpg',
        description: 'Las quesitortas combinan lo mejor de una torta y una quesadilla, con tortillas de maíz o harina rellenas de higado, queso y salsa. Un platillo delicioso y completo que te hará volver por más.'
    },
    {
        name: 'Quesitortas de Aldilla',
        category: 'Quesitortas',
        price: 30,
        image: 'assets/products_images/quesitortas/quesitorta_aldilla.jpg',
        description: 'Las quesitortas combinan lo mejor de una torta y una quesadilla, con tortillas de maíz o harina rellenas de aldilla, queso y salsa. Un platillo delicioso y completo que te hará volver por más.'
    },

        /* CHILAQUILES */

    {
        name: 'Chilaquiles Grandes',
        category: 'Chilaquiles',
        price: 100,
        image: 'assets/products_images/chilaquiles/chilaquiles_grandes.jpg',
        description: 'Disfruta de unos chilaquiles bien cargados con totopos crujientes, salsa roja o verde, carne al gusto, queso, crema y cebolla. Un platillo lleno de sabor y satisfacción para los más hambrientos.'
    },
    {
        name: 'Chilaquiles Chicos',
        category: 'Chilaquiles',
        price: 50,
        image: 'assets/products_images/chilaquiles/chilaquiles_chicos.jpg',
        description: 'Una porción perfecta de chilaquiles, con totopos, salsa, carne, y los ingredientes clásicos que te encantarán, pero en una versión más ligera y deliciosa.'
    },

        /* BEBIDAS */

    {
        name: 'Coca Cola 600ml',
        category: 'Bebidas',
        price: 22,
        image: 'assets/products_images/bebidas/cocacola_600ml.png',
        description: 'Refrescante Coca-Cola de 600 ml, ideal para acompañar tus comidas o disfrutar en cualquier momento del día.'
    },
    {
        name: 'Sprite 600ml',
        category: 'Bebidas',
        price: 22,
        image: 'assets/products_images/bebidas/sprite_600ml.png',
        description: 'Refrescante Sprite de 600 ml, ideal para acompañar tus comidas o disfrutar en cualquier momento del día.'
    },
    {
        name: 'Fanta 600ml',
        category: 'Bebidas',
        price: 22,
        image: 'assets/products_images/bebidas/fanta_600ml.jpg',
        description: 'Refrescante Fanta de 600 ml, ideal para acompañar tus comidas o disfrutar en cualquier momento del día.'
    },
    {
        name: 'Mundet 600ml',
        category: 'Bebidas',
        price: 22,
        image: 'assets/products_images/bebidas/mundet_600ml.jpg',
        description: 'Refrescante Mundet de 600 ml, ideal para acompañar tus comidas o disfrutar en cualquier momento del día.'
    }
];
