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
    color: $dark-gray;

    .profile-page,
    .task-page,
    .refund-page {
        background-color: $default-gray-background;
        overflow: scroll;
    }
}
</style>
