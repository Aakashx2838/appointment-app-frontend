export default function AppointmentCardSkeleton() {
  return (
    <li className="flex items-start gap-2 py-3 md:px-3">
      <div className="flex flex-col flex-none">
        <div className="w-8 h-8 bg-gray-300 rounded-md animate-pulse" />
        <div className="w-8 h-8 mt-1 bg-gray-300 rounded-md animate-pulse" />
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div className="w-24 h-8 font-medium bg-gray-300 rounded-full sm:w-64 md:w-96 animate-pulse" />
          <div className="w-16 h-8 font-medium bg-gray-300 rounded-full sm:w-48 md:w-64 animate-pulse" />
        </div>
        <div className="flex items-center w-32 h-5 gap-2 mt-2 font-thin bg-gray-300 rounded-full animate-pulse" />
        <div className="flex items-center w-32 h-5 gap-2 mt-2 font-thin bg-gray-300 rounded-full animate-pulse" />
      </div>
    </li>
  );
}
