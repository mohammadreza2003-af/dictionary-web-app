import Image from "next/image";

type NotFoundProps = {
  word: string;
};

const NotFound = ({ word }: NotFoundProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 min-h-[60vh] text-center text-muted-foreground">
      <Image src="/not-found.svg" alt="not-found" width={512} height={512} />
      <p className="text-lg font-medium">{`"${word}" not found.`}</p>
    </div>
  );
};

export default NotFound;
