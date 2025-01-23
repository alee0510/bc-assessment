export type sampleType = {
  id: number;
  icon: string;
  title: string;
  link: string;
};

export const sampleData: sampleType[] = [
  {
    id: 1,
    icon: "/icons/icon-code.svg",
    title: "해외 개발자 원격 채용",
    link: "/",
  },
  {
    id: 2,
    icon: "/icons/icon-avatar.svg",
    title: "외국인 원격 채용 (비개발)",
    link: "/",
  },
  {
    id: 3,
    icon: "/icons/icon-kor.svg",
    title: "한국어 가능 외국인 채용",
    link: "/",
  },
  {
    id: 4,
    icon: "/icons/icon-gear.svg",
    title: "해외 개발자 활용 서비스",
    link: "/",
  },
];
