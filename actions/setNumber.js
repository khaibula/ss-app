import * as types from './types.js';
import req from '../assets/scripts/fetchApi.js';

function startSetNumber (){
    return {
        type: types.SET_PHONE_START,
    }
}

export default function setNumber(number){
    return function(dispatch){
        dispatch(startSetNumber());
        req({
            type: req.type.ADD_PHONE,
            body:{phone: number},
        }).then(
            resolve =>{
                dispatch({
                    type: types.SET_PHONE_RESOLVED,
                    phone: resolve.data.phone,
                    qrNum: resolve.data.qrNum,
                })
            },
            reject =>{
                console.log(reject);
                dispatch({
                    type: types.SET_PHONE_REJECTED,
                })
            }
        )
    }
}
