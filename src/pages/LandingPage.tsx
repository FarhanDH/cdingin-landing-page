import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { excellence } from '@/utils/excellence';
import { testimonials } from '@/utils/testimonial';
import { waysOfWorking } from '@/utils/waysOfWorking';
import heroImage from '../assets/hero-banner.png';
import { Link } from 'react-router';

export default function LandingPage() {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <div className="md:flex gap-10 md:justify-between items-center justify-center lg:h-screen bg-gradient-to-r from-[#EFF6FF] to-white md:px-20 px-4 py-10">
        <div>
          <h1 className="md:text-4xl text-xl font-bold">
            Pesan Layanan AC Mudah
          </h1>
          <p className="md:text-lg text-md mt-4 text-gray-600">
            Perawatan, pemasangan, dan perbaikan AC langsung dari teknisi
            terpercaya.
          </p>
          <div className="mt-5">
            <Link to={'https://cdingin-app.vercel.app/'}>
              <Button className="rounded-full py-5 px-6 text-center font-medium shadow-md hover:shadow-lg active:translate-y-[1px] xs:text-black cursor-pointer w-full md:w-auto">
                Pesan Sekarang
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:block mt-5">
          <img src={heroImage} alt="Landing Page" className="w-150" />
        </div>
      </div>

      {/* Excellence */}
      <div
        className="py-8 flex-col justify-center md:px-20 px-4"
        id="excellence"
      >
        <h1 className="md:text-3xl text-xl font-bold text-center">
          {excellence[0].title}
        </h1>
        {/* List of Excellence */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 text-center">
          {excellence[0].listOfExcellence.map((item) => (
            <div key={item.id}>
              <img
                src={item.icon}
                alt={item.title}
                className="md:w-16 w-13 mx-auto mb-3"
              />
              <h2 className="md:text-xl font-bold">{item.title}</h2>
              <p className="text-gray-500 md:text-sm text-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Ways of working */}
      <div
        className="py-8 flex-col justify-center md:px-20 px-4 bg-[#F9FAFB]"
        id="how-it-works"
      >
        <h1 className="md:text-3xl text-xl font-bold text-center">
          {waysOfWorking[0].title}
        </h1>
        <div className="grid grid-cols- md:grid-cols-4 gap-4 mt-12 text-center">
          {waysOfWorking[0].listOfWaysOfWorking.map((item) => (
            <div key={item.id}>
              <img
                src={item.icon}
                alt={item.title}
                className="w-18 mx-auto mb-3"
              />
              <h2 className="md:text-xl font-bold">{item.title}</h2>
              <p className="text-gray-500 md:text-sm text-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div
        className="py-8 flex-col justify-center md:px-20 px-4"
        id="testimonials"
      >
        <h1 className="md:text-3xl text-xl font-bold text-center">Testimoni</h1>
        {/* Testimonial Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {testimonials[0].listOfTestimonial.map((item) => (
            <Card key={item.id} className="max-w-sm shadow-md border-none">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  {/* Avatar */}
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={item.icon} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  {/* Name + Rating */}
                  <div>
                    <CardTitle className="text-base font-semibold">
                      {item.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {item.rating}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-8 text-gray-500 text-sm">
                <p>"{item.description}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Slogan */}
      <div
        className="py-16 flex-col items-center justify-center md:px-20 px-4 bg-primary"
        id="pricing"
      >
        <div className="space-y-8 md:w-120 mx-auto">
          <h1 className="md:text-3xl text-xl font-bold text-center text-white">
            AC kamu panas? Kami siap bantu!
          </h1>
          <p className="text-center text-white md:text-lg text-sm font-light">
            Teknisi siap datang ke tempatmu. Praktis, cepat, tinggal klik
            tombol.
          </p>
          <Link to={'https://cdingin-app.vercel.app/'}>
            <Button className="bg-white text-primary shadow-md hover:bg-white/90 focus-visible:ring-primary/50 rounded-full w-full font-medium py-5 px-6 text-md active:translate-y-[1px] cursor-pointer">
              Pesan Sekarang
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
