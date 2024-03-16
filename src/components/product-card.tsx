import Card from '@/molecules/card';
import Image from 'next/image';

interface ProductCardProps {
  productName: string;
  productImage: string;
  type: string;
  studio: string;
  dimension: string;
  buildingArea: number;
  floor: number;
  bedroom: number;
  price: string;
  constructionPrice: string;
  studioLogo?: string;
}

export default function ProductCard({
  productName,
  type,
  studio,
  dimension,
  buildingArea,
  floor,
  bedroom,
  price,
  constructionPrice,
  productImage,
  studioLogo = '/studio.png',
}: ProductCardProps) {
  return (
    <Card>
      <div className='flex w-full justify-center'>
        <Image
          className='object-cover rounded-sm w-full'
          src={productImage}
          width={284}
          height={201}
          alt='product'
        />
      </div>
      <div>
        <div className='flex gap-2 mt-6 '>
          <h4 className='font-bold text-xl'>{productName}</h4>
          <span className='inline-block bg-[#F1F1F1] rounded-full px-3 py-1 text-sm font-'>
            {type}
          </span>
        </div>
        <div className='mt-3 flex gap-1 items-center'>
          <Image src={studioLogo} width={28} height={28} alt='studio' />
          <p className='text-sm'>{studio}</p>
        </div>
        <div className='flex justify-between mt-4 border-b border-s-gray-300 pb-4'>
          <div className='flex flex-col  gap-1 items-center'>
            <div className='h-5 w-5'>
              <Image
                src={'/dimensi-tanah.png'}
                width={18}
                height={8}
                alt='star'
              />
            </div>
            <h6 className='text-xs text-[#808080]'>Dimensi Tanah</h6>
            <p className='text-sm'>{dimension}</p>
          </div>
          <div className='flex flex-col gap-1 items-center'>
            <div className='h-5 w-5'>
              <Image
                src={'/luas-bangunam.png'}
                width={22}
                height={19}
                alt='star'
              />
            </div>
            <h6 className='text-xs text-[#808080]'>Luas Bangunan</h6>
            <p className='text-sm'>
              {buildingArea}
              <sup>2</sup>
            </p>
          </div>
          <div className='flex flex-col gap-1 items-center'>
            <div className='h-5 w-5'>
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
            <div className='h-5 w-5'>
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
        <button className='mt-4 px-4 py-2 w-full bg-white text-[#F94355] border border-[#F94355] rounded-md'>
          Lihat Detail
        </button>
      </div>
    </Card>
  );
}
