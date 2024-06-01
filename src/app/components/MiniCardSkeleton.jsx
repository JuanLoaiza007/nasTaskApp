export default function MiniCardSkeleton() {
  return (
    <div className="flex flex-col space-y-2 p-4 rounded-lg bg-blue-100 animate-pulse">
      <div className="flex justify-between w-full p-2">
        <div className="text-lg font-bold my-auto px-2">
          <div className="h-8 w-32 bg-slate-200 rounded-full"></div>
        </div>
        <div className="text-sm font-medium text-slate-600 px-2">
          <div className="h-8 w-32 bg-slate-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
