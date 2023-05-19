import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rocket/rocketSlice';
import missionSlice from './Mission/missionSlice';

const store = configureStore({
  reducer: {
    rocketReducer,
    missions: missionSlice,
  },
});

export default store;
