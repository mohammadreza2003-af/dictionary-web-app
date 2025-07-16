"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useSearchStore from "@/store";

const schema = z.object({
  search: z.string().min(1, "Please enter a search term"),
});

type SearchForm = z.infer<typeof schema>;

const SearchBox = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchForm>({
    resolver: zodResolver(schema),
  });

  const { setSearch } = useSearchStore();

  const onSubmit = (data: SearchForm) => {
    setSearch(data.search);
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="relative w-full">
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5"
        >
          <Search className="w-5 h-5" />
        </button>
        <Input
          {...register("search")}
          type="text"
          placeholder="Search a word"
          className="!py-6"
        />
      </form>

      {errors.search && (
        <p className="text-sm text-foreground">{errors.search.message}</p>
      )}
    </div>
  );
};

export default SearchBox;
