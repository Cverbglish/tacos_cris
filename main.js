$(document).ready(function ($) {
    "use strict";


    var book_table = new Swiper(".book-table-img-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 3,
            stretch: 2,
            depth: 100,
            modifier: 5,
            slideShadows: false,
        },
        loopAdditionSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var team_slider = new Swiper(".team-slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });

    /*jQuery(".filters").on("click", function () {
        jQuery("#menu-dish").removeClass("bydefault_show");
    });
    $(function () {
        var filterList = {
            init: function () {
                $("#menu-dish").mixItUp({
                    selectors: {
                        target: ".dish-box-wp",
                        filter: ".filter",
                    },
                    animation: {
                        effects: "fade",
                        easing: "ease-in-out",
                    },
                    load: {
                        filter: ".all, .breakfast, .lunch, .dinner",
                    },
                });
            },
        };
        filterList.init();
    });*/

    jQuery(".menu-toggle").click(function () {
        jQuery(".main-navigation").toggleClass("toggled");
    });

    jQuery(".header-menu ul li a").click(function () {
        jQuery(".main-navigation").removeClass("toggled");
    });

    gsap.registerPlugin(ScrollTrigger);

    var elementFirst = document.querySelector('.site-header');
    ScrollTrigger.create({
        trigger: "body",
        start: "30px top",
        end: "bottom bottom",

        onEnter: () => myFunction(),
        onLeaveBack: () => myFunction(),
    });

    function myFunction() {
        elementFirst.classList.toggle('sticky_head');
    }

    var scene = $(".js-parallax-scene").get(0);
    var parallaxInstance = new Parallax(scene);


});


jQuery(window).on('load', function () {
    $('body').removeClass('body-fixed');

    //activating tab of filter
    let targets = document.querySelectorAll(".filter");
    let activeTab = 0;
    let old = 0;
    let dur = 0.4;
    let animation;

    for (let i = 0; i < targets.length; i++) {
        targets[i].index = i;
        targets[i].addEventListener("click", moveBar);
    }

    // initial position on first === All 
    gsap.set(".filter-active", {
        x: targets[0].offsetLeft,
        width: targets[0].offsetWidth
    });

    function moveBar() {
        if (this.index != activeTab) {
            if (animation && animation.isActive()) {
                animation.progress(1);
            }
            animation = gsap.timeline({
                defaults: {
                    duration: 0.4
                }
            });
            old = activeTab;
            activeTab = this.index;
            animation.to(".filter-active", {
                x: targets[activeTab].offsetLeft,
                width: targets[activeTab].offsetWidth
            });

            animation.to(targets[old], {
                color: "#0d0d25",
                ease: "none"
            }, 0);
            animation.to(targets[activeTab], {
                color: "#fff",
                ease: "none"
            }, 0);

        }

    }
});

let selectedCategory = 'all'; // Inicialmente, se muestran todos los platillos

// Función para mostrar los platillos
function displayMenu(items) {
    const menuDishContainer = document.getElementById('menu-dish');
    menuDishContainer.innerHTML = ''; // Limpiar contenido previo

    items.forEach(item => {
        const dishHtml = `
            <div class="col-lg-4 col-sm-6 dish-box-wp ${item.category.toLowerCase()}" data-cat="${item.category.toLowerCase()}">
                <div class="dish-box text-center">
                    <div class="dist-img">
                        <img src="${item.image}" alt="">
                    </div>
                    <div class="dish-title">
                        <h3 class="h3-title">${item.name}</h3>
                    </div>
                    <div class="dish-description">
                        <p>${item.description}</p>
                    </div>
                    <div class="dist-bottom-row">
                        <ul>
                            <li><b>$ ${item.price} c/u</b></li>
                            <li><button class="dish-add-btn"><i class="uil uil-utensils"></i></button></li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
        menuDishContainer.innerHTML += dishHtml;
    });
}

// Filtrar platillos por categoría
function filterByCategory(category) {
    selectedCategory = category;
    filterMenu();
}

// Filtrar platillos por nombre, precio y descripción
function filterMenu() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    const filteredItems = menuItems.filter(item => {
        const matchesSearch = 
            item.name.toLowerCase().includes(searchTerm) ||
            item.price.toString().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || item.category.toLowerCase() === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    displayMenu(filteredItems);
}

// Mostrar todos los platillos al cargar
window.onload = () => {
    displayMenu(menuItems);   
};
