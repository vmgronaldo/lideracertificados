<template>
    <div class="infinite-list-wrapper listado-inmuebles " style="overflow:auto">
        <ul
            class="list"
            v-infinite-scroll="load"
            infinite-scroll-disabled="disabled">
            <li v-for="item in items" :key="item.name" class="list-item">
                <a class="link" :href="item.url">
                    <div class="image">
                        <img :src="item.image" class="w-100" :alt="item.name">
                    </div>
                    <div class="data">
                        <h1 class="title">{{item.name}}</h1>
                        <ul class="caracteristicas">
                            <li>2.5 Habitaciones</li>
                        </ul>
                        <div class="prices">
                            <div class="venta">
                                <h2>{{item.precio}}</h2>
                            </div>
                            <div class="mantenimiento">
                                <h2 v-if="item.mantenimiento">Mantenimiento: {{item.mantenimiento}}</h2>
                            </div>
                        </div>
                    </div>
                </a>

            </li>
        </ul>
        <p v-if="loading">Cargando...</p>
        <p v-if="noMore">No más inmuebles</p>
    </div>
</template>

<script>
    export default {

        data () {
            return {
                items: [],
                count: 10,
                user_id: this.user,
                loading: false
            }
        },
        computed: {
            noMore () {
                return this.count >= 20
            },
            disabled () {
                return this.loading || this.noMore
            }
        },
        methods: {
            list_items() {
                let vm = this;
                const url = agente.url_agente;
            // Optionally the request above could also be done as
                axios.get(url)
                    .then(function (response) {
                        // JSON responses are automatically parsed.
                        vm.items = response.data.data;
                        console.log(vm.items);
                    })
                    .catch(function (error) {
                        console.log(error);
                        this.errored = true
                        this.errors.push(e);
                    });

            },
            load () {
                this.loading = true
                setTimeout(() => {
                    this.count += 2
                    this.loading = false
                }, 2000)
            }
        },
        created() {
            this.list_items();
        }
    }
</script>
