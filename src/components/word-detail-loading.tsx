import { Skeleton } from "@/components/ui/skeleton";

export function WordDetailLoading() {
  return (
    <div className="flex flex-col space-y-3 my-2">
      <Skeleton className="h-[500px] w-[768] rounded-xl" />
    </div>
  );
}
