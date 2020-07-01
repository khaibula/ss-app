import {useState, useEffect, useCallback} from 'react'
import {useRequest} from "./useRequest";
import {QR} from "../../server_constants";
import {useSelector} from "react-redux";

/**
 *
 * @returns {{isLoading: boolean, res: null|object, sendQr: function, error: null|object, dumpQr: function}}
 */
export const useSendQr = ()=>{
    const req = useRequest();
    const { phone, token } = useSelector(state => state);
    const [res, setRes] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const dumpQr = useCallback(() => {
        setRes(null);
        setError(null);
    }, []);

    const sendQr = useCallback ((qrString) => {
        // setIsLoading(true);
        // console.log({qrString});
        // req({
        //     type:QR.ADD_QR,
        //     xml:qrString,
        //     body:{
        //         phone,
        //         token,
        //     }
        // }).then((res)=>{
        //     setRes(res);
        // }).catch(({text = "Что то пошло не так"}) =>{
        //     setError(text);
        // }).finally(()=>{
        //     setIsLoading(false);
        // })
    }, [phone, token]);

    return {res, error, isLoading,dumpQr, sendQr};

};
