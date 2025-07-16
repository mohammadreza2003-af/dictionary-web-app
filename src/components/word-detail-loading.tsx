import { Skeleton } from "@/components/ui/skeleton";

export function WordDetailLoading() {
  return (
    <div className="flex flex-col space-y-3 my-2">
      {Array(5)
        .fill("")
        .map((_, index) => (
          <Skeleton
            key={index}
            className="md:h-[100px] w-[400px] h-[80px] md:w-[768px] rounded-xl"
          />
        ))}
    </div>
  );
}
