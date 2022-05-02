<template>
    <div class="refund-page">
        <div class="refund-container">
            <div v-if="hasRefunds">
                <!-- Refunds hechas -->
            </div>
            <div class="no-refunds" v-else>
                <h1 class="no-refunds-title">
                    No tienes ninguna devolución hecha o pendiente.
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyRefund',
    data() {
        return {
            hasRefunds: false,
        };
    },
};
</script>

<style lang="scss" scoped>
.refund-page {
    height: 100vh;
    padding: 30px 15px;

    .no-refunds {
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;

        .no-refunds-title {
            font-size: 20px;
            font-weight: bold;
        }
    }
}
</style>
