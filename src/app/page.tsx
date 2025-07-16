import SearchBox from "../components/search-box";
import WordDetail from "@/components/word-detail";

export default function Home() {
  return (
    <div className="md:max-w-3xl px-4 md:px-0 py-8 w-full mx-auto">
      <SearchBox />
      <WordDetail />
    </div>
  );
}
