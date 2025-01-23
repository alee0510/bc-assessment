import Logo from "@/app/_lib/components/features/header/logo";
import HeaderDropdownMenu from "@/app/_lib/components/features/header/dropdown-menu";

export default function Header(): React.ReactElement {
  return (
    <header
      id="header-container"
      className="fixed left-0 top-0 z-10 flex w-full justify-center text-base font-black"
    >
      <div id="header-menu" className="flex w-full max-w-screen-xl items-center justify-between">
        <Logo />

        <nav id="menu" className="flex items-center gap-8 text-white">
          <HeaderDropdownMenu />
          <p className="cursor-pointer">해외 개발자 활용 서비스</p>
        </nav>

        <button
          type="button"
          id="contact-us"
          className="rounded-md bg-sky-100 px-6 py-2 text-blue-600"
        >
          문의하기
        </button>
      </div>
    </header>
  );
}
