// app/page.tsx
import dynamic from "next/dynamic";

// const Carousel = dynamic(() => import("../components/Carousel"), { ssr: false });

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-center my-8">صفحه اصلی</h1>
    </main>
  );
}
