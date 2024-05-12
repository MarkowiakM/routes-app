import { FC } from "react";
import Map from "@/components/Map";
import Nav from "@/components/Nav";
import AddPathDialog from "../../components/PathDialog/AddPathDialog";

const Dashboard: FC = () => {
  return (
    <div className="h-screen w-screen">
      <Map></Map>
      <div className="fixed top-0 z-[1000] flex gap-2">
        <Nav />
        <AddPathDialog />
      </div>
      {/* {isFetching && <Spinner />} */}
    </div>
  );
};

export default Dashboard;
