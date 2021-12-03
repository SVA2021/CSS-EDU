import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { positionElem, selectorsCSS, animations, features } from "./data"

const initialState = {
  activeSlider: {},
  activeDemo: {},
};

const pages = { positionElem, selectorsCSS, animations, features }

export const demoSlice = createSlice({
  name: 'demo',
  initialState,

  reducers: {
    setSlider: (state, action) => {
      state.activeSlider = pages[action.payload];
    },
    setDemo: (state, action) => {
      state.activeDemo[action.payload.option] = action.payload.optionValue;
    },
  }
});

export const { setSlider, setDemo } = demoSlice.actions;

export const selectSlider = (state) => state.activeSlider;
export const selectDemo = (state) => state.activeDemo;

export default demoSlice.reducer;
