import Button from '@/molecules/button';
import Card from '@/molecules/card';
import Image from 'next/image';

interface PriceCardProps {
  productName: string;
  studioImage: string;
  studio: string;
  type: string;
  dimension: string;
  buildingArea: number;
  floor: number;
  bedroom: number;
  price: string;
  constructionPrice: string;
  modification: boolean;
}

export default function PriceCard({
  productName,
  studioImage,
  studio,
  type,
  dimension,
  buildingArea,
  floor,
  bedroom,
  price,
  constructionPrice,
  modification,
}: PriceCardProps) {
  return (
    <Card className='p-4 border border-gray-300 rounded-lg'>
      <div>
        <div className='flex gap-2 '>
          <h4 className='font-bold text-xl'>{productName}</h4>
        </div>
        <div className='mt-3 flex gap-1 items-center'>
          <Image src={studioImage} width={28} height={28} alt='studio' />
          <p className='text-sm'>{studio}</p>
        </div>
        <div className='flex gap-6 mt-4'>
          <p className='text-[#4D4D4D]'>Jenis Rumah</p>
          <p>{type}</p>
        </div>
        <div className='flex gap-6 mt-2 border-b border-s-gray-300 pb-4'>
          <p className='text-[#4D4D4D]'>Tipe Desain</p>
          <div className='flex items-center gap-0.5'>
            {modification && (
              <>
                {' '}
                <span className='bg-[#F5333F] flex items-center justify-center h-4 w-4 rounded-full text-white'>
                  <svg
                    width='px'
                    height='12px'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                    <g
                      id='SVGRepo_tracerCarrier'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></g>
                    <g id='SVGRepo_iconCarrier'>
                      {' '}
                      <path
                        d='M4 12.6111L8.92308 17.5L20 6.5'
                        stroke='#fff'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>{' '}
                    </g>
                  </svg>
                </span>
                <p className='text-[#F5333F]'>Dapat Dimodifikasi</p>
              </>
            )}
          </div>
        </div>
        <div className='flex gap-2 mt-4 border-b border-s-gray-300 pb-4'>
          <div className='flex flex-col gap-1 items-center'>
            <div className='h-5 w-5 flex justify-center items-center'>
              <Image
                src={'/dimensi-tanah.png'}
                width={18}
                height={8}
                alt='star'
              />
            </div>
            <h6 className='text-xs text-[#808080]'>Dimensi Tanah</h6>
            <p className='text-sm '>{dimension}</p>
          </div>
          <div className='flex flex-col gap-1 items-center'>
            <div className='h-5 w-5 justify-center items-center'>
              <Image
                src={'/luas-bangunam.png'}
                width={22}
                height={19}
                alt='star'
              />
            </div>
            <h6 className='text-xs text-[#808080]'>Luas Bangunan</h6>
            <p className='text-sm'>
              {buildingArea}m<sup>2</sup>
            </p>
          </div>
          <div className='flex flex-col gap-1 items-center'>
            <div className='h-5 w-5 justify-center items-center'>
              <Image
                src={'/lantai.png'}
                width={16.5}
                height={19.5}
                alt='star'
              />
            </div>
            <h6 className='text-xs text-[#808080]'>Lantai</h6>
            <p className='text-sm'>{floor}</p>
          </div>
          <div className='flex flex-col gap-1 items-center'>
            <div className='h-5 w-5 justify-center items-center'>
              <Image
                src={'/kamar-tidur.png'}
                width={20}
                height={20}
                alt='star'
              />
            </div>
            <h6 className='text-xs text-[#808080]'>Kamar Tidur</h6>
            <p className='text-sm'>{bedroom}</p>
          </div>
        </div>
        <div className='mt-4 space-y-1'>
          <h6 className='text-sm'>Harga Desain</h6>
          <p className='font-semibold text-2xl'>Rp. {price}</p>
          <p className='text-sm text-[#808080]'>
            Harga konstruksi mulai dari Rp {constructionPrice}
          </p>
        </div>
        <Button
          className='mt-4 px-4 py-2 w-full bg-[#F94355] text-white border border-[#F94355] rounded-md'
          value='Konsultasi Sekarang'
        />
      </div>
    </Card>
  );
}
