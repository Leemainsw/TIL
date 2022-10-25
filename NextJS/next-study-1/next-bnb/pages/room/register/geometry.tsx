import { NextPage } from "next";
import dynamic from "next/dynamic";

const RegisterRoomGeometry = dynamic(
    import("../../../components/room/register/RegisterRoomGeometry.tsx"),
    { ssr: false }
);

const geometry: NextPage = () => {
  return <RegisterRoomGeometry />;
};

export default geometry;
