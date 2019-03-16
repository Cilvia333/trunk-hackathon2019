import axios from 'axios'

export const state = () => {
    return {
        stores: [{

        }]
    }
};

export const mutations = {
    setStores (state, stores) {
        state.stores = stores
        console.log(state.stores)
    }
};

export const actions = {
    async getStoresFromGPS ({commit}, position) {
        /*const res = await this.$axios.$get('/api/todos', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
        */
        const res = await this.$axios.$get('http://dcb8a098.ngrok.io/search?longitude=pokemon&latitude=takoyaki')
        commit("setStores", res)
    }
};