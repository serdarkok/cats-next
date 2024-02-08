export const Skeleton2 = () => {
  return (
    <div role="status" className="space-y-8 animate-pulse md:flex md:items-start flex-col">
      <ul className="mt-5 space-y-3 w-full">
        <li className="w-1/3 h-4 bg-gray-200 rounded-full dark:bg-gray-300"></li>
        <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-300"></li>
        <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-300"></li>
        <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-300"></li>
      </ul>
    </div>
  )
}
