import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import scheduleService from './scheduleService';

const initialState = {
  schedules: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Get all schedules
export const getSchedules = createAsyncThunk('schedules/getAll', async (date = '', thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await scheduleService.getAllSchedules(token, date);
  } catch (error) {
    const message =
      (error.response && error.response.data & error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSchedules.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getSchedules.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.schedules = action.payload;
      })
      .addCase(getSchedules.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = scheduleSlice.actions;
export default scheduleSlice.reducer;
