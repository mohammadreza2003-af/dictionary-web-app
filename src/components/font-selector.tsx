"use client";

import { useFont } from "@/contexts/font-context";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fonts } from "@/constants";

const FontSelector = () => {
  const { fontClass, setFontClass } = useFont();

  return (
    <Select value={fontClass} onValueChange={(e) => setFontClass(e)}>
      <SelectTrigger
        size="sm"
        className="!bg-transparent border-none !focus-visible:border-none focus-visible:ring-0 outline-none shadow-none !p-0"
      >
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {fonts.map((item, index) => (
          <SelectItem key={index} value={item.value}>
            {item.font}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default FontSelector;
