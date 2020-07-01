import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { api } from '../api/api';
export const fetchContent = createAsyncThunk('content/get', () =>
  api
    .get('content')
    .json()
    .then(r => r.payload)
);

export const contentSlice = createSlice({
  name: 'content',
  initialState: {
    isLoading: false,
    screens: [],
  },
  reducers: {},
  extraReducers: {
    [fetchContent.pending]: state => {
      state.isLoading = true;
    },
    [fetchContent.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.screens = action.payload;
    },
    [fetchContent.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export const contentSelector = state => state.content.screens;
export const selectContentIsLoading = start => start.content.isLoading;

export const screenSelectorFactory = screenName =>
  createSelector(contentSelector, screens => screens?.find(screen => screen.name === screenName));

export const selectTextFieldFactory = (screenName, fieldName) =>
  createSelector(
    screenSelectorFactory(screenName),
    screen => screen?.textFields?.find(field => field.name === fieldName)?.value?.value ?? ''
  );

export const selectImgFieldFactory = (screenName, fieldName) =>
  createSelector(
    screenSelectorFactory(screenName),
    screen => screen?.imgFields?.find(field => field.name === fieldName)?.img?.url ?? ''
  );
export const selectTextFieldsFactory = (screenName, fieldNames) =>
  createSelector(screenSelectorFactory(screenName), screen =>
    screen?.textFields
      ?.filter(field => fieldNames.includes(field.name))
      .reduce((res, field) => {
        res[field.name] = field.value.value;
        return res;
      }, {})
  );

export const selectMdLabelsFactory = screenName =>
  createSelector(screenSelectorFactory(screenName), screen => screen?.mdFields ?? []);
export const selectMdFieldFactory = (screenName, fieldId) =>
  createSelector(screenSelectorFactory(screenName), screen => screen.mdFields.find(({ id }) => fieldId === id));
