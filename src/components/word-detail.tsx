"use client";
import { DictionaryEntry, Phonetic } from "@/types/dictionary";
import useSearchStore from "@/store";
import { useQuery } from "@tanstack/react-query";
import { fetchWord } from "@/actions/api";
import AudioPlayer from "./audio-palyer";
import { WordDetailLoading } from "./word-detail-loading";
import NotFound from "./not-found";
import Link from "next/link";
import { HeartIcon } from "lucide-react";
import { useEffect } from "react";
import EmptySearch from "./empty-search";

const WordDetail = () => {
  const { search: word, setRecentSearch } = useSearchStore();

  const {
    data: wordInfo,
    isLoading,
    error,
  } = useQuery<DictionaryEntry[]>({
    queryKey: ["definition", word],
    queryFn: () => fetchWord(word),
    enabled: !!word,
    retry: false,
  });

  useEffect(() => {
    if (wordInfo) {
      setRecentSearch(word.toLowerCase());
    }
  }, [setRecentSearch, word, wordInfo]);

  if (!word) return <EmptySearch />;

  if (isLoading) {
    return <WordDetailLoading />;
  }

  if (error || !wordInfo || (wordInfo.length === 0 && word.length > 0)) {
    return <NotFound word={word} />;
  }

  const wordData = wordInfo[0];

  const audio =
    wordData.phonetics?.find((item: Phonetic) => item.audio)?.audio || "";

  return (
    <>
      <div className="w-full space-y-6 mt-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-5xl font-bold capitalize mb-2">
              {wordData.word}
            </h2>
            {wordData.phonetic && (
              <p className="text-muted-foreground text-lg">
                {wordData.phonetic}
              </p>
            )}
          </div>
          {audio && <AudioPlayer audio={audio} />}
        </div>
        <div className="space-y-8">
          {wordData.meanings.map((meaning, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-8">
                <h3 className="text-xl font-semibold capitalize pb-1">
                  {meaning.partOfSpeech}
                </h3>
                <div className="w-full h-[1px] bg-accent" />
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Meaning</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {meaning.definitions.map((def, i) => (
                    <li key={i}>
                      {def.definition}
                      {def.example && (
                        <p className="text-xs italic text-muted-foreground mt-1 ml-2">
                          “{def.example}”
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              {meaning.synonyms.length > 0 && (
                <div className="text-sm">
                  <span className="font-medium text-foreground">
                    Synonyms:{" "}
                  </span>
                  <span className="text-muted-foreground">
                    {meaning.synonyms.join(", ")}
                  </span>
                </div>
              )}
              {meaning.antonyms.length > 0 && (
                <div className="text-sm">
                  <span className="font-medium text-foreground">
                    Antonyms:{" "}
                  </span>
                  <span className="text-muted-foreground">
                    {meaning.antonyms.join(", ")}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
        {wordData.sourceUrls?.length > 0 && (
          <p className="text-xs text-muted-foreground mt-6">
            Source:{" "}
            <a
              href={wordData.sourceUrls[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              {wordData.sourceUrls[0]}
            </a>
          </p>
        )}
      </div>
      <div className="text-center mt-3 flex items-center justify-center gap-1">
        <HeartIcon />
        <p>Create by </p>
        <Link
          href="https://github.com/mohammadreza2003-af"
          className="underline text-cyan-400"
        >
          Mohmmad reza
        </Link>
      </div>
    </>
  );
};

export default WordDetail;
