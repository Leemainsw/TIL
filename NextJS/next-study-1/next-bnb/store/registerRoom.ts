import { createSlice } from "@reduxjs/toolkit";

type RegisterRoomState = {
  largeBuildingType: string | null;
  buildingType: string | null;
  roomType: string | null;
  isSetYpForGuest: boolean | null;
};

const initialState: RegisterRoomState = {
  largeBuildingType: null,
  buildingType: null,
  roomType: null,
  isSetYpForGuest: null,
};

const registerRoom = createSlice({
  name: "registerRoom",
  initialState,
  reducers: {},
});

export const registerRoomActions = { ...registerRoom.actions };
export default registerRoom;
