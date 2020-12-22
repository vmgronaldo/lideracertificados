<template>


    <form v-loading="loaded" @submit.prevent="submit" autocomplete="off" class="formSubmit">
        <div class="row main-form">
            <div class="col-md-6 first-column">

                <input type="hidden" name="asunto" id="asunto" v-model="fields.asunto">

                <p class="title"><span>1.</span> Completa las características
                    principales de tu inmueble ideal.</p>

                <div class="operacion">
                    <input type="radio" id="alquilerv2" name="operacion" v-model="fields.operacion" class="checkbox" checked value="1"/>
                    <label for="alquilerv2" class="checkbox-label">
                        <span>En Alquiler</span>
                    </label>
                    <input type="radio" id="venta2" name="operacion" v-model="fields.operacion" class="checkbox"
                           value="2"/>
                    <label for="venta2" class="checkbox-label">
                        <span>En Venta</span>
                    </label>
                 </div>
                <div v-if="errors && errors.operacion" class="text-danger text-center">{{ errors.operacion[0] }}    </div>


                <div class="tipo">

                    <input type="radio" id="departamento2" name="tipo" v-model="fields.tipo" checked class="checkbox"
                           value="1"/>
                    <label for="departamento2" class="checkbox-label">
                        <span>Departamento</span>
                    </label>

                    <input type="radio" id="casa2" name="tipo" v-model="fields.tipo" class="checkbox" value="2"/>
                    <label for="casa2" class="checkbox-label">
                        <span>Casa</span>
                    </label>

                    <input type="radio" id="oficina-administrativa2" v-model="fields.tipo" name="tipo" class="checkbox"
                           value="5"/>
                    <label for="oficina-administrativa2" class="checkbox-label">
                        <span>Oficina</span>
                    </label>
                    <input type="radio" id="local-comercial2" name="tipo" v-model="fields.tipo" class="checkbox"
                           value="3"/>
                    <label for="local-comercial2" class="checkbox-label">
                        <span>Local Comercial</span>
                    </label>

                    <input type="radio" id="terreno2" name="tipo" v-model="fields.tipo" class="checkbox"
                           value="9"/>
                    <label for="terreno2" class="checkbox-label">
                        <span>Terreno</span>
                    </label>

                    <div v-if="errors && errors.tipo" class="text-danger text-center">{{ errors.tipo[0] }}    </div>

                </div>

                <div class="google-keywords">

                                <gmap-autocomplete  :options="autocompleteOptions"
                                    @place_changed="setPlace" placeholder="Ubicado en: Ej. Miraflores">
                                </gmap-autocomplete>
                                <input type="hidden" name="keyword" v-model="fields.keyword">
                    <img :src="lupa" alt="Lupa">

                </div>



                <div class="dormitorios">
                    <img :src="foto" width="50px" alt="">
                    <div class="buttons-add">
                        <button type="button" v-on:click="dencrement"><img :src="menor" alt=""></button>
                        <input type="number" :value="counter" name="dormitorios" id="dormitorios" :min="1" :max="8">
                        <button class="maxbutton" type="button" v-on:click="increment"><img :src="agregar" alt="">
                        </button>
                    </div>
                </div>
                <div class="precios">
                    <p>Valor estimado:</p>
                    <currency-input class="form-control" v-model="fields.price" v-currency="{currency: 'USD', locale: 'en'}" placeholder="US$.1,000,000.00"/>

                </div>
            </div>
            <div class="col-md-6 second-column">
                <div class="datos">
                    <p class="title"><span>2.</span>Por favor, déjanos tus datos para poder
                        atender tu requerimiento</p>
                    <input type="hidden" v-model="user" name="user_id" id="user_id">

                    <div class="customer">
                        <input placeholder="Nombre y Apellido" v-model="fields.firstname" type="text"
                               class="form-control"
                               name="firstname" id="firstname">
                        <div v-if="errors && errors.firstname" class="text-danger text-center">{{ errors.firstname[0]
                            }}
                        </div>

                        <input placeholder="Email" type="email" class="form-control"
                               name="email" id="email" v-model="fields.email">
                        <div v-if="errors && errors.email" class="text-danger text-center">{{ errors.email[0] }}</div>
                        <div class="phone">
                            <i class="fa fa-whatsapp"></i>
                            <input placeholder="N° Whatsapp / Celular" type="text"
                                   class="form-control" name="telefono" id="telefono" v-model="fields.telefono">
                        </div>
                        <div v-if="errors && errors.telefono" class="text-danger text-center">{{ errors.telefono[0] }}
                        </div>


                    </div>

                </div>

                <div class="message">
                    <div class="form-group">
                        <input type="radio" id="rd1" name="message" v-model="fields.message"
                               value="Contactarme a través de llamada" >
                        <label for="rd1">Contactarme a través de llamada</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" id="rd2" name="message" v-model="fields.message"
                               value="Contactarme a través de Whatsapp">
                        <label for="rd2">Contactarme a través de Whatsapp</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" id="rd3" name="message" v-model="fields.message"
                               value="Autorizo que utilicen mis datos para contactarme">
                        <label for="rd3">Autorizo que utilicen mis datos para
                            contactarme</label>
                    </div>
                </div>

                <div class="submit-form text-center">
                    <button class="btn btn-danger" type="submit" id="btn-enviar-one">Enviar
                    </button>
                </div>
            </div>
        </div>
    </form>

</template>

<script>
    export default {
        props: {
            user: Number,
        },
        data() {
            return {
                //politicas: metro_config.routes.politicas,
                autocompleteOptions: {
                    componentRestrictions: {
                        country: [
                            'pe',
                        ],
                    },
                },
                center: { lat: 45.508, lng: -73.587 },
                markers: [],
                places: [],
                currentPlace: null,
                counter: 1,

                max: 6,
                min: 2,
                searchPlace:null,
                menor: casella.path + 'img/icons/menor.svg',
                agregar: casella.path + 'img/icons/agregar.svg',
                fields: {
                    firstname: this.firstname,
                    telefono: this.telefono,
                    price: this.price,
                    asunto: 'Busquedad de inmuebles: Hogar o Negocio',
                    email: this.email,
                    message: 'Contactarme a través de llamada',
                    dormitorios: this.counter,
                    operacion:'1',
                    tipo: '1',
                    keyword: this.google,
                    user_id: this.user,

                },
                errors: {},
                google_url: casella.url_google,
                lupa: casella.path + 'img/icons/lupa-r.svg',
                foto: casella.path + 'img/icons/habitaciones.svg',
                success: false,
                loaded: false,
            }
        },
        mounted() {
            this.geolocate();
        },
        methods: {
            // receives a place object via the autocomplete component
            setPlace(place) {
                this.currentPlace = place;
                console.log(place.formatted_address);
                this.fields.keyword=place.formatted_address;
            },
            geolocate: function() {
                navigator.geolocation.getCurrentPosition(position => {
                    this.center = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                });
            },

            increment: function () {
                if (this.counter <= this.max) {
                    this.counter += 1;
                    this.fields.dormitorios =  this.counter;
                    this.$emit('increment')
                }


            },
            dencrement: function () {
                if (this.counter >= this.min) {
                    this.counter -= 1;
                    this.fields.dormitorios =  this.counter;
                    this.$emit('dencrement')
                }
            },
            submit() {
                this.loaded = true;
                this.success = false;
                this.errors = {};
                var vm = this;
                axios.post('/servicio/pedido', this.fields).then(response => {
                    vm.fields = {}; //Clear input fields.
                    vm.loaded = false;
                    vm.success = true;
                    vm.post = response.data.message;
                    this.$notify({
                        title: 'Solicitud de pedido',
                        message: 'Registrado correctamente!',
                        type: 'success'
                    });
                    $('#frmBuscarInmueble').modal('hide');
                    location.reload();
                }).catch(error => {
                    vm.loaded = false;
                    this.$notify({
                        title: 'Algo salio mal',
                        message: 'Revisa tus datos, porfavor.',
                        type: 'error'
                    });
                    if (error.response.status === 422) {
                        vm.errors = error.response.data.errors || {};
                    }
                });

            },
        },

    }
</script>


