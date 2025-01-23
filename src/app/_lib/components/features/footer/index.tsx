import Image from "next/image";
import { getFooterData } from "@/app/_lib/services";
import type { footerDataType } from "@/app/_lib/types";
import FooterCard from "@/app/_lib/components/features/footer/card";

export default async function Footer(): Promise<React.ReactElement> {
  const data: footerDataType[] = await getFooterData();
  return (
    <footer className="flex size-full flex-col items-center bg-gray-50 py-16">
      <div
        id="grid-container"
        className="container mx-auto grid grid-cols-2 gap-x-2 gap-y-8 p-4 md:w-full md:max-w-screen-xl md:grid-cols-6 md:gap-x-4 md:gap-y-12 md:p-0"
      >
        <div id="company-info" className="col-span-2">
          <div id="company-logo" className="flex items-center gap-2">
            <div className="relative size-14">
              <Image
                src={"/images/logo-colored.svg"}
                alt="Hyperhire"
                sizes="100%"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-2xl/8 font-medium text-gray-900">hyperhire</p>
          </div>
          <p className="text-sm/8 text-gray-800">
            우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
          </p>
          <p className="text-xs/8 font-bold text-gray-600">010-0000-0000</p>
          <p className="text-xs/8 font-bold text-gray-600">aaaaa@naver.com</p>
        </div>
        {data?.map((item: footerDataType) => (
          <FooterCard key={item.id} icon={item.icon} title={item.title} />
        ))}

        <div id="busnises-name" className="col-span-1 flex flex-col gap-2 text-xs">
          <p className="text-gray-800">상호명</p>
          <p className="text-gray-600">하이퍼하이어</p>
          <p className="font-bold text-gray-600">Hyperhire India Private Limited</p>
        </div>

        <div id="ceo" className="col-span-1 flex flex-col gap-2 text-xs">
          <p className="text-gray-800">
            대표 <span className="font-bold">CEO</span>
          </p>
          <p className="text-gray-600">김주현</p>
          <p className="font-bold text-gray-600">Juhyun Kim</p>
        </div>

        <div id="contact" className="col-span-1 flex flex-col gap-2 text-xs">
          <p className="text-gray-800">
            사업자등록번호 <span className="font-bold">CIN</span>
          </p>
          <p className="font-bold text-gray-600">427-86-01187</p>
          <p className="font-bold text-gray-600">U74110DL2016PTC290812 </p>
        </div>

        <div id="address" className="col-span-2 flex flex-col gap-2 text-xs md:col-span-3">
          <p className="text-gray-800">
            주소 <span className="font-bold">ADDRESS</span>
          </p>
          <p className="text-gray-600">
            서울특별시 강남대로 <span className="font-bold">479</span>, 지하{" "}
            <span className="font-bold">1</span>층 <span className="font-bold">238</span>호{" "}
          </p>
          <p className="font-bold text-gray-600">
            D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
          </p>
        </div>
        <p id="copyright" className="col-span-2 text-left text-xs text-gray-600 md:col-span-6">
          ⓒ <span className="font-bold">2023 Hyperhire</span>
        </p>
      </div>
    </footer>
  );
}
