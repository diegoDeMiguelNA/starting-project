import { Outlet } from "react-router-dom";
import MainHeader from "../mainHeader/MainHeader";

export default function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}
