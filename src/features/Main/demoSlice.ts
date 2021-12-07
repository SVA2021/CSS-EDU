import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { positionElem, selectorsCSS, animations, features } from "./data"

const initialState: demoState = {
  activeSlider: {},
  activeDemoParent: {},
  activeDemoChild: {},
  mainOption: ""
};

interface demoState {
  activeSlider: any
  activeDemoParent: any
  activeDemoChild: any
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
    setDemoParentOption: (state, action: PayloadAction<any>) => {
      state.activeDemoParent[action.payload.option] = action.payload.optionValue;
    },
    setDemoChildOption: (state, action: PayloadAction<any>) => {
      state.activeDemoChild[action.payload.option] = action.payload.optionValue;
    },
    setMainOption: (state, action: PayloadAction<any>) => {
      state.mainOption = action.payload;
    },
  }
});

export const {
  setSlider,
  setDemoParentOption, setDemoChildOption,
  setMainOption
} = demoSlice.actions;

export const selectSlider = (state: RootState) => state.demo.activeSlider;
export const selectDemoParent = (state: RootState) => state.demo.activeDemoParent;
export const selectDemoChild = (state: RootState) => state.demo.activeDemoChild;
export const selectMainOption = (state: RootState) => state.demo.mainOption;

export default demoSlice.reducer;