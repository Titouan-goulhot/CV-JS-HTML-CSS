
//TYPED
var typed = new Typed('.typed',{
    strings: [' Mon parcours',' Mes compétences', ' Mes envies', ' Mes passions' ],
    typeSpeed: 20,
    backSpeed : 0,
    smartBackspace: true,
    loop: true
});

// ********************************************COMPTEUR*******************************

// let compteur = 0;

// $(window).scroll(function() {

//     const top = $('.counter').offset().top -
//      window.innerHeight;

//     //si le compteur  est à 0 et qu'on scroll ....
//     if(compteur == 0 && $(window).scrollTop() > top){
//         $('.counter-value').each(function() {
//             let $this = $(this),
//             countTO = $this.attr('data-count');
//             $({
//                 countNum: $this.text()
//             }).animate({
//                 countNum : countTO
//             },
//             {
//                 duration: 10000,
//                 easing: 'swing',
//                 step: function() {
//                     $this.text(Math.floor(this.countNum));
//             },
//             complete: function(){
//                 $this.text(this.countNum);
//             }
//             });
//         });
//         // Pour ne pas relancer la fonction à chaque fois
//         compteur = 1;
//     }
// });

//AOS

AOS.init();