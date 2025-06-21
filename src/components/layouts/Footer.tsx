export default function Footer() {
  return (
    <footer className="flex-col items-center justify-center bg-[#111827] text-white px-4 pt-13 pb-5 md:px-20">
      <div className="flex items-center gap-20">
        <div className="w-1/2">
          <div className="space-y-6 flex space-x-3">
            <img
              src="/icon-512x512-white.png"
              alt="icon"
              className="max-w-10"
            />
            <h1 className="md:text-2xl text-lg font-bold mt-2.5">Cdingin</h1>
          </div>
          <p className="md:text-lg text-sm font-light text-gray-300">
            Butuh servis AC tanpa ribet?
          </p>
          <p className="md:text-lg text-sm font-light text-gray-300">
            Tinggal duduk manis, teknisi datang ke lokasi.
          </p>
        </div>
        <div className="w-1/2">
          <div className="space-y-6 flex space-x-3">
            <h1 className="md:text-2xl text-lg font-bold">Kontak</h1>
          </div>
          <div className="">
            <p className="md:text-lg text-sm font-light text-gray-300 md:mt-6">
              Jl. Turi Putih Perumahan Bengkuring, Samarinda, Kalimantan Timur
              Indonesia
            </p>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gray-300 mt-10"></div>
      <div className="mt-10 my-auto">
        {/* horizontal line */}
        <p className="md:text-lg text-sm text-center font-light text-gray-300">
          &copy; All rights reserved - Herdi Jaya Service
        </p>
      </div>
    </footer>
  );
}
