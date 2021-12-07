import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { positionElem, selectorsCSS, animations, features } from "./data"

const initialState: demoState = {
  activeSlider: {},
  activeDemo: {
    parent: {},
    childItem: {}
  },
};

interface demoState {
  activeSlider: any
  activeDemo: any
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
    setDemo: (state, action: PayloadAction<any>) => {
      state.activeDemo[action.payload.option] = action.payload.optionValue;
    },
  }
});

export const { setSlider, setDemo } = demoSlice.actions;

export const selectSlider = (state: RootState) => state.demo.activeSlider;
export const selectDemo = (state: RootState) => state.demo.activeDemo;

export default demoSlice.reducer;