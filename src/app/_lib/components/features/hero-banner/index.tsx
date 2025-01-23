import Backdrop from "@/app/_lib/components/features/hero-banner/backdrop";
import HeroCard from "@/app/_lib/components/features/hero-banner/card";
import Carousel from "@/app/_lib/components/features/hero-banner/carousel";

export default function HeroBanner(): React.ReactElement {
  return (
    <section
      id="hero-banner"
      className="relative isolate flex h-full min-h-[929px] items-center justify-center bg-slate-300"
    >
      <Backdrop />
      <div id="hero-content" className="mt-[61px] flex w-full max-w-screen-xl flex-col">
        <div id="content" className="mb-20 flex w-full items-center gap-4 text-white">
          <div id="left-content" className="flex flex-1 flex-col gap-8">
            <h1 className="text-5xl font-black">최고의 실력을 가진 외국인 인재를 찾고 계신가요?</h1>
            <h3 className="text-2xl font-black">
              법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
            </h3>
            <h5 className="text-lg font-black">개발자가 필요하신가요?</h5>
            <div id="card-content" className="flex items-center justify-between gap-12">
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
          <div id="right-content" className="h-full max-w-[50%] flex-1">
            <Carousel />
          </div>
        </div>
        <div id="slider-content" className="flex gap-4 text-white">
          <HeroCard src="/icons/icon-marketing.svg" alt="icon-marketing" text="해외 마케팅" />
          <HeroCard src="/icons/icon-marketing.svg" alt="icon-marketing" text="해외 마케팅" />
          <HeroCard src="/icons/icon-marketing.svg" alt="icon-marketing" text="해외 마케팅" />
          <HeroCard src="/icons/icon-marketing.svg" alt="icon-marketing" text="해외 마케팅" />
          <HeroCard src="/icons/icon-marketing.svg" alt="icon-marketing" text="해외 마케팅" />
        </div>
      </div>
    </section>
  );
}
