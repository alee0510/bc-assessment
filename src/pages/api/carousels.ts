import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_: NextApiRequest, res: NextApiResponse): void {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Adjust origin for security
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.status(200).json([
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
  ]);
}
