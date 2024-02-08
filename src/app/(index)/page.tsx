import { SubPage } from "@/components/global/SubPage";

export default function Home() {
  return (
    <div className="mt-5 p-4">
      <SubPage title="Home Page" arrSize={2} type={1} />
      <SubPage title="" arrSize={2} type={2} />
    </div>
  );
}
