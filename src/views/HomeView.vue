<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <p v-bind:id="'id' + 2">{{ 2 + 2 }}</p>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'HomeView',
    components: {
        HelloWorld,
    },
    data() {
        return {
            nombre: 'pepe',
        };
    },
};
</script>
