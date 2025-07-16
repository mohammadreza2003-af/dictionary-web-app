import { Book } from "lucide-react";
import FontSelector from "@/components/font-selector";
import ThemeToggle from "@/components/theme-toggle";
const Navbar = () => {
  return (
    <nav className="md:max-w-3xl px-4 md:px-0 py-8 w-full mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Book size={32} />
          <h2 className="font-semibold text-xl sm:block hidden">Dictionary</h2>
          <h2 className="font-bold sm:hidden">Dic</h2>
        </div>
        <div className="flex items-center gap-4">
          <FontSelector />
          <div className="w-[0.5px] min-h-8 bg-foreground" />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
