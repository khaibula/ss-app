import {SET_IP} from "./types";

export default  function openIP({id, navigation}) {
    return function (dispatch) {
        console.log(navigation.navigate("IP"))
        dispatch({
                type: SET_IP,
                id: id,
        });
    }
}