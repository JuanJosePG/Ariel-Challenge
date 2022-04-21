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
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>

                    <div class="icon menu-icon"></div>
                </a>
            </div>
            <button>
                <div class="icon search-icon"></div>
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
                    <div class="icon profile-icon"></div>
                </a>
            </div>
            <div class="navbar-cart">
                <a href="#">
                    <div class="icon cart-icon"></div>
                </a>
            </div>
        </nav>
    </div>
</template>

<script>
import LogoHome from '@/components/common/LogoHome.vue';

export default {
    name: 'PrimaryNav',
    components: {
        LogoHome,
    },
};
</script>

<style lang="scss" scoped>
.primary-nav {
    .navbar {
        display: flex;
        padding: 15px;
        max-height: 62px;
        border-bottom: 1px solid $light-gray;

        .navbar-burger {
            margin-left: 0;
        }

        .navbar-brand {
            margin: 0 auto;
        }

        button.icon,
        a.icon {
            // width, height, background-repeat, etc...
            width: 50px;
            height: 50px;

            .menu-icon {
                // background-image: $menu-icon;
            }
            .search-icon {
                background-image: $search-icon;
                background-repeat: no-repeat;
            }

            .profile-icon {
                // background-image: $profile-icon;
            }

            .cart-icon {
                // background-image: $cart-icon;
            }
        }
    }
}
</style>
