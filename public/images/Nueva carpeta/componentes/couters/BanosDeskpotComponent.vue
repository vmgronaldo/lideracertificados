<template>
    <div class="buttons-add">

        <input  type="number"  name="banos" id="banos" :min="0" :max="8" :value="contador">
        <div class="icons">
            <button class="maxbutton" type="button" v-on:click="increment"><i class="fa fa-plus"></i></button>
            <button type="button" v-on:click="dencrement"><i class="fa fa-minus"></i></button>
        </div>


    </div>
</template>


<script>
    export default {
        props: {
            contador:Number,
        },
        data() {
            return {
                menor: casella.path + 'img/icons/menor.svg',
                agregar: casella.path + 'img/icons/agregar.svg',
                max:6,
                min:2
            }
        },
        methods: {
            increment: function () {
                if(this.contador <= this.max){
                    this.contador += 1
                    this.$emit('increment')
                }


            },
            dencrement: function () {
                if (this.contador >= this.min) {
                    this.contador -= 1
                    this.$emit('dencrement')
                }
            }
        },

    }

</script>
