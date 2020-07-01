import * as Permissions from 'expo-permissions';
import {useState, useEffect} from 'react';

export const useCameraPermission = () => {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    useEffect(()=>{
        (async () => {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);
            setHasCameraPermission(status === 'granted')
        })();
    },[]);

    return hasCameraPermission
};
