import axios from 'axios'

export const state = () => {
    return {
        restaurants: [],
        address: "search",
        is_error: false
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
    },
    setError(state, error) {
        state.is_error = error;
    }
};

export const actions = {
    async getStoresFromGPS ({commit,state}, position) {
        /*const res = await this.$axios.$get('/api/todos', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
        */
        const res1 = await this.$axios.$get('https://r3n3mmaylth.execute-api.ap-northeast-1.amazonaws.com/dev/' + state.address,{
            params :{
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }
        }).catch(err => {
            commit("setError",true)
            return err.response;
        });

        var res = res1

        if(res.message !== null){
            const res2 = await this.$axios.$get('https://r3n3mamylth.execute-api.ap-northeast-1.amazonaws.com/dev/' + state.address,{
                params :{
                    longitude: 135.495257,
                    latitude: 34.679193
                }
            }).catch(err => {
                commit("setError",true)
                return err.response;
            });
            res = res2
        }
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