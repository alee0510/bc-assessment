import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_: NextApiRequest, res: NextApiResponse): void {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Adjust origin for security
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.status(200).json([
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
  ]);
}
