import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    const getPositionObj = await getPosition();
    const Position = {
      latitude: getPositionObj.coords.latitude,
      longitude: getPositionObj.coords.longitude,
    };

    const addressObj = await getAddress(Position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode},${addressObj?.countryName}`;
    return { Position, address };
  }
);

const initialState = {
  userName: "",
  status: "idle",
  position: {},
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.userName = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.Position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state) => {
        state.status = "error";
        state.error =
          "there was a problem getting your address. please make sure to fil this field!";
      }),
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;

export const getName = (state) => state.user.userName;
