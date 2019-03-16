import axios from 'axios'

export const state = () => {
    return {
        restaurants: []
    }
};

export const mutations = {
    setRetaurants (state, restaurants) {
        state.restaurants = restaurants
    }
};

export const actions = {
    async getStoresFromGPS ({commit}, position) {
        /*const res = await this.$axios.$get('/api/todos', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
        */
        const res = await this.$axios.$get('https://21a64fa6.ngrok.io/search',{
            params :{
                latitude: "34.679193",
                longitude: "135.495257"
            }
        })
        commit("setRetaurants", res)
    }
};