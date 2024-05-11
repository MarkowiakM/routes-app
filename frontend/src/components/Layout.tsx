import { FC } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Layout: FC = () => {
  return (
    <div className="flex h-screen w-screen flex-row">
      <Nav />
      <div className="h-screen w-screen">
        <Outlet />
      </div>
      {/* {isFetching && <Spinner />} */}
    </div>
  );
};

export default Layout;
