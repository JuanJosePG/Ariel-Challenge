<template>
    <div class="task-page">
        <div class="title-wrapper">
            <h1 class="task-page-title">Mis tareas</h1>
            <button
                class="delete-full-list button is-danger"
                @click="removeAll()"
            >
                Borrar todo
            </button>
        </div>

        <!-- todo items -->
        <div v-if="todos.length">
            <ToDoItem
                v-for="todo in todos"
                :key="todo.id"
                :todo="todo"
                @remove="removeItem"
            />
        </div>
        <div v-else>
            <h2>No tienes ninguna tarea creada, empieza ahora!</h2>
        </div>
        <!-- todo input -->
        <button
            class="modal-trigger add-todo-item-button"
            data-target="modal-todo-item"
            @click="showModal = true"
        >
            Añadir tarea
        </button>
        <AddToDoItem
            :activeModal="showModal"
            @changeValue="setFalseValue"
            v-model="newTodoItem"
            @keydown.enter="addTodo"
        />
    </div>
</template>

<script>
import ToDoItem from '@/components/ToDo/ToDoItem.vue';
import AddToDoItem from '@/components/ToDo/AddToDoItem.vue';

let idTodoNext = 1;

export default {
    name: 'MyTask',
    components: {
        ToDoItem,
        AddToDoItem,
    },
    data() {
        return {
            showModal: false,
            newTodoItem: {
                title: '',
                text: '',
            },
            todos: [
                {
                    id: idTodoNext++,
                    title: 'Prueba1',
                    text: 'Texto1',
                },
                {
                    id: idTodoNext++,
                    title: 'Prueba2',
                    text: 'Texto2',
                },
                {
                    id: idTodoNext++,
                    title: 'Prueba3',
                    text: 'Texto3',
                },
            ],
        };
    },
    mounted() {
        // axios -> instalar y recoger info
    },
    methods: {
        addToDo() {
            if (this.newTitleTodo) {
                this.todos.push({
                    id: idTodoNext++,
                    title: this.newTodoItem.title,
                    text: this.newTodoItem.text,
                });
            }
        },
        removeItem(idToRemove) {
            this.todos = this.todos.filter((elem) => {
                return elem.id !== idToRemove;
            });
        },
        removeAll() {
            this.todos = [];
        },
        setFalseValue(value) {
            this.showModal = value;
        },
    },
};
</script>

<style lang="scss" scoped>
.task-page {
    height: 100vh;
    padding: 30px 15px;

    .title-wrapper {
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;

        .task-page-title {
            font-weight: bold;
            font-size: 20px;
            text-align: left;
        }

        .delete-full-list {
            border: none;
            border-radius: 5px;
            height: 30px;

            &:focus {
                box-shadow: none;
            }
        }
    }

    .add-todo-item-button {
        width: 100%;
        height: 35px;
        margin-top: 30px;
        background-color: $main-green;
        color: white;
        font-weight: bold;
        border: none;
        border-radius: 5px;
    }
}
</style>
