import { Book } from "lucide-react";
import FontSelector from "./font-selector";
import ThemeToggle from "./theme-toggle";
const Navbar = () => {
  return (
    <nav className="md:max-w-3xl px-4 md:px-0 py-8 w-full mx-auto">
      <div className="flex items-center justify-between">
        <Book size={32} />
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
