<template>
    <div class="profile-page">
        <div class="profile-container">
            <!-- Se que esto se podría componetizar y tal, pero era por poner algo de información rápida -->
            <div class="main-info">
                <h1 class="title-section">Información personal</h1>
                <p class="label-info">Nombre y apellidos</p>
                <p class="info">Juan José Piñón García</p>
                <p class="label-info">Correo electrónico</p>
                <p class="info">jjpg.2312@gmail.com</p>
                <p class="label-info">Fecha de nacimiento</p>
                <p class="info">23/12/1994</p>
            </div>
            <div class="main-info">
                <h1 class="title-section">Hobbys</h1>
                <p>Gimnasio, padel, pasear por la montaña</p>
                <p>Aprender de lo que sea</p>
                <p>Hacer reír a la gente</p>
            </div>
            <div class="main-info">
                <h1 class="title-section">Mascotas</h1>
                <p class="info-icon">
                    <SimpleIcon :iconName="'Cat'" :alt="'Cat icon'" />
                    Gata
                </p>
                <p class="info-icon">
                    <SimpleIcon :iconName="'Ant'" :alt="'Ant icon'" />
                    Hormigas
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import SimpleIcon from '@/components/common/SimpleIcon.vue';

export default {
    name: 'HomeView',
    components: {
        SimpleIcon,
    },
    data() {
        return {
            nombre: 'pepe',
        };
    },
};
</script>

<style lang="scss" scoped>
.profile-page {
    height: 100vh;
    padding: 30px 15px;
    text-align: left;

    .title-section {
        font-size: 20px;
        font-weight: bold;
        text-decoration: underline;
        margin-bottom: 15px;
    }

    .label-info {
        font-size: 15px;
        font-weight: bold;
    }

    .info {
        font-size: 16px;
        margin-bottom: 15px;
    }

    .info-icon {
        display: flex;
        margin-bottom: 15px;

        img {
            margin-right: 10px;
        }
    }

    .main-info {
        background-color: white;
        border-radius: 5px;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.12);
        padding: 25px 20px;
        margin-bottom: 10px;

        .icon-custom {
            max-width: 20px;
            max-height: 20px;
        }
    }
}
</style>
