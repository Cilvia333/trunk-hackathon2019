import axios from 'axios'

export const state = () => {
    return {
        restaurants: [],
        address: "search"
    }
};

export const mutations = {
    setRetaurants (state, restaurants) {
        for (var i = restaurants.length - 1; i >= 0; i--){
            // 0~iのランダムな数値を取得
            var rand = Math.floor( Math.random() * ( i + 1 ) );
            // 配列の数値を入れ替える
            [restaurants[i], restaurants[rand]] = [restaurants[rand], restaurants[i]]
        }
        state.restaurants = restaurants
    },
    setAddress(state, address) {
        state.address = address;
    }
};

export const actions = {
    async getStoresFromGPS ({commit,state}, position) {
        /*const res = await this.$axios.$get('/api/todos', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
        */
        const res = await this.$axios.$get('https://r3n3mmylth.execute-api.ap-northeast-1.amazonaws.com/dev/' + state.address,{
            params :{
                latitude: "34.679193",
                longitude: "135.495257"
            }
        })
        console.log(position.coords.latitude)
        commit("setRetaurants", res)
    },
    changeAddress({commit,state}){
        if(state.address == "search"){
            commit("setAddress","search-all")
        }
        else {
            commit("setAddress","search")
        }
        
    }
};