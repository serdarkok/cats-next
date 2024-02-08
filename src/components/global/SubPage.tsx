import { Skeleton1 } from "./skeleton/Skeleton1";
import { Skeleton2 } from "./skeleton/Skeleton2";
import { ISubPage } from "@/shared/interfaces/subPages";

export const SubPage = (props: ISubPage) => {
  return (
    <div>
      <h2>{ props.title }</h2>
      <div className="p-4 flex flex-col gap-5">
        {[...Array<number>(props.arrSize).keys()].map((element) => (
          props.type === 1
          ? <Skeleton1 key={element} />
          : <Skeleton2 key={element} />
        ))}
      </div>
    </div>
  )
}
