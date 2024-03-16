'use client';
import Button from '@/molecules/button';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className='mx-auto container'>
      <nav className='relative px-4 py-4 flex justify-between items-center bg-white'>
        <a className='text-3xl font-bold leading-none' href='#'>
          <Image src='/logo.png' alt='logo' width={147} height={42} />
        </a>
        <div className='lg:hidden'>
          <button
            onClick={() => setOpen(!open)}
            className={`flex items-center text-[#F5333F] p-3 ${open && 'hidden'}`}
          >
            <svg
              className='block h-5 w-5 fill-current'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
            </svg>
          </button>
        </div>
        <ul className='hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-8'>
          <li>
            <a
              className='text-base font-semibold hover:text-[#f533407a] flex items-center'
              href='#'
            >
              Tentang Kami
              <svg
                className='ml-1 h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fill-rule='evenodd'
                  d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                  clip-rule='evenodd'
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              className='text-base font-semibold text-[#F5333F] hover:text-[#f533407a] flex items-center'
              href='#'
            >
              Produk & Layanan
              <svg
                className='ml-1 h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fill-rule='evenodd'
                  d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                  clip-rule='evenodd'
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              className='text-base font-semibold hover:text-[#f533407a] flex items-center'
              href='#'
            >
              Blog
              <svg
                className='ml-1 h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fill-rule='evenodd'
                  d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                  clip-rule='evenodd'
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              className='text-base font-semibold hover:text-[#f533407a] flex items-center'
              href='#'
            >
              FAQ
              <svg
                className='ml-1 h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fill-rule='evenodd'
                  d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                  clip-rule='evenodd'
                />
              </svg>
            </a>
          </li>
        </ul>
        <button className='hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6  font-bold  rounded-md transition duration-200'>
          Daftar
        </button>
        <button className='hidden lg:inline-block py-2 px-6 bg-[#F5333F] hover:bg-[#f533407a] text-sm text-white font-bold rounded-md transition duration-200'>
          Masuk
        </button>
      </nav>
      <div className={`${!open && 'hidden'} relative z-50 lg:hidden`}>
        <nav className='fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto'>
          <div className='flex items-center mb-8'>
            <a className='mr-auto text-3xl font-bold leading-none' href='#'>
              <Image src='/logo.png' alt='logo' width={147} height={42} />
            </a>
            <button onClick={() => setOpen(false)} className='navbar-close'>
              <svg
                className='h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className='mb-1'>
                <a
                  className='p-4 text-sm font-semibold hover:text-[#f533407a] flex items-center'
                  href='#'
                >
                  Tentang Kami
                  <svg
                    className='ml-1 h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>
              </li>
              <li className='mb-1'>
                <a
                  className='p-4 text-sm font-semibold  text-[#F5333F] hover:text-[#f533407a] flex items-center'
                  href='#'
                >
                  Produk & Layanan
                  <svg
                    className='ml-1 h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>
              </li>
              <li className='mb-1'>
                <a
                  className='p-4 text-sm font-semibold hover:text-[#f533407a] flex items-center'
                  href='#'
                >
                  Blog
                  <svg
                    className='ml-1 h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>
              </li>
              <li className='mb-1'>
                <a
                  className='p-4 text-sm font-semibold hover:text-[#f533407a] flex items-center'
                  href='#'
                >
                  FAQ
                  <svg
                    className='ml-1 h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className='mt-auto'>
            <div className='pt-6'>
              <Button
                className='block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-md w-full'
                value=' Daftar'
              />

              <Button
                className='block px-4 py-3 mb-2 leading-loose text-xs text-center bg-[#F5333F] hover:bg-[#f533407a] text-white font-bold rounded-md transition duration-200 w-full'
                value='Masuk'
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
