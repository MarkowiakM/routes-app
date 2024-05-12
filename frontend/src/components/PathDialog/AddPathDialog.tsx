import { FC } from "react";
import { useRecoilState } from "recoil";
import { isNewPathDialogOpenState } from "@/state/isNewPathDialogOpenState";
import { newPathState } from "@/state/newPath";
import { SurfaceType } from "@/types/SurfaceType";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import SurfaceTypeSelect from "./SurfaceTypeSelect";

const AddPathDialog: FC = () => {
  const [isNewPathDialogOpen, setIsNewPathDialogOpen] = useRecoilState(isNewPathDialogOpenState);
  const [newPath, setNewPath] = useRecoilState(newPathState);

  const onCancelClick = () => {
    setIsNewPathDialogOpen(false);
    setNewPath({ surface: "Droga asfaltowa", points: [] })
  };

  return (
    <>
      {isNewPathDialogOpen && (
        <Card className=" my-4 h-max w-[300px] bg-opacity-40 shadow-xl filter backdrop-blur-lg">
          <CardHeader>
            <CardTitle>Nowa trasa</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <SurfaceTypeSelect
              value={newPath.surface}
              setValue={(surface: SurfaceType) => setNewPath({ ...newPath, surface })}
            />
            <div className="flex justify-between">
              <span>Punkty na trasie:</span>
              <Badge>{newPath.points.length}</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={onCancelClick}>
              Anuluj
            </Button>
            <Button onClick={() => setIsNewPathDialogOpen(false)}>Zapisz</Button>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default AddPathDialog;
