// app/page.tsxß
import Image from 'next/image'

export default async function HomePage() {
  return (
    <div className="pt-16 max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold">Добро пожаловать в наш онлайн магазин бижутерии</h1>
      <div>
        <Image
          src="/resources/images/main_screen_pic_1.jpg"
          alt="Main screen pic"
          width={1200}
          height={800}
          layout="intrinsic"
        />
      </div>
    </div>
  );
}

