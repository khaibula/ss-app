import { useSelectorFactory } from './useSelectorFactory';
import { selectTextFieldFactory } from '../../store/contentSlice';

export const useContentTextField = (screen, fieldName) => {
    return useSelectorFactory(selectTextFieldFactory, screen, fieldName)
}