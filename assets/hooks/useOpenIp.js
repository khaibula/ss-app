import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { reducerTypes } from '../../store/main';

export const useOpenIp = navigation => {
    const dispatch = useDispatch();

    return useCallback((id) => {
        console.log(id);
        dispatch({
            type: reducerTypes.infoId,
            value: id
        });
        navigation.navigate("InfoPage")
    }, [navigation]);
};
