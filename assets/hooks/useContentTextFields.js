import { selectTextFieldsFactory } from '../../store/contentSlice';
import { useSelector } from 'react-redux';

export const useContentTextFields = (screen, namesArray) => {
  return useSelector(selectTextFieldsFactory(screen, namesArray));
};
