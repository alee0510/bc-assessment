export type dataType = {
  id: number;
  image: string;
  flag: string;
  name: string;
  experience: string;
  skils: string[];
};

export type HeroType = {
  id: number;
  icon: string;
  title: string;
};

export const samples: dataType[] = [
  {
    id: 1,
    image: "/images/profile-sample.png",
    flag: "/images/flag-sample.png",
    name: "Abhishek Gupta",
    experience: "마케팅 · 2y+",
    skils: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"],
  },
  {
    id: 2,
    image: "/images/profile-sample.png",
    flag: "/images/flag-sample.png",
    name: "Abhishek Gupta",
    experience: "마케팅 · 2y+",
    skils: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"],
  },
  {
    id: 3,
    image: "/images/profile-sample.png",
    flag: "/images/flag-sample.png",
    name: "Abhishek Gupta",
    experience: "마케팅 · 2y+",
    skils: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"],
  },
];

export const heroSamples: HeroType[] = [
  {
    id: 1,
    icon: "/icons/icon-marketing.svg",
    title: "해외 마케팅",
  },
  {
    id: 2,
    icon: "/icons/icon-image.svg",
    title: "퍼블리셔",
  },
  {
    id: 3,
    icon: "/icons/icon-box.svg",
    title: "캐드원(제도사)",
  },
  {
    id: 4,
    icon: "/icons/icon-target.svg",
    title: "해외 세일즈",
  },
  {
    id: 5,
    icon: "/icons/icon-call.svg",
    title: "해외 CS",
  },
];
