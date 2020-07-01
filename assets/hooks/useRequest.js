import req from '../scripts/fetchApi';
import { useDispatch } from 'react-redux';
import { reducerTypes } from '../../store/main';

export const useRequest = () => {
    const dispatch = useDispatch();

    return data => {
        return req(data)
            .catch(e => {
                console.error({ e });
                dispatch({
                    type: reducerTypes.isInternet,
                    value: false,
                });
                return [];
            })
            .then(res => {
                if (res.status !== 200) throw res.data;
                return res.data;
            });
    };
};
