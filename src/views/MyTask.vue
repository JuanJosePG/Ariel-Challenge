<template>
    <div class="task-page">
        <div class="task-container">
            <div class="title-wrapper">
                <h1 class="task-page-title">Mis tareas</h1>
                <button
                    class="delete-full-list button is-danger"
                    @click="removeAll"
                    v-if="todos.length"
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
                @changeValue="setFalseValue"
                @inputData="addToDo"
                v-if="showModal"
            />
        </div>
    </div>
</template>

<script>
import ToDoItem from '@/components/ToDo/ToDoItem.vue';
import AddToDoItem from '@/components/ToDo/AddToDoItem.vue';

// Soy consciente que no es la manera correcta pero me daba muchos fallos que no
//  entendía a la hora de importarlo en el main.js
import axios from 'axios';

const maxApiElemsToShow = 3;
let idTodoNext = maxApiElemsToShow + 1;

export default {
    name: 'MyTask',
    components: {
        ToDoItem,
        AddToDoItem,
    },
    data() {
        return {
            showModal: false,
            infoApi: null,
            newTodoItem: {
                title: '',
                text: '',
            },
            todos: [],
        };
    },
    mounted() {
        axios
            .get('https://jsonplaceholder.typicode.com/todos/')
            .then((response) => {
                this.infoApi = response.data;
                this.loadTodosFromApi(this.infoApi);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    methods: {
        addToDo(elem) {
            this.todos.push({
                id: idTodoNext++,
                title: elem.title,
                text: elem.text,
            });
        },
        removeItem(idToRemove) {
            this.todos = this.todos.filter((elem) => {
                return elem.id !== idToRemove;
            });
        },
        removeAll() {
            this.todos = [];
            idTodoNext = 0;
        },
        setFalseValue() {
            this.showModal = false;
        },
        loadTodosFromApi() {
            for (let i = 0; i < maxApiElemsToShow; i++) {
                this.todos.push(this.infoApi[i]);
            }
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
