import { FC } from "react";
import { Plus, RefreshCcw } from "lucide-react";
import { useRecoilState } from "recoil";
import { isNewPathDialogOpenState } from "@/state/isNewPathDialogOpenState";
import { Button } from "../ui/button";

const Nav: FC = () => {
  const [isNewPathDialogOpen, setIsNewPathDialogOpen] = useRecoilState(isNewPathDialogOpenState);

  return (
    <nav className="flex w-16 flex-col items-center border border-r border-r-primary/20 bg-opacity-30 py-6 shadow-xl filter backdrop-blur-lg">
      <Button
        variant={isNewPathDialogOpen ? "default" : "ghost"}
        size="icon"
        disabled={isNewPathDialogOpen}
        className="disabled:opacity-100"
        onClick={() => setIsNewPathDialogOpen(true)}
      >
        <Plus />
      </Button>
      <Button variant="ghost" size="icon" className="mt-auto">
        <RefreshCcw />
      </Button>
    </nav>
  );
};

export default Nav;
