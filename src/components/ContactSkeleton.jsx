function ContactSkeleton() {
  return (
    <div className="animate-pulse gap-10 w-auto mx-5 flex flex-col rounded-xl p-6 border-y border-black bg-[#001111]">
      <div className="w-32 h-32 bg-gray-700 rounded-xl" />

      <div className="h-6 w-40 bg-gray-700 rounded" />
      <div className="h-4 w-60 bg-gray-700 rounded" />

      <div className="h-20 w-full bg-gray-700 rounded" />
    </div>
  );
}
