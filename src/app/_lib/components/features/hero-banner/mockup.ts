export type sampleType = {
  id: number;
  image: string;
  flag: string;
  name: string;
  experience: string;
  skils: string[];
};

export const sampleData: sampleType[] = [
  {
    id: 1,
    image: "/images/sample-1.jpg",
    flag: "/images/flag-sample.png",
    name: "Abhishek Gupta",
    experience: "마케팅 · 2y+",
    skils: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"],
  },
  {
    id: 2,
    image: "/images/sample-2.jpg",
    flag: "/images/flag-sample.png",
    name: "Abhishek Gupta",
    experience: "마케팅 · 2y+",
    skils: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"],
  },
  {
    id: 3,
    image: "/images/sample-3.jpg",
    flag: "/images/flag-sample.png",
    name: "Abhishek Gupta",
    experience: "마케팅 · 2y+",
    skils: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"],
  },
];
