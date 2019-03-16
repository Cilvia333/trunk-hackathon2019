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
        const res = await this.$axios.$get('http://dcb8a098.ngrok.io/search',{
            params :{
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }
        })
        commit("setRetaurants", res)
    }
};