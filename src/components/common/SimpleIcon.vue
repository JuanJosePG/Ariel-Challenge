<template>
    <img
        class="icon-custom"
        :src="require('@/assets/icons/' + iconName + '.svg')"
        :alt="alt"
    />
</template>

<script>
export default {
    props: {
        iconName: {
            type: String,
        },
        alt: {
            type: String,
        },
    },
};
</script>

<style lang="scss" scoped></style>
