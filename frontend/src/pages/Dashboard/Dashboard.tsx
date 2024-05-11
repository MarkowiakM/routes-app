import { FC } from "react";
import Map from "@/components/Map";
import Nav from "@/components/Nav";
import AddPathDialog from "../../components/PathDialog/AddPathDialog";

const Dashboard: FC = () => {
  return (
    <div className="flex h-screen w-screen flex-row">
      <Nav />
      <div className="relative h-screen w-screen">
        <AddPathDialog />
        <Map></Map>
      </div>
      {/* {isFetching && <Spinner />} */}
    </div>
  );
};

export default Dashboard;
