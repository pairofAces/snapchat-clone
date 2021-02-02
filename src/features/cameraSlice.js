import { createSlice } from '@reduxjs/toolkit';

export const cameraSlice = createSlice({
  name: 'camera',
  initialState: {
    cameraImage: null,
  },
  reducers: {
    setCameraImage: (state, action) => {
      state.cameraImage = action.payload;
    },
    resetCameraImage: (state) => {
        
    }
  },
});

export const { setCameraImage, resetCameraImage } = cameraSlice.actions;

export const selectcamera = state => state.camera.value;

export default cameraSlice.reducer;
