<template>
    <div class="buttons-add">
        <button type="button" v-on:click="dencrement"><img :src="menor" alt=""></button>
        <input  type="number"  name="banos" id="banos" :min="1" :max="8" :value="counter">
        <button class="maxbutton" type="button" v-on:click="increment"><img :src="agregar" alt=""></button>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                menor: casella.path + 'img/icons/menor.svg',
                agregar: casella.path + 'img/icons/agregar.svg',
                counter: 1,
                max:6,
                min:2
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
