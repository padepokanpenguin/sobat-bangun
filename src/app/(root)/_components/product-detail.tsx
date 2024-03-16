import PriceCard from '@/components/price-card';
import RoomImage from '@/components/room-image';
import Testimoni from '@/components/testimoni';
import SectionHeader from '@/molecules/section-header';

export default function ProductDetail() {
  return (
    <div className='container mx-auto mt-6'>
      <div className='flex p-3 flex-col lg:p-0 lg:flex-row gap-9'>
        <div className='xl:basis-3/4'>
          <SectionHeader title='Tampilan Rumah' />
          <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4'>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i}>
                <RoomImage
                  room={`Ruang ${i + 1}`}
                  roomImage='https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
                  width={`${(Math.random() * 100).toFixed(1)} x ${(Math.random() * 100).toFixed(1)}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='xl:basis-1/4'>
          <PriceCard
            productName='Omah Apik 1'
            studio='Studio Sae'
            type='Scandinavian'
            studioImage='/studio.png'
            dimension='15 x 8m'
            buildingArea={112}
            floor={2}
            bedroom={4}
            price='32.500.000'
            constructionPrice='560.000.000'
            modification={true}
          />

          {/* Testimoni */}
          <div className='mt-8'>
            <SectionHeader title='Testimoni' />
            <div className='mt-4'>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i}>
                  <Testimoni
                    name='Budi Setiadi'
                    rating={4.5}
                    imageProfile={`https://i.pravatar.cc/150?img=${i + 1}`}
                    comment='Desainnya sangat bagus dan pengirimannya cepat. Terima kasih
                    Sobat Bangun'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
