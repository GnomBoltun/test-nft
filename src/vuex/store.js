import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {},
    mutations: {
        SET_WARRIORS_TO_STATE: (this.state.wa)
    },
    actions: {
        GET_WARRIORS_FROM_API(commit) {
            return axios('http://51.158.175.189:8002/api/v1/warriors', {
                method: "GET"
            })
                .then(warriors => {
                    commit('SET_PRODUCTS_TO_STATE', warriors);
                })
        }
    },
    getters: {
        WARRIORS(state){
            return state.warriors;
        }
    },
});

export default store;