<template>
    <div id="app">
        <!-- Header-->
        <!-- Primary nav -->
        <PrimaryNav />
        <!-- Secondary nav -->
        <SecondaryNav />
    </div>
</template>

<script>
import PrimaryNav from '@/components/Header/PrimaryNav.vue';
import SecondaryNav from '@/components/Header/SecondaryNav.vue';

export default {
    name: 'App',
    components: {
        PrimaryNav,
        SecondaryNav,
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: $default-gray-background;
    color: $dark-gray;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
