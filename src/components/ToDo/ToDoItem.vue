<template>
    <div class="todo-item" :id="'todoItem-' + todo.id">
        <div class="item-info">
            <h2>{{ todo.title }}</h2>
            <p>{{ todo.text }}</p>
        </div>
        <button class="remove-icon" @click="$emit('remove', todo.id)">
            <SimpleIcon :iconName="'Trash'" :alt="'Trash icon'" />
        </button>
    </div>
</template>

<script>
import SimpleIcon from '@/components/common/SimpleIcon.vue';

export default {
    components: {
        SimpleIcon,
    },
    props: {
        todo: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.12);
    margin-bottom: 15px;

    .item-info {
        h2,
        p {
            text-align: left;
            max-width: 230px;
            overflow: hidden;
            text-overflow: ellipsis;

            @media (min-width: 425px) {
                max-width: 300px;
            }
        }

        h2 {
            font-size: 16px;
            color: $neutral-80;
            font-weight: 600;
            line-height: 22px;
            white-space: nowrap;
        }

        p {
            font-size: 12px;
            color: $neutral-40;
            font-weight: 400;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            display: -webkit-box;
            line-height: 16px;
            max-height: 32px;
        }
    }

    .remove-icon {
        padding: 0;
        background-color: transparent;
        outline: none;
        border: none;
    }
}
</style>
