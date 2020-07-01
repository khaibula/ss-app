import { useSelectorFactory } from './useSelectorFactory';
import { selectImgFieldFactory } from '../../store/contentSlice';

export const useContentImgFactory = (screen, imgField) => {
    return useSelectorFactory(selectImgFieldFactory, screen, imgField);
};
