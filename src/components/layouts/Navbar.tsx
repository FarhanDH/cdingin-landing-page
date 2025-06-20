import { Button } from '../ui/button';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-3 md:px-20 py-4 bg-white dark:bg-background drop-shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/icon-192x192.png" alt="Logo" className="w-10" />
        <span className="text-xl font-black tracking-wide text-primary">
          Cdingin
        </span>
      </div>

      {/* Button */}
      <Button className="rounded-full py-4 px-6 text-center text-white font-medium shadow-md hover:shadow-lg active:translate-y-[1px] xs:text-black">
        <a href="https://cdingin-app.vercel.app/">Pesan Sekarang</a>
      </Button>
    </nav>
  );
}
