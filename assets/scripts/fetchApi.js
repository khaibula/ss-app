import * as requestTypes from '../../server_constants';

const fetchConfig = data => ({
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"
});

const c = {
    val : null,

    get l (){
        return this.val;
    },
    set l (val){
        console.log(val);
      this.val = val
    }
}

const API_URL = "http://a0319139.xsph.ru:4000/api/mobile";
// const API_URL = "http://192,168,0.45:4000/api/mobile";

function req(data){
    return fetch(API_URL, fetchConfig(data))
        .then(async res => {
            const json = await res.json();
            return {data: json, status: res.status}
        })
}

export {requestTypes}

export default req;

