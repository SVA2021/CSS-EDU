import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { positionElem, selectorsCSS, animations, features } from "./data"

const initialState: demoState = {
  activeSlider: {},
  activeDemo: {
    parent: {},
    childItem: {}
  },
  mainOption: ""
};

interface demoState {
  activeSlider: any
  activeDemo: any
  mainOption: string
}


const pages = { positionElem, selectorsCSS, animations, features }
type pagesType = "positionElem" | "selectorsCSS" | "animations" | "features";

export const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    setSlider: (state, action: PayloadAction<pagesType>) => {
      state.activeSlider = pages[action.payload];
    },
    setDemoOption: (state, action: PayloadAction<any>) => {
      state.activeDemo[action.payload.group][action.payload.option] = action.payload.optionValue;
    },
    setMainOption: (state, action: PayloadAction<any>) => {
      state.mainOption = action.payload;
    },
    resetOptions: (state) => {
      state.activeDemo = {
        parent: {},
        childItem: {}
      };
      state.mainOption = "";
    }
  }
});

export const {
  setSlider,
  setDemoOption,
  setMainOption,
  resetOptions,
} = demoSlice.actions;

export const selectSlider = (state: RootState) => state.demo.activeSlider;
export const selectDemo = (state: RootState) => state.demo.activeDemo;
export const selectMainOption = (state: RootState) => state.demo.mainOption;

export default demoSlice.reducer;