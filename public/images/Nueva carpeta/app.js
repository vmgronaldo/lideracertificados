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
import RegisterCustomerComponent from './componentes/RegisterCustomerComponent';
import AddWithlistComponent from './componentes/AddWithlistComponent';
import DeleteWithlistComponent from './componentes/DeleteWithlistComponent';
import UpdateWithlistComponent from './componentes/UpdateWithlistComponent';
import ButtonCounter from './componentes/ButtonCounterComponent';
import DormitoriosCounter from './componentes/couters/DormitoriosDeskpotComponent';
import BanosCounter from './componentes/couters/BanosDeskpotComponent';
import AutosCounter from './componentes/couters/AutosDeskpotComponent';
import Login from './componentes/LoginComponent';
import RecoveryPasswordCustomer from './componentes/CustomerRecoveryPasswordComponent';
import MessageAsesor from './componentes/MessageDeskpotAgenteComponent';
import BuscarInmueble from './componentes/agente/FrmBuscarInmuebleComponent';
import ColocarInmueble from './componentes/agente/FrmColocarInmuebleComponent';
import AsesoriaInmueble from './componentes/agente/FrmAsesoriaInmuebleComponent';
import ListadoInmuebles from './componentes/agente/ListadoInmueblesComponent';
import CalificacionAgente from './componentes/CalificacionAgenteComponent';


Vue.component('register-customer', RegisterCustomerComponent);
Vue.component('add-withlist', AddWithlistComponent);
Vue.component('remove-withlist', DeleteWithlistComponent);
Vue.component('update-withlist', UpdateWithlistComponent);
Vue.component('button-counter', ButtonCounter);
Vue.component('dormitorios-counter', DormitoriosCounter);
Vue.component('banos-counter', BanosCounter);
Vue.component('autos-counter', AutosCounter);
Vue.component('login-customer', Login);
Vue.component('customer-recovery', RecoveryPasswordCustomer);
Vue.component('message-asesor', MessageAsesor);
Vue.component('buscar-inmueble', BuscarInmueble);
Vue.component('colocar-inmueble', ColocarInmueble);
Vue.component('asesoria-inmueble', AsesoriaInmueble);
Vue.component('listado-inmuebles', ListadoInmuebles);
Vue.component('calificacion-agente', CalificacionAgente);

import VueCurrencyInput from 'vue-currency-input'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyD0hTgJIyAlUF2BYlMZziH_H6UkPAdpjWc",
        libraries: "places", // necessary for places input

    }
});
const pluginOptions = {
    /* see config reference */
    globalOptions: { currency: 'USD' }
};
Vue.use(VueCurrencyInput, pluginOptions);

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
const footer = new Vue({
    el: '#main-footer',

});

$(document).ready(function () {

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





$('#favorito-login').on('click', function () {
    $('#login').modal('show');
});

$("#PasswordVerify").on('click', function () {
    $('#login').modal('hide');
    $('#recoverypassword').modal('show');
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

$('.item-testimonios').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 3,
            dots: true,
            loop: false
        }
    }
});



$('.post-recomendados').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            dots: false,
            nav: false
        },
        600: {
            items: 3,
            nav: false,
            dots: true
        },
        1000: {
            items: 3,
            dots: false,
            loop: false
        }
    }
});
$('.item-inmuebles').owlCarousel({
    margin: 10,
    nav: true,
    responsiveClass: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    loop: true,
    rewind: false,
    responsive: {
        0: {
            items: 1,
            dots: true,
            nav: false
        },
        600: {
            items: 3,
            nav: false,
            dots: true
        },
        1000: {
            items: 3,
            dots: false,
            nav: true,
            loop: false
        }
    }
});
$( ".owl-next").html('<img src="/img/icons/flecha-l.svg"/>');
$( ".owl-prev").html('<img src="/img/icons/flecha-r.svg" />');
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


// Jquery Dependency

$("input[data-type='currency']").on({
    keyup: function() {
        formatCurrency($(this));
    },
    blur: function() {
        formatCurrency($(this), "blur");
    }
});


function formatNumber(n) {
    // format number 1000000 to 1,234,567
    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


function formatCurrency(input, blur) {
    // appends $ to value, validates decimal side
    // and puts cursor back in right position.

    // get input value
    var input_val = input.val();

    // don't validate empty input
    if (input_val === "") { return; }

    // original length
    var original_len = input_val.length;

    // initial caret position
    var caret_pos = input.prop("selectionStart");

    // check for decimal
    if (input_val.indexOf(".") >= 0) {

        // get position of first decimal
        // this prevents multiple decimals from
        // being entered
        var decimal_pos = input_val.indexOf(".");

        // split number by decimal point
        var left_side = input_val.substring(0, decimal_pos);
        var right_side = input_val.substring(decimal_pos);

        // add commas to left side of number
        left_side = formatNumber(left_side);

        // validate right side
        right_side = formatNumber(right_side);

        // On blur make sure 2 numbers after decimal
        if (blur === "blur") {
            right_side += "00";
        }

        // Limit decimal to only 2 digits
        right_side = right_side.substring(0, 2);

        // join number by .
        input_val = "" + left_side + "." + right_side;

    } else {
        // no decimal entered
        // add commas to number
        // remove all non-digits
        input_val = formatNumber(input_val);
        input_val = "" + input_val;

        // final formatting
        if (blur === "blur") {
            input_val += ".00";
        }
    }

    // send updated string to input
    input.val(input_val);

    // put caret back in the right position
    var updated_len = input_val.length;
    caret_pos = updated_len - original_len + caret_pos;
    input[0].setSelectionRange(caret_pos, caret_pos);
}





