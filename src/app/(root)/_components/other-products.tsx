import ProductCard from '@/components/product-card';
import SectionHeader from '@/molecules/section-header';

export default function OtherProducts() {
  return (
    <div className='mt-[135px] mx-auto container px-3 sm:px-2 '>
      <SectionHeader title='Desain Lainnya oleh Studio SAe' />
      <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i}>
            <ProductCard
              productName={`Omah Apik ${i + 1}`}
              type='Scandinavian'
              studio='Studio SAe'
              productImage='https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
              dimension={'15 x 8m'}
              buildingArea={+(Math.random() * 100 + 100).toFixed()}
              bedroom={4}
              floor={2}
              price='32.500.000'
              constructionPrice='560.000.000'
              studioLogo='/studio.png'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
