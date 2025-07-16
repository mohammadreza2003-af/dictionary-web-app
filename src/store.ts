import { create } from "zustand";

type SearchState = {
  search: string;
  setSearch: (value: string) => void;
};

const useSearchStore = create<SearchState>((set) => ({
  search: "",
  setSearch: (value) => set({ search: value }),
}));

export default useSearchStore;
