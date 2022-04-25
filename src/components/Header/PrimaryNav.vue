<template>
    <div class="primary-nav">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-burger">
                <a
                    role="button"
                    class="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <SimpleIcon :iconName="'Menu'" :alt="'Menu icon'" />
                </a>
            </div>
            <button class="navbar-search">
                <SimpleIcon :iconName="'Search'" :alt="'Search icon'" />
            </button>
            <div class="navbar-brand">
                <a
                    class="navbar-item"
                    href="https://www.linkedin.com/company/iskaypet-tiendanimal-kiwoko-kivet-clinicanimal-vetsum/?originalSubdomain=es"
                >
                    <logo-home />
                </a>
            </div>
            <div class="navbar-profile">
                <a href="#">
                    <SimpleIcon :iconName="'Login'" :alt="'Login icon'" />
                </a>
            </div>
            <div class="navbar-cart">
                <a href="#">
                    <SimpleIcon :iconName="'Cart'" :alt="'Cart icon'" />
                </a>
            </div>
        </nav>
    </div>
</template>

<script>
import LogoHome from '@/components/common/LogoHome.vue';
import SimpleIcon from '@/components/common/SimpleIcon.vue';

export default {
    name: 'PrimaryNav',
    components: {
        LogoHome,
        SimpleIcon,
    },
};
</script>

<style lang="scss" scoped>
.primary-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    .navbar {
        padding: 15px;
        max-height: 62px;
        border-bottom: 1px solid $light-gray;
        display: flex;
        justify-content: space-between;

        .navbar-burger {
            margin-left: 0;
        }

        .navbar-burger,
        .navbar-search,
        .navbar-profile {
            max-width: 20px;
            max-height: 20px;
        }

        .navbar-cart {
            max-width: 25px;
            max-height: 20px;
        }

        .navbar-search {
            padding: 0;
            background-color: transparent;
            outline: none;
            border: none;
        }

        .navbar-brand {
            max-height: 20px;
            min-height: auto;

            .navbar-item {
                padding: 0;
            }
        }

        .icon-custom {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
