import { FC } from "react";
import { useMapEvents } from "react-leaflet";
import { useRecoilState } from "recoil";
import { newPathState } from "@/state/newPath";
import Path from "./Path";
import PathPoint from "./PathPoint";

const NewPath: FC = () => {
  const [newPath, setNewPath] = useRecoilState(newPathState);

  useMapEvents({
      click(e) {
          console.log("hello");
      const { lat, lng } = e.latlng;
      setNewPath({ ...newPath, points: [...newPath.points, { lat, lng }] });
    },
  });

  return (
    <>
      <Path path={newPath} />
      {newPath.points.map((point, id) => (
        <PathPoint point={point} key={id} />
      ))}
    </>
  );
};

export default NewPath;
