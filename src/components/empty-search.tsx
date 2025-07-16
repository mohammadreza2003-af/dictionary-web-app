import Image from "next/image";

const EmptySearch = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 min-h-[60vh] text-center text-muted-foreground">
      <Image
        src="/searching.svg"
        alt="No results found"
        width={512}
        height={512}
      />
      <p className="text-lg font-medium">Let’s find something cool ✨</p>
    </div>
  );
};

export default EmptySearch;
