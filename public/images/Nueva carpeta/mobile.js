/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
//require('admin-lte/build/js/AdminLTE');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
require('owl.carousel/dist/owl.carousel');


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
window.Vue = require('vue');
import RegisterCustomerComponent from './componentes/mobile/RegisterMobileComponent';
import AddWithlistComponent from './componentes/AddWithlistComponent';
import DeleteWithlistComponent from './componentes/DeleteWithlistComponent';
import UpdateWithlistComponent from './componentes/UpdateWithlistComponent';
import ButtonCounter from './componentes/ButtonCounterComponent';
import DormitoriosCounter from './componentes/DormitoriosCounterComponent';
import BanosCounter from './componentes/BanosCounterComponent';
import Garagesounter from './componentes/GaragesCounterComponent';
import Login from './componentes/mobile/LoginMobileComponent.vue';
import RecoveryPasswordCustomer from './componentes/mobile/CustomerRecoveryPasswordMobileComponent';
import MessageSuscribe from './componentes/MessageSuscribeComponent';
import ListadoInmuebles from './componentes/mobile/ListadoInmueblesComponent';
import CalificacionAgente from './componentes/CalificacionAgenteComponent';

Vue.component('register-customer', RegisterCustomerComponent);
Vue.component('add-withlist', AddWithlistComponent);
Vue.component('remove-withlist', DeleteWithlistComponent);
Vue.component('update-withlist', UpdateWithlistComponent);
Vue.component('button-counter', ButtonCounter);
Vue.component('banos-counter', BanosCounter);
Vue.component('dormitorios-counter', DormitoriosCounter);
Vue.component('garages-counter', Garagesounter);
Vue.component('login-customer', Login);
Vue.component('customer-recovery', RecoveryPasswordCustomer);
Vue.component('message-susbribe', MessageSuscribe);
Vue.component('listado-inmuebles', ListadoInmuebles);
Vue.component('calificacion-agente', CalificacionAgente);
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
const app = new Vue({
    el: '#app',
    /*  mounted(){
          this.$message({
              showClose: true,
              message: 'Congrats, this is a success message.',
              type: 'success'
          });
      }*/
});

$(document).ready(function () {

    agentes();
    setInterval(function(){
        $('.agentes').show();
    },1000);


    $('div.alert').not('.alert-important').delay(3000).fadeOut(350);

    let passwordInput = document.getElementById('password'),
        toggle = document.getElementById('btnToggle'),
        icon = document.getElementById('eyeIcon');
    let respasswordInput = document.getElementById('respassword'),
        restoggle = document.getElementById('resbtnToggle'),
        resicon = document.getElementById('reseyeIcon');

    function togglePassword() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.classList.add("fa-eye-slash");
            //toggle.innerHTML = 'hide';
        } else {
            passwordInput.type = 'password';
            icon.classList.remove("fa-eye-slash");
            //toggle.innerHTML = 'show';
        }
    }

    function restogglePassword() {
        if (respasswordInput.type === 'password') {
            respasswordInput.type = 'text';
            resicon.classList.add("fa-eye-slash");
            //toggle.innerHTML = 'hide';
        } else {
            respasswordInput.type = 'password';
            resicon.classList.remove("fa-eye-slash");
            //toggle.innerHTML = 'show';
        }
    }

    function checkInput() {
        if (passwordInput.value === '') {
            icon.classList.add("fa-eye-slash");
            passwordInput.type = 'password';
        } else {
            icon.classList.remove("fa-eye-slash");
        }
    }

    function checkInputres() {
        if (respasswordInput.value === '') {
            resicon.classList.add("fa-eye-slash");
            respasswordInput.type = 'password';
        } else {
            resicon.classList.remove("fa-eye-slash");
        }
    }
    toggle.addEventListener('click', togglePassword, false);
    passwordInput.addEventListener('keyup', checkInput, false);

    restoggle.addEventListener('click', restogglePassword, false);
    respasswordInput.addEventListener('keyup', checkInputres, false);
});


$( "#MessageInmueble" ).submit(function() {
    $('#loader').addClass('loader');
    $('#btnMessageInmueble').prop('disabled', true);
});
$('#favorito-login').on('click', function () {
    $('#login').modal('show');
});



$("#PasswordVerify").on('click', function () {
    $('#formulario-casella').hide();
    $('#recovery-mobile').show();
});

$("#PasswordVerifyReload").on('click', function () {
    location.reload();
});




$("#salirRecovery").on('click', function () {
    $('#recoverypassword').modal('hide');
});
$("#backLogin").on('click', function () {
    $('#recoverypassword').modal('hide');
    $('#login').modal('show');
});
$("#RegistrarModal").on('click', function () {
    $('#register-tab').tab('show');
    $('#login').modal('show');
});

$("#loginModal").on('click', function () {
    $('#login-tab').tab('show');
    $('#login').modal('show');
});


function agentes(){
    $('.agentes').owlCarousel({
        loop: false,
        margin: 20,
        autoplay:false,
        autoplayHoverPause:false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                dots: true,
                loop: false
            }
        }
    });
}

$('.carosel').owlCarousel({
    loop: false,
    margin: 20,
    autoplay:false,
    autoplayHoverPause:false,
    responsiveClass: true,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive: {
        0: {
            items: 1,
            nav: true,
            dots: false
        },
        600: {
            items: 1,
            nav: true
        },
        1000: {
            items: 1,
            dots: true,
            loop: false
        }
    }
});

$('.item-post-recomendados').owlCarousel({
    loop: true,
    margin: 10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            dots: true,
            loop: false
        }
    }
});



(function() {

    var parent = document.querySelector("#rangeSlider");
    if(!parent) return;

    var
        rangeS = parent.querySelectorAll("input[type=range]"),
        numberS = parent.querySelectorAll("input[type=number]");

    rangeS.forEach(function(el) {
        el.oninput = function() {
            var slide1 = parseFloat(rangeS[0].value),
                slide2 = parseFloat(rangeS[1].value);

            if (slide1 > slide2) {
                [slide1, slide2] = [slide2, slide1];
                // var tmp = slide2;
                // slide2 = slide1;
                // slide1 = tmp;
            }

            numberS[0].value = slide1;
            numberS[1].value = slide2;
        }
    });

    numberS.forEach(function(el) {
        el.oninput = function() {
            var number1 = parseFloat(numberS[0].value),
                number2 = parseFloat(numberS[1].value);

            if (number1 > number2) {
                var tmp = number1;
                numberS[0].value = number2;
                numberS[1].value = tmp;
            }

            rangeS[0].value = number1;
            rangeS[1].value = number2;

        }
    });

})();
