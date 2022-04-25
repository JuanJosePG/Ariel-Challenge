<template>
    <div class="secondary-nav">
        <nav>
            <router-link to="/profile">Mis datos</router-link>
            <router-link to="/tasks">Mis tareas</router-link>
            <router-link to="/refunds">Mis devoluciones</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.secondary-nav {
    position: fixed;
    top: 52px;
    left: 0;
    right: 0;

    nav {
        background-color: white;
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.12);

        height: 50px;
        padding: 0 10px;

        text-overflow: clip;
        white-space: nowrap;
        overflow: hidden;

        a {
            margin: 0 15px 0 0;
            color: $dark-gray;
            font-weight: 600;
            line-height: 50px;
            width: 120px;
            height: 50px;
            display: inline-block;
        }

        .router-link-active {
            color: $main-green;
            border-bottom: 4px solid $main-green;
        }
    }
}
</style>
