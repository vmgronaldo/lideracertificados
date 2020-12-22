<template>
    <div class="buttons-add">

        <input  type="number"  name="dormitorios" id="dormitorios" :min="0" :max="8" :value="counter">
        <div class="icons">
            <button class="maxbutton" type="button" v-on:click="increment"><i class="fa fa-plus"></i></button>
            <button type="button" v-on:click="dencrement"><i class="fa fa-minus"></i></button>
        </div>


    </div>
</template>


<script>
    export default {
        props: {
            counter:Number,
        },
        data() {
            return {
                menor: casella.path + 'img/icons/menor.svg',
                agregar: casella.path + 'img/icons/agregar.svg',

                max:6,
                min:1
            }
        },
        methods: {

            increment: function () {
                if(this.counter <= this.max){
                    this.counter += 1
                    this.$emit('increment')

                }


            },
            dencrement: function () {
                if (this.counter >= this.min) {
                    this.counter -= 1
                    this.$emit('dencrement')
                }
            }
        },

    }

</script>
