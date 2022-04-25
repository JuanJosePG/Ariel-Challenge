<template>
    <div class="modal is-active" id="add-todo-modal">
        <div class="modal-background" @click="closeModal()"></div>
        <div class="modal-card">
            <header class="modal-card-header">
                <p class="modal-card-title">Añadir tarea</p>
                <button
                    class="delete"
                    aria-label="close"
                    @click="closeModal()"
                ></button>
            </header>
            <section class="modal-card-body">
                <label for="Name">Nombre <span class="required">*</span></label>
                <input
                    type="text"
                    id="Name"
                    name="Name"
                    class="input title-input"
                    placeholder="Nombre"
                    v-model="todo.title"
                />

                <label for="Description">Descripción</label>
                <textarea
                    type="text"
                    id="Description"
                    name="Description"
                    class="input description-input"
                    placeholder="Descripción"
                    v-model="todo.text"
                />
            </section>
            <footer class="modal-card-foot">
                <button class="button is-cancel" @click="closeModal()">
                    Cancelar
                </button>
                <button
                    class="button is-success"
                    :disabled="isEmpty(todo.title)"
                    @click="sendData()"
                >
                    Guardar
                </button>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todo: {
                title: '',
                text: '',
            },
        };
    },
    methods: {
        closeModal() {
            this.$emit('changeValue');
        },
        sendData() {
            this.$emit('inputData', this.todo);
            this.$emit('changeValue');
        },
        isEmpty(elem) {
            return elem.length == 0;
        },
    },
};
</script>

<style lang="scss" scoped>
.modal#add-todo-modal {
    justify-content: start;
    padding: 20px 15px;

    .modal-card {
        background-color: white;
        border-radius: 5px;
        max-width: 500px;

        .modal-card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;

            .modal-card-title {
                flex-grow: 0;
                width: 150px;
                text-align: left;
                font-size: 20px;
                font-weight: 700;
                color: $neutral-80;
            }
        }

        .modal-card-body {
            text-align: left;

            label,
            input {
                font-size: 14px;
                line-height: 19px;
            }

            label {
                color: $neutral-60;
            }

            input,
            textarea {
                color: $neutral-20;

                &:active,
                &:focus {
                    box-shadow: none;
                    border-color: $main-green;
                    color: $neutral-60;
                }
            }

            input.title-input {
                margin-bottom: 20px;
            }

            textarea.description-input {
                min-height: 150px;
            }

            .required {
                color: $delete-red;
            }
        }

        .modal-card-foot {
            border: none;
            background-color: white;
            padding-top: 0;

            button.button {
                width: 50%;
                height: 30px;

                &.is-cancel {
                    border-color: white;
                    color: $neutral-60;
                }

                &.is-success {
                    background-color: $main-green !important;
                    color: white;
                }
            }
        }
    }
}
</style>
