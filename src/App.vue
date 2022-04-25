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
    color: $neutral-60;

    .profile-page,
    .task-page,
    .refund-page {
        background-color: $default-gray-background;
        overflow: scroll;
    }

    .profile-container,
    .task-container,
    .refund-container {
        @media (max-width: 991.9px) {
            max-width: 450px;
            margin: 0 auto;
        }
    }
}
</style>
