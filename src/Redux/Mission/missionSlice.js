import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

const getMission = async () => {
  const resolve = await fetch(url);
  const mission = await resolve.json();
  return mission;
};

export const fetchMission = createAsyncThunk('missions/fetchMission', getMission);

const MissionSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    status: 'mission_display',
    loading: false,
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

  extraReducers: {
    [fetchMission.pending]: (state) => {
      state.pending = true;
    },
    [fetchMission.fulfilled]: (state, action) => {
      const joinMission = state;
      joinMission.loading = false;
      const missionData = [];
      action.payload.map((mission) => missionData.push({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
        mission: false,
      }));
      joinMission.missions = missionData;
    },
    [fetchMission.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default MissionSlice.reducer;
export const { spacejet } = MissionSlice.actions;
