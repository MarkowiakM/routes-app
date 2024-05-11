import { FC } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const SURFACE_TYPES = ["Asfalt", "Bruk", "Trasa leśna", "Trasa polna"];

interface Props {
  value: string;
  setValue: (value: string) => void;
}

const SurfaceTypeSelect: FC<Props> = ({ value, setValue }) => {
  return (
    <div className="flex flex-col gap-1">
      <p>Typ nawierzchni:</p>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {SURFACE_TYPES.map(type => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SurfaceTypeSelect;
