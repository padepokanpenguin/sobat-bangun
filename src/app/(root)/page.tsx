import ProductImg from './_components/product-img';
import ProductDetail from './_components/product-detail';
import OtherProducts from './_components/other-products';
import BreadCumbs from '@/components/breadcumbs';

export default function Home() {
  return (
    <div>
      <BreadCumbs params='home/layanan-desain/omah-apik-3' />
      <ProductImg />
      <ProductDetail />
      <OtherProducts />
    </div>
  );
}
