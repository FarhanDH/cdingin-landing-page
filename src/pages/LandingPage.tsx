import Navbar from '@/components/layouts/Navbar';
import heroImage from '../assets/hero-banner.png';
import { Button } from '@/components/ui/button';
import { excellence } from '@/utils/excellence';
import { waysOfWorking } from '@/utils/waysOfWorking';

export default function LandingPage() {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <div className="flex gap-10 items-center justify-center h-screen bg-gradient-to-r from-[#EFF6FF] to-white md:px-20 px-4">
        <div>
          <h1 className="md:text-4xl text-2xl font-bold">
            Pesan Layanan AC Mudah
          </h1>
          <p className="md:text-lg mt-4">
            Perawatan, pemasangan, dan perbaikan AC langsung dari teknisi
            terpercaya.
          </p>
          <div className="mt-8">
            <Button className="rounded-full py-5 px-6 text-center font-medium shadow-md hover:shadow-lg active:translate-y-[1px] xs:text-black">
              <a href="https://cdingin-app.vercel.app/">Pesan Sekarang</a>
            </Button>
          </div>
        </div>
        <div>
          <img src={heroImage} alt="Landing Page" className="w-200" />
        </div>
      </div>

      {/* Excellence */}
      <div className="flex-col mt-16 justify-center md:px-20 px-4">
        <h1 className="text-3xl font-bold text-center">
          {excellence[0].title}
        </h1>
        {/* List of Excellence */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 text-center">
          {excellence[0].listOfExcellence.map((item) => (
            <div key={item.id}>
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 mx-auto mb-3"
              />
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ways of working */}
      <div className="py-16 flex-col mt-20 justify-center md:px-20 px-4 bg-[#F9FAFB]">
        <h1 className=" text-3xl font-bold text-center">
          {waysOfWorking[0].title}
        </h1>
        {/* List Ways of working */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 text-center">
          {waysOfWorking[0].listOfWaysOfWorking.map((item) => (
            <div key={item.id}>
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 mx-auto mb-3"
              />
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
