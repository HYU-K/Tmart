import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
import SlidePage from '../../components/modules/slide-page';
import Link from 'next/link'


export default function ListProducts({}) {
  return (
    <div id="main" class="overflow-hidden bg-gray-100 pb-20 xs:pb-0">
      <Head>
        <title>List products</title>
        <meta name="description" content="Generated by Huy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="container">
        <div className="lg:pl-60 w-full pt-2">
          <div className="sm:mb-4">
            <SlidePage />
            <div class={`overflow-hidden mb-4 mt-4 sm:mb-6 lg:mb-8 ${styles.limit_text_1}`}>
                <a before="" href="" title="" class="relative text-[13px] text-texth pr-6 before:content-[attr(before)] before:absolute before:top-[8px] before:right-[10px] before:w-1 before:h-1 before:border-t before:border-r before:border-gray-600 before:rotate-45 last:before:content-none last:text-gray-400 last:pr-0">Trang chủ</a>
                <a before="" href="" title="" class="relative text-[13px] text-texth pr-6 before:content-[attr(before)] before:absolute before:top-[8px] before:right-[10px] before:w-1 before:h-1 before:border-t before:border-r before:border-gray-600 before:rotate-45 last:before:content-none last:text-gray-400 last:pr-0">Sản phẩm</a>
                <a before="" href="" title="" class="relative text-[13px] text-texth pr-6 before:content-[attr(before)] before:absolute before:top-[8px] before:right-[10px] before:w-1 before:h-1 before:border-t before:border-r before:border-gray-600 before:rotate-45 last:before:content-none last:text-gray-400 last:pr-0">Hoa quả</a>
            </div>
          </div>
          {/* <div className="w-full p-0 mb-3 lg:p-3 bg-white lg:mb-4">
            <BoxNhomHang/>
          </div>
          <BoxNhomSanPhamKhuyenMai/>
          <BoxNhomSanPham/>
          <BoxNhomSanPham/>
          <BoxNhomSanPham/>
          <NewsHome /> */}
          
          <Footer />
        </div>
      </div>
    </div>
  )
}