export default function HomePage(): React.ReactElement {
  return (
    <main className="size-full">
      <section className="relative isolate size-full min-h-[929px] bg-slate-300">
        <div
          id="backdrop"
          className="fixed left-0 top-0 z-0 h-[929px] w-full bg-[url(/images/backdrop.png)] bg-cover bg-no-repeat opacity-80 mix-blend-color-burn"
        />
        <div
          id="gradiant"
          className="fixed left-0 top-0 h-[929px] w-full bg-gradient-to-t from-teal-400 to-blue-500 mix-blend-color-burn"
        />
      </section>
    </main>
  );
}
