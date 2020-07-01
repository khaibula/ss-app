import { useSelectorFactory } from '../../assets/hooks/useSelectorFactory';
import { selectMdLabelsFactory } from '../../store/contentSlice';
import { screensList } from '../../assets/constants';
import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
const questionSelector = createSelector(
  selectMdLabelsFactory(screensList.info),
  fields => fields.filter(({ name }) => name.includes('question')) ?? []
);

export const useQuestions = () => {
  return useSelector(questionSelector);
};

const rulesSelector = createSelector(
  selectMdLabelsFactory(screensList.info),
  fields => fields.find(({ name }) => name.includes('rules'))
);
export const useRules = () => useSelector(rulesSelector);
