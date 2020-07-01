import * as types from './types.js';
import req from '../assets/scripts/fetchApi.js'; 
 
function startSendQR(){
    return {
        type: types.SET_QR_START,
    }
}

export default function (phone,xml){
    return function(dispatch){
        dispatch(startSendQR());
        req({
            type: req.type.SEND_QR,
            phone, xml,
        }).then(
            resolve => {
                if(resolve.text){
                    dispatch({
                        type: types.SET_QR_REJECTED,
                        error: resolve,
                    })
                } else {
                    dispatch({
                        type: types.SET_QR_RESOLVED,
                        num: resolve.qrNum,
                    })
                }
            }
        )
    }
}