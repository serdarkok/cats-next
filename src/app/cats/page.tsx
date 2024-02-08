import { getData } from "@/services/getData";
import { ICats } from "@/shared/interfaces/fetchData";
import Image from "next/image";

const Cats = async () => {
  const cats: ICats[] = await getData();
  return (
    <div className="mt-5 p-4">
      <h2 className="mb-4">Cats</h2>
      <div className="flex flex-wrap gap-5 justify-center">
        { cats.map((cat, i) => (
        <div key={i} className="w-full sm:w-96 h-auto border flex flex-col rounded-lg">
          <div className="h-44 overflow-hidden">
            <Image src={cat.url} alt={cat.breeds[0].name} width={700} height={200} style={{ objectFit: 'cover', objectPosition: 'center' }} className="rounded-t-lg object-cover hover:scale-110 transition ease-in-out duration-700" />
          </div>
          <div className="p-2">
            <p className="text-md text-apollo">{ cat.breeds[0].name }</p>
            <p className="text-xxs text-slate-400">{ cat.breeds[0].temperament }</p>
            <p className="text-xs text-slate-500 my-2 line-clamp-5 leading-5 h-24 overflow-hidden">{ cat.breeds[0].description }</p>
          </div>

        </div>
        )) }

      </div>
    </div>
  )
}

export default Cats;
