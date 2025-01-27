import { CheckIcon } from "@heroicons/react/20/solid";

// @sample
const samples = [
  {
    id: 1,
    title: "한국어 능력",
  },
  {
    id: 2,
    title: "업무 수행 능력",
  },
  {
    id: 3,
    title: "겸업 여부",
  },
  {
    id: 4,
    title: "평판 조회",
  },
];

export default function MobileSlider(): React.ReactElement {
  return (
    <div className="my-5 grid grid-cols-2 gap-2 px-4 md:hidden">
      {samples.map((item) => {
        return (
          <div key={item.id} className="flex items-center gap-2">
            <div className="flex size-5 items-center justify-center rounded-md bg-slate-100">
              <CheckIcon className="size-4 text-blue-800" />
            </div>
            <p className="text-base font-black">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}
