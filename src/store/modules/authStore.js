// /src/store/modules/authStore.js
const state = {
   test: 'My first state!',
    count: 0,
        todo: null
};
const getters = {
};
const actions = {
	getTodo(context) {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
                .then(firstTodo => {
                    context.commit('SET_TODO', firstTodo)
                })
        }
};
const mutations = {
	INCREMENT_COUNT(state) {
            state.count += 1
        },
        INCREMENT_COUNT_value(state, value) {
            state.count += value
        },
        SET_TODO(state, data) {
            state.todo = data
        }
};
export default {
   state,
   getters,
   actions,
   mutations
}