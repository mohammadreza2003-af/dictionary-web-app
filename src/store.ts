import { create } from "zustand";

type SearchState = {
  search: string;
  recentSearch: string[];
  setSearch: (value: string) => void;
  setRecentSearch: (value: string) => void;
};

const useSearchStore = create<SearchState>((set) => ({
  search: "",
  recentSearch: [],
  setSearch: (value) => set({ search: value }),
  setRecentSearch: (value) =>
    set((state) => {
      const updatedRecent =
        state.recentSearch[0] === value
          ? state.recentSearch
          : [
              value,
              ...state.recentSearch.filter((item) => item !== value),
            ].slice(0, 5);

      return { recentSearch: updatedRecent };
    }),
}));

export default useSearchStore;
