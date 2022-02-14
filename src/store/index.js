import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sortBy: 'hot',
        categoryId: 0,
        historyData: [],
        articleId: '',
    },
    mutations: {
        changeCategoryId(state, payload) {
            state.categoryId = payload
        },
        changeSort(state, payload) {
            state.sortBy = payload
        },
        addHistoryData(state, payload) {
            let index = state.historyData.indexOf(payload)
            if (index !== -1) {
                state.historyData.splice(index, 1)
            }
            state.historyData.unshift(payload)
        },
        changeArticleId(state, payload) {
            state.articleId = payload
        }
    },
    actions: {},
    modules: {}
})