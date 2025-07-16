"use client";

import { Input } from "@/components/ui/input";
import { CircleX, Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useSearchStore from "@/store";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "./ui/button";

const schema = z.object({
  search: z.string().min(1, "Please enter a search term"),
});

type SearchForm = z.infer<typeof schema>;

const SearchBox = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<SearchForm>({
    resolver: zodResolver(schema),
  });

  const { search: query } = watch();

  const queryClient = useQueryClient();
  const { search, setSearch, recentSearch } = useSearchStore();

  const onSubmit = (data: SearchForm) => {
    setSearch(data.search);
  };

  const checkClear = search && search === query;

  const handleClear = () => {
    setSearch("");
    reset();
    queryClient.removeQueries({ queryKey: ["definition"] });
  };

  const handleRecent = (word: string) => {
    setSearch(word);
    setValue("search", word, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="relative w-full">
        <button
          type={checkClear ? "button" : "submit"}
          onClick={checkClear ? handleClear : undefined}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5"
        >
          {checkClear ? (
            <CircleX className="w-5 h-5 cursor-pointer" />
          ) : (
            <Search className="w-5 h-5" />
          )}
        </button>

        <Input
          {...register("search")}
          type="text"
          placeholder="Search a word"
          className="!py-6"
        />
      </form>

      <div className="grid grid-cols-3 gap-2 sm:flex items-center">
        {recentSearch.map((recent, index) => (
          <Button
            onClick={() => {
              handleRecent(recent);
            }}
            key={index}
          >
            {recent}
          </Button>
        ))}
      </div>

      {errors.search && (
        <p className="text-sm text-foreground">{errors.search.message}</p>
      )}
    </div>
  );
};

export default SearchBox;
