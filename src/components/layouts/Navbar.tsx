import { Disclosure } from '@headlessui/react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router';
import icon from '../../../public/icon-192x192.png';
import { Button } from '../ui/button';

const navItems = [
  { name: 'Keunggulan', path: '#excellence' },
  { name: 'Cara Kerja', path: '#how-it-works' },
  { name: 'Testimoni', path: '#testimonials' },
];

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-background dark:bg-background sticky top-0 z-50 shadow-md"
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-20">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <img src={icon} alt="Logo" className="max-w-12" />
                <h1 className="md:text-2xl font-bold mt-2.5">Cdingin</h1>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8 items-center">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className="uppercase text-sm font-medium relative tracking-wider transition-all hover:text-primary active:text-primary"
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-300`}
                    />
                  </a>
                ))}

                {/* Button */}
                <Link to="/contact">
                  <Button className="rounded-full py-5 px-6 text-center font-medium shadow-md hover:shadow-lg active:translate-y-[1px] cursor-pointer">
                    Pesan Sekarang
                  </Button>
                </Link>
              </div>

              {/* Mobile Hamburger */}
              <div className="md:hidden">
                <Disclosure.Button className="text-gray-700 dark:text-white hover:text-primary focus:outline-none">
                  {open ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <Disclosure.Panel className="md:hidden px-4 pb-4 pt-2 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="block uppercase text-sm font-medium tracking-wider hover:text-primary active:text-primary"
              >
                {item.name}
              </a>
            ))}

            {/* Button */}
            <Link to="https://cdingin-app.vercel.app/">
              <Button className="w-full mt-3 px-4 py-2 uppercase text-white font-semibold shadow-md hover:shadow-lg active:translate-y-[1px]">
                Pesan Sekarang
              </Button>
            </Link>
            {/* <button className="w-full mt-3 px-4 py-2 uppercase text-white font-semibold bg-gradient-to-r from-purple-500 to-pink-500 shadow-md hover:shadow-lg active:translate-y-[1px]">
              Contact Now
            </button> */}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
