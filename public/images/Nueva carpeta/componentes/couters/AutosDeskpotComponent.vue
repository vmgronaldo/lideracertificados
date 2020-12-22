<template>
    <div class="buttons-add">

        <input  type="number"  name="garajes" id="garajes" :min="0" :max="8" :value="sumador">
        <div class="icons">
            <button class="maxbutton" type="button" v-on:click="increment"><i class="fa fa-plus"></i></button>
            <button type="button" v-on:click="dencrement"><i class="fa fa-minus"></i></button>
        </div>


    </div>
</template>


<script>
    export default {
        props: {
            sumador:Number,
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
                if(this.sumador <= this.max){
                    this.sumador += 1
                    this.$emit('increment')
                }


            },
            dencrement: function () {
                if (this.sumador >= this.min) {
                    this.sumador -= 1
                    this.$emit('dencrement')
                }
            }
        },

    }

</script>
