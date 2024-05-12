import { FC } from "react";
import { paths } from "@/fixtures/paths";
import { useRecoilValue } from "recoil";
import { isNewPathDialogOpenState } from "@/state/isNewPathDialogOpenState";
import { Map, Path, PathPoint } from "@/components/Map";
import NewPath from "@/components/Map/NewPath";
import Nav from "@/components/Nav";
import AddPathDialog from "../../components/PathDialog/AddPathDialog";

const Dashboard: FC = () => {
  const isNewPathDialogOpen = useRecoilValue(isNewPathDialogOpenState);

  return (
    <div className="h-screen w-screen">
      <Map>
        <>
          {paths.map((path, id) => (
            <Path path={path} key={id} />
          ))}
          {paths
            .flatMap(path => path.points)
            .map((point, id) => (
              <PathPoint key={id} point={point} />
            ))}
          {isNewPathDialogOpen && <NewPath />}
        </>
      </Map>
      <div className="fixed top-0 z-[1000] flex gap-2">
        <Nav />
        <AddPathDialog />
      </div>
      {/* {isFetching && <Spinner />} */}
    </div>
  );
};

export default Dashboard;
