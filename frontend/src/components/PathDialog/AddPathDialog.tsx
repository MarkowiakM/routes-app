import { FC, useState } from "react";
import { useRecoilState } from "recoil";
import { isNewPathDialogOpenState } from "@/state/isNewPathDialogOpenState";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import SurfaceTypeSelect from "./SurfaceTypeSelect";

const AddPathDialog: FC = () => {
  const [isNewPathDialogOpen, setIsNewPathDialogOpen] = useRecoilState(isNewPathDialogOpenState);
  const [surfaceType, setSurfaceType] = useState("Asfalt");
  const points = 10;

  return (
    <>
      {isNewPathDialogOpen && (
        <Card className="absolute z-[1000] m-4 w-[300px] bg-opacity-40 shadow-xl filter backdrop-blur-lg">
          <CardHeader>
            <CardTitle>Nowa trasa</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <SurfaceTypeSelect value={surfaceType} setValue={setSurfaceType} />
            <div className="flex justify-between">
              <span>Dodane punkty:</span>
              <Badge>{points}</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setIsNewPathDialogOpen(false)}>
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
