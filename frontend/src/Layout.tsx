import { FC } from "react";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div className="flex h-screen w-screen flex-row gap-6 p-6">
      <div>side nav</div>
      <div className="h-[calc(100vh-48px)] w-[calc(100vw-140px)]">
        <Outlet />
      </div>
      {/* {isFetching && <Spinner />} */}
    </div>
  );
};

export default Layout;
