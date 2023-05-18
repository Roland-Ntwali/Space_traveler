import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

const Mission = async () => {
  const resolve = await fetch(url);
  const mission = await resolve.json();
  return mission;
};

const getMission = createAsyncThunk('missions/getMission', Mission);

const missionSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    isLoading: false,
    error: undefined,
  },
  reducers: {
    spacejet: (state, action) => {
      const myState = state;
      const newState = myState.missions.map((jet1) => {
        if (jet1.id !== action.payload) {
          return jet1;
        }
        return {
          ...jet1, mission: !jet1.mission,
        };
      });
      myState.missions = newState;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getMission.pending, (state) => {
      state.isLoading = true;
    }).addCase(getMission.fulfilled, (state, action) => {
      state.isLoading = false;
      state.missions = action.payload;
      state.error = '';
    }).addCase(getMission.rejected, (state, action) => {
      state.isLoading = false;
      state.missions = [];
      state.error = action.error.message;
    });
  },
});

export const { spacejet } = missionSlice.actions;
export { getMission };
export default missionSlice.reducer;
