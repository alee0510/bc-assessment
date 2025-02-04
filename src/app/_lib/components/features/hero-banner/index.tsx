import { Suspense } from "react";
import Header from "@/app/_lib/components/features/header";
import Backdrop from "@/app/_lib/components/features/hero-banner/backdrop";
import Carousel from "@/app/_lib/components/features/hero-banner/carousel";
import Slider from "@/app/_lib/components/features/hero-banner/slider";
import MobileSlider from "@/app/_lib/components/features/hero-banner/mobile-slider";
import PopOver from "@/app/_lib/components/ui/pop-over";

export default function HeroBanner(): React.ReactElement {
  return (
    <section
      id="hero-banner"
      className="relative isolate flex h-full min-h-[929px] flex-col items-center bg-slate-300"
    >
      <Header />
      <Backdrop />
      <div
        id="hero-content"
        className="flex size-full min-h-[929px] max-w-screen-xl flex-col justify-center"
      >
        <div
          id="content"
          className="mb-0 mt-24 grid size-full grid-cols-1 text-white md:mb-20 md:mt-28 md:grid-cols-2 md:gap-2"
        >
          <div
            id="left-content"
            className="relative col-span-1 flex min-h-72 flex-col gap-4 p-4 md:gap-8 md:p-0"
          >
            <PopOver
              position="left"
              className="-top-12 left-4 animate-fadeIn bg-[#8BC4FF] delay-300 md:-top-20 md:left-0 md:bg-white"
              anchorClassName="md:border-t-white border-t-[#8BC4FF]"
            >
              <p className="text-lg font-black text-white md:text-cyan-400">풀타임, 파트타임</p>
            </PopOver>
            <h1 className="relative animate-fadeInUp text-4xl font-black md:text-5xl">
              최고의 실력을 가진 외국인 인재를 찾고 계신가요?
            </h1>
            <h3 className="animate-fadeInUp text-xl font-black md:text-2xl">
              법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
            </h3>
            <h5 className="hidden animate-fadeInUp text-lg font-black md:block">
              개발자가 필요하신가요?
            </h5>
            <div
              id="card-content"
              className="hidden animate-fadeIn items-center justify-between gap-12 md:flex"
            >
              <div className="border-t-2">
                <h5 className="my-2 font-black">평균 월 120만원</h5>
                <h6>임금을 해당 국가를 기준으로 계산합니다.</h6>
              </div>
              <div className="border-t-2">
                <h5 className="my-2 font-black">최대 3회 인력교체</h5>
                <h6>막상 채용해보니 맞지 않아도 걱정하지 마세요. </h6>
              </div>
              <div className="border-t-2">
                <h5 className="my-2 font-black">평균 3일, 최대 10일</h5>
                <h6>급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.</h6>
              </div>
            </div>
          </div>

          <div id="right-content" className="col-span-1 min-h-72">
            <Suspense fallback={<div>Loading...</div>}>
              <Carousel />
            </Suspense>
          </div>
          <MobileSlider />
          <p className="block px-4 text-lg font-black text-yellow-300 md:hidden">
            개발자가 필요하신가요?
          </p>
        </div>

        <div className="hidden min-h-20 w-full md:block">
          <Slider />
        </div>
      </div>
    </section>
  );
}
