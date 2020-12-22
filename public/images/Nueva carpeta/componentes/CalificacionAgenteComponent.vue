<template>

    <form v-loading="loaded" class="submit-comment"
              @submit.prevent="submit" autocomplete="off">
        <input type="hidden" v-model="user" name="user_id" id="user_id">

        <div class="agente">
            <div class="item">
                <div class="image">
                    <img v-if="info.image" :src="info.image" :alt="info.firstname">
                </div>
                <div class="textos">
                    <h1 v-if="info.firstname">{{info.firstname}} {{info.lastname}}</h1>
                    <p class="agente">AGENTE INMOBILIARIO</p>
                </div>
                <div class="rating_submit_agente">
                    <input id="radio1" type="radio" name="rating" v-model="fields.rating" value="5" class="star"/>
                    <label for="radio1"><span></span></label>
                    <input id="radio2" type="radio" name="rating" v-model="fields.rating" value="4" class="star"/>
                    <label for="radio2"><span></span></label>
                    <input id="radio3" type="radio" name="rating" v-model="fields.rating" value="3" class="star"/>
                    <label for="radio3"><span></span></label>
                    <input id="radio4" type="radio" name="rating" v-model="fields.rating" value="2" class="star"/>
                    <label for="radio4"><span></span></label>
                    <input id="radio5" type="radio" name="rating" v-model="fields.rating" value="1" class="star"/>
                    <label for="radio5"><span></span></label>
                </div>

            </div>
            <div v-if="errors && errors.rating" class="text-danger">{{ errors.rating[0] }}</div>

        </div>

        <div class="texto">
            <p>¿Cómo fue tu experiencia con el servicio brindado por {{info.firstname}} {{info.lastname}}?</p>
        </div>
        <div class="form-group">
            <textarea name="comentario"  v-model="fields.comentario" placeholder="Mi experiencia fue.." id="comentario" cols="30" rows="4"></textarea>
            <div v-if="errors && errors.comentario" class="text-danger">{{ errors.comentario[0] }}</div>

        </div>
        <div class="form-group">
            <input name="firstname" id="firstname" v-model="fields.firstname"  type="text" placeholder="Nombre y apellido" class="form form-control">
            <div v-if="errors && errors.firstname" class="text-danger">{{ errors.firstname[0] }}</div>
        </div>
        <div class="form-group">
                        <textarea name="cargo" v-model="fields.cargo"  id="cargo" cols="30" rows="2" placeholder="Cargo y lugar de trabajo actual
(completar este campo es voluntario)"></textarea>
            <div v-if="errors && errors.cargo" class="text-danger">{{ errors.cargo[0] }}</div>

        </div>

        <div class="main-chek">
            <div class="form-group check-customer">
                <input type="radio" id="rd1" name="prospecto" v-model="fields.prospecto"
                       value="Propietario">
                <label for="rd1">Propietario</label>
            </div>

            <div class="form-group check-customer">
                <input type="radio" id="rd2" name="prospecto" v-model="fields.prospecto"
                       value="Arrendatario">
                <label for="rd2">Arrendatario</label>
            </div>

            <div class="form-group check-customer">
                <input type="radio" id="rd3" name="prospecto"  v-model="fields.prospecto"
                       value="He visitado inmuebles">
                <label for="rd3">He visitado
                    inmuebles</label>
            </div>
            <div v-if="errors && errors.prospecto" class="text-danger">{{ errors.prospecto[0] }}</div>

        </div>

        <div class="submit-form text-center">
            <button class="btn btn-danger" type="submit" >Enviar</button>
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
                info: [],
                fields: {
                    comentario: null,
                    firstname: null,
                    cargo: null,
                    prospecto: null,
                    user_id: this.user,
                },
                errors: {},
                success: false,
                loaded: false,
            }
        },
        mounted () {
            const url = agente.url_agente_data;
            axios
                .get(url)
                .then(response => {
                    this.info = response.data
                    console.log(this.info);
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        },
        methods: {

            submit() {
                this.loaded = true;
                this.success = false;
                this.errors = {};
                var vm = this;
                axios.post('/calificacion/rating', this.fields).then(response => {
                    vm.fields = {}; //Clear input fields.
                    vm.loaded = false;
                    vm.success = true;
                    vm.post = response.data;

                    $('#frmCalificacionAgente').modal('show');

                        setInterval(function () {
                            location.reload();
                        }, 2000);


                }).catch(error => {
                    vm.loaded = false;
                    this.$notify({
                        title: 'Algo salio mal',
                        message: 'Revisa tus datos, porfavor.',
                        type: 'error'
                    });
                    vm.loaded = false;
                    if (error.response.status === 422) {
                        vm.errors = error.response.data.errors || {};
                    }
                });

            },

        },
    }
</script>

<style scoped>

</style>
