import { FC } from "react";
import { Plus, RefreshCcw } from "lucide-react";
import { useRecoilState } from "recoil";
import { isNewPathDialogOpenState } from "@/state/isNewPathDialogOpenState";
import { Button } from "../ui/button";

const Nav: FC = () => {
  const [isNewPathDialogOpen, setIsNewPathDialogOpen] = useRecoilState(isNewPathDialogOpenState);

  return (
    <nav className="flex h-screen w-16 flex-col items-center border-r bg-background/30 py-6 shadow-2xl filter backdrop-blur-xl">
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
