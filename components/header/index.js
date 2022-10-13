import styles from '../../styles/Home.module.css'
import Link from 'next/link';

export default function Header(props) {
    return (
        <header className="flex bg-color1" id="header">
            <div className="container ">
                <div className="flex items-end mx-[-4px] flex-wrap lg:flex-nowrap">
                    <div
                        className="lg:px-1 order-2 lg:order-1 min-w-full lg:min-w-fit bg-white flex lg:bg-transparent mb-2 lg:mb-0 rounded lg:rounded-none">
                        <div className="menu-top relative">
                            <div
                                className="menu-wrapper flex p-2 lg:px-5 lg:py-3 bg-red-100 lg:bg-white cursor-pointer w-fit h-fit rounded-l lg:rounded-none">
                                <div className="hamburger relative w-[21px] h-[21px] lg:mr-4 z-10">
                                    <span
                                        className="opacity-100 left-0 top-[3px] block w-full h-[2px] bg-color1 lg:bg-[#4F4F4F] absolute rotate-0 ease-in-out"></span>
                                    <span
                                        className="opacity-100 left-0 top-[9px] block w-full h-[2px] bg-color1 lg:bg-[#4F4F4F] absolute rotate-0 ease-in-out"></span>
                                    <span
                                        className="opacity-100 left-0 top-[15px] block w-full h-[2px] bg-color1 lg:bg-[#4F4F4F] absolute rotate-0 ease-in-out"></span>
                                </div>
                                <div className="hidden lg:block">
                                    <h3 className="text-sm text-texth uppercase font-bold">Danh mục sản phẩm</h3>
                                </div>
                            </div>
                            <div
                                className={`lg:h-fit lg:max-h-[calc(100vh - 56px)] scrollbar-none overflow-y-scroll fixed top-0 right-full max-w-xs h-full z-50 bg-slate-50 p-4 w-full lg:absolute lg:top-full lg:left-0 lg:max-w-none border border-white lg:border-gray-300 ${styles.menu_main}`}>
                                <div className="">
                                    <div className="relative flex items-center justify-center lg:hidden">
                                        <div className="my-6">
                                            <div className="">
                                                <img src="./images/icon/Logo-filnal.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="menu-wrapper absolute top-0 right-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                                <path
                                                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <ul className="z-[999] overflow-hidden">
                                        <li className="group mb-[22px] cursor-pointer w-full relative overflow-hidden">
                                            <a className="text_link uppercase w-full max-w-fit relative text-sm text-texth font-medium group-hover:text-color1"
                                                href="./khuyenmaihot.html" title="">Khuyến mãi HOT</a>
                                        </li>
                                        <li className={`group mb-[22px] cursor-pointer w-full relative overflow-hidden ${styles.active}`}>
                                            <a className="text_link uppercase w-full max-w-fit relative text-sm text-texth font-medium group-hover:text-color1"
                                                href="./list-product.html" title="">Thịt, cá, trứng</a>
                                            <div className={`pl-3 pt-3 relative w-full ${styles.sub_menu}`}>
                                                <div className="mb-3 min-w-full border-none"><a
                                                        className="text-[13px] text-texth font-medium hover:text-color1"
                                                        href="" title="">Thịt các loại</a></div>
                                                <div className="mb-3 min-w-full border-none"><a
                                                        className="text-[13px] text-texth font-medium hover:text-color1"
                                                        href="" title="">Cá, hải sản</a></div>
                                                <div className={`mb-3 min-w-full border-none relative w-full ${styles.active}`}>
                                                    <a className="text-[13px] text-texth font-medium hover:text-color1"
                                                        href="" title="">Trứng gà, vịt, cút</a>
                                                    <div className={`pl-3 pt-3 w-full relative border-none ${styles.sub_menu}`}>
                                                        <div className="mb-3"><a
                                                                className="text-xs text-texth font-medium hover:text-color1"
                                                                href="" title="">menu...</a></div>
                                                        <div className="mb-3"><a
                                                                className="text-xs text-texth font-medium hover:text-color1"
                                                                href="" title="">menu...</a></div>
                                                        <div className="mb-3"><a
                                                                className="text-xs text-texth font-medium hover:text-color1"
                                                                href="" title="">menu...</a></div>
                                                    </div>
                                                    <div className="absolute right-0 top-[2px] rotate-0 translate-y-1/2 hover:text-color1 hover:rotate-90 transition-all">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute right-0 top-[2px] rotate-0 translate-y-1/2 group-hover:text-color1 group-hover:rotate-90 transition-all">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                                </svg>
                                            </div>
                                        </li>
                                        <li className="group mb-[22px] cursor-pointer w-full relative overflow-hidden">
                                            <a className="text_link uppercase w-full max-w-fit relative text-sm text-texth font-medium group-hover:text-color1"
                                                href="./list-product.html" title="">Rau, củ, quả</a>
                                        </li>
                                        <li className="group mb-[22px] cursor-pointer w-full relative overflow-hidden">
                                            <a className="text_link uppercase w-full max-w-fit relative text-sm text-texth font-medium group-hover:text-color1"
                                                href="./list-product.html" title="">Gạo, bột, đồ khô</a>
                                        </li>
                                        <li className="group mb-[22px] cursor-pointer w-full relative overflow-hidden">
                                            <a className="text_link uppercase w-full max-w-fit relative text-sm text-texth font-medium group-hover:text-color1"
                                                href="./list-product.html" title="">Bia, nước giải khát</a>
                                        </li>
                                        <li className="group mb-[22px] cursor-pointer w-full relative overflow-hidden">
                                            <a className="text_link uppercase w-full max-w-fit relative text-sm text-texth font-medium group-hover:text-color1"
                                                href="./list-product.html" title="">Sữa các loại</a>
                                        </li>
                                        <li className="group mb-[22px] cursor-pointer w-full relative overflow-hidden">
                                            <a className="text_link uppercase w-full max-w-fit relative text-sm text-texth font-medium group-hover:text-color1"
                                                href="./list-product.html" title="">Mẹ & Bé</a>
                                        </li>
                                        <li className="group mb-[22px] cursor-pointer w-full relative overflow-hidden">
                                            <a className="text_link uppercase w-full max-w-fit relative text-sm text-texth font-medium group-hover:text-color1"
                                                href="./list-product.html" title="">Đồ gia dụng </a>
                                        </li>
                                        <li className="group mb-[22px] cursor-pointer w-full relative overflow-hidden">
                                            <a className="text_link uppercase w-full max-w-fit relative text-sm text-texth font-medium group-hover:text-color1"
                                                href="./list-product.html" title="">Bánh kẹo các loại</a>
                                        </li>
                                        <li className="group mb-[22px] cursor-pointer w-full relative overflow-hidden">
                                            <a className="text_link uppercase w-full max-w-fit relative text-sm text-texth font-medium group-hover:text-color1"
                                                href="./list-product.html" title="">Dầu ăn, nước chấm, gia vị</a>
                                        </li>
                                        <li className="group mb-[22px] cursor-pointer w-full relative overflow-hidden">
                                            <a className="text_link uppercase w-full max-w-fit relative text-sm text-texth font-medium group-hover:text-color1"
                                                href="./list-product.html" title="">Rau, củ, quả</a>
                                        </li>
                                        <li className="group mb-[22px] cursor-pointer w-full relative overflow-hidden">
                                            <a className="text_link uppercase w-full max-w-fit relative text-sm text-texth font-medium group-hover:text-color1"
                                                href="./list-product.html" title="">Gạo, bột, đồ khô</a>
                                        </li>
                                        <li className="group mb-[22px] cursor-pointer w-full relative overflow-hidden">
                                            <a className="text_link uppercase w-full max-w-fit relative text-sm text-texth font-medium group-hover:text-color1"
                                                href="./list-product.html" title="">Bia, nước giải khát</a>
                                        </li>
                                        <li className="group mb-[22px] cursor-pointer w-full relative overflow-hidden">
                                            <a className="text_link uppercase w-full max-w-fit relative text-sm text-texth font-medium group-hover:text-color1"
                                                href="./list-product.html" title="">Sữa các loại</a>
                                        </li>
                                    </ul>
                                    <div
                                        className="min-w-full rounded overflow-hidden px-4 flex bg-white h-[40px] border border-gray-300 shadow-[0px 2px 2px 0px] mb-4">
                                        <input type="text" placeholder="Tìm hơn 200 nhóm hàng"
                                            className="w-full text-xs text-[#828282] focus:text-black outline-none" />
                                        <button className="text-[#828282] zoom-80">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 18 18" fill="currentColor">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M17.5893 16.5227L14.5291 13.3863L14.5307 13.3814C15.7032 11.9286 16.3426 10.1122 16.341 8.23907C16.3409 6.61419 15.8644 5.02562 14.9714 3.67313C14.0784 2.32063 12.8089 1.26458 11.3224 0.637769C9.83587 0.0109578 8.19878 -0.158631 6.61697 0.150326C5.03515 0.459284 3.57922 1.23299 2.43225 2.37417C1.28528 3.51535 0.498479 4.97304 0.17078 6.56396C-0.15692 8.15487 -0.0108875 9.80799 0.590514 11.3154C1.19192 12.8229 2.22184 14.1173 3.55077 15.0361C4.87971 15.9548 6.44833 16.4568 8.05939 16.4789C9.93479 16.4833 11.7567 15.8486 13.2294 14.6776L16.2025 17.7637C16.2886 17.8455 16.3905 17.9086 16.5019 17.949C16.6133 17.9893 16.7317 18.006 16.8497 17.9981C16.9678 17.9902 17.083 17.9577 17.188 17.9029C17.2931 17.848 17.3858 17.7719 17.4604 17.6792C18.0901 17.01 17.5893 16.5227 17.5893 16.5227ZM11.5648 13.529C10.5311 14.2437 9.31098 14.6343 8.05778 14.6516C6.36096 14.6633 4.72902 13.9948 3.52088 12.7932C2.31274 11.5915 1.62734 9.95515 1.61542 8.24394C1.61522 6.97999 1.9856 5.7442 2.67998 4.69197C3.37435 3.63974 4.36173 2.81805 5.51793 2.33022C6.67414 1.8424 7.94756 1.71022 9.17806 1.95032C10.4086 2.19041 11.5412 2.79206 12.4335 3.6796C13.3259 4.56713 13.9381 5.70094 14.1932 6.93843C14.4483 8.17592 14.3348 9.46185 13.8672 10.6345C13.3995 11.8072 12.5985 12.8142 11.5648 13.529ZM4.34065 6.77527L5.87092 7.38367L5.87075 7.3841C5.64605 7.94959 5.65513 8.58118 5.896 9.13999C6.13693 9.69894 6.59004 10.1393 7.15564 10.3642L6.54723 11.8944C5.77738 11.5883 5.12886 11.0498 4.68691 10.3617C4.57117 10.1815 4.46961 9.99107 4.38373 9.79184C4.29786 9.59262 4.22913 9.388 4.1776 9.18014C3.98079 8.38635 4.03457 7.54512 4.34065 6.77527Z">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                    <ul>
                                        <li className="mb-4">
                                            <a href="" title="" className="flex items-start">
                                                <div className="mr-2 translate-y-[50%]"><img src="../images/icon/li.png"
                                                        alt="" />
                                                </div>
                                                <span className="text-sm text-texth">Xả kho giá sốc</span>
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="" title="" className="flex items-start">
                                                <div className="mr-2 translate-y-[50%]"><img src="../images/icon/li.png"
                                                        alt="" />
                                                </div>
                                                <span className="text-sm text-texth">Danh sách 1.740 cửa hàng</span>
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="" title="" className="flex items-start">
                                                <div className="mr-2 translate-y-[50%]"><img src="../images/icon/li.png"
                                                        alt="" />
                                                </div>
                                                <span className="text-sm text-texth">Mua Phiếu mua hàng</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-full rounded overflow-hidden flex bg-white lg:hidden pl-3">
                            <button className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15"
                                    fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10.1214 9.68331L12.4593 12.0212C12.6563 12.2182 12.6535 12.5347 12.453 12.7281C12.2526 12.9216 11.9304 12.9187 11.7334 12.7217L9.4095 10.3978C8.53892 11.1129 7.42463 11.5422 6.21008 11.5422C3.42438 11.5422 1.16612 9.28395 1.16612 6.49824C1.16612 3.71254 3.42438 1.45428 6.21008 1.45428C8.99578 1.45428 11.254 3.71254 11.254 6.49824C11.254 7.70613 10.8295 8.81485 10.1214 9.68331ZM10.0816 6.49824C10.0816 8.63644 8.34827 10.3698 6.21008 10.3698C4.07189 10.3698 2.33854 8.63644 2.33854 6.49824C2.33854 4.36005 4.07189 2.6267 6.21008 2.6267C8.34827 2.6267 10.0816 4.36005 10.0816 6.49824Z"
                                        fill="#828282" />
                                </svg>
                            </button>
                            <input type="text" placeholder="Nhập từ khóa tìm kiếm..."
                                className="w-full h-full text-[#828282] focus:text-black text-sm pl-2 outline-none" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between px-1 py-2 w-full order-1 lg:order-2">
                        <div className="min-w-[37px] h-[34px] mr-6">
                            <Link href={'/'}>
                            <a href="./index.html" title=""><img src="../images/icon/Logo-filnal.png" alt="" /></a>
                            </Link>
                        </div>
                        <div className="flex items-center w-full">
                            <div
                                className="chose-item flex items-center justify-between bg-[#B20000] p-[10px] rounded mr-3 w-1/2 lg:w-auto">
                                <div className="text-white mr-1">
                                    <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.08887 11.6249C4.29945 10.9515 3.56773 10.2133 2.90137 9.418C1.90137 8.22363 0.713868 6.44488 0.713868 4.74988C0.712981 2.9796 1.77902 1.38325 3.41454 0.705752C5.05005 0.0282566 6.93266 0.403154 8.18387 1.6555C9.00665 2.47463 9.46756 3.58887 9.46389 4.74988C9.46389 6.44488 8.27637 8.22363 7.27637 9.418C6.61 10.2133 5.87829 10.9515 5.08887 11.6249ZM5.08887 1.62488C3.36384 1.62695 1.96593 3.02485 1.96387 4.74988C1.96387 5.47863 2.29324 6.7405 3.86074 8.61613C4.24708 9.07741 4.657 9.51842 5.08887 9.93738C5.52077 9.51892 5.93089 9.07854 6.31762 8.618C7.88449 6.73988 8.21387 5.478 8.21387 4.74988C8.2118 3.02485 6.8139 1.62695 5.08887 1.62488ZM5.08887 6.62488C4.05333 6.62488 3.21387 5.78541 3.21387 4.74988C3.21387 3.71434 4.05333 2.87488 5.08887 2.87488C6.1244 2.87488 6.96387 3.71434 6.96387 4.74988C6.96387 5.24716 6.76632 5.72407 6.41469 6.0757C6.06306 6.42734 5.58615 6.62488 5.08887 6.62488Z"
                                            fill="white" />
                                    </svg>
                                </div>
                                <select name="" id=""
                                    className="bg-transparent	text-white focus:text-black text-[13px] w-full lg:w-fit">
                                    <option value="">Chọn địa điểm</option>
                                    <option value="">địa điểm 1</option>
                                    <option value="">địa điểm 2</option>
                                </select>
                            </div>
                            <div className="w-full rounded overflow-hidden px-4 bg-white h-[40px] hidden lg:flex">
                                <input type="text" placeholder="Nhập từ khóa tìm kiếm..."
                                    className="w-full text-[#828282] focus:text-black text-sm outline-none" />
                                <button className="text-[#828282]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                        fill="currentColor">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M17.5893 16.5227L14.5291 13.3863L14.5307 13.3814C15.7032 11.9286 16.3426 10.1122 16.341 8.23907C16.3409 6.61419 15.8644 5.02562 14.9714 3.67313C14.0784 2.32063 12.8089 1.26458 11.3224 0.637769C9.83587 0.0109578 8.19878 -0.158631 6.61697 0.150326C5.03515 0.459284 3.57922 1.23299 2.43225 2.37417C1.28528 3.51535 0.498479 4.97304 0.17078 6.56396C-0.15692 8.15487 -0.0108875 9.80799 0.590514 11.3154C1.19192 12.8229 2.22184 14.1173 3.55077 15.0361C4.87971 15.9548 6.44833 16.4568 8.05939 16.4789C9.93479 16.4833 11.7567 15.8486 13.2294 14.6776L16.2025 17.7637C16.2886 17.8455 16.3905 17.9086 16.5019 17.949C16.6133 17.9893 16.7317 18.006 16.8497 17.9981C16.9678 17.9902 17.083 17.9577 17.188 17.9029C17.2931 17.848 17.3858 17.7719 17.4604 17.6792C18.0901 17.01 17.5893 16.5227 17.5893 16.5227ZM11.5648 13.529C10.5311 14.2437 9.31098 14.6343 8.05778 14.6516C6.36096 14.6633 4.72902 13.9948 3.52088 12.7932C2.31274 11.5915 1.62734 9.95515 1.61542 8.24394C1.61522 6.97999 1.9856 5.7442 2.67998 4.69197C3.37435 3.63974 4.36173 2.81805 5.51793 2.33022C6.67414 1.8424 7.94756 1.71022 9.17806 1.95032C10.4086 2.19041 11.5412 2.79206 12.4335 3.6796C13.3259 4.56713 13.9381 5.70094 14.1932 6.93843C14.4483 8.17592 14.3348 9.46185 13.8672 10.6345C13.3995 11.8072 12.5985 12.8142 11.5648 13.529ZM4.34065 6.77527L5.87092 7.38367L5.87075 7.3841C5.64605 7.94959 5.65513 8.58118 5.896 9.13999C6.13693 9.69894 6.59004 10.1393 7.15564 10.3642L6.54723 11.8944C5.77738 11.5883 5.12886 11.0498 4.68691 10.3617C4.57117 10.1815 4.46961 9.99107 4.38373 9.79184C4.29786 9.59262 4.22913 9.388 4.1776 9.18014C3.98079 8.38635 4.03457 7.54512 4.34065 6.77527Z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                            <div className="mx-6 min-w-[60px] hidden lg:block">
                                <p className="text-white text-[13px] text-center">Đơn hàng của bạn</p>
                            </div>
                            <a title="" href="./cart.html"
                                className="chose-item min-w-[110px] h-[40px] flex items-center justify-center bg-[#B20000] rounded w-1/2 lg:w-auto">
                                <div className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20"
                                        fill="currentColor">
                                        <path
                                            d="M4.07855 4.76982C4.01057 3.43231 4.39122 2.30813 5.38364 1.43806C6.0958 0.812703 6.93449 0.496886 7.88298 0.500023C9.01239 0.504206 9.95985 0.936101 10.7191 1.77061C11.3371 2.45139 11.4856 2.90316 11.7261 4.76982C12.1235 4.76982 12.5293 4.76773 12.934 4.76982C14.0655 4.77819 14.8613 5.5144 14.9188 6.64904C15.0401 9.01975 15.1415 11.3915 15.2513 13.7633C15.3068 14.9617 15.3716 16.1612 15.4124 17.3596C15.4574 18.6982 14.6772 19.4992 13.347 19.4992C9.70364 19.5003 6.06024 19.5003 2.41685 19.4992C1.08874 19.4992 0.29502 18.695 0.352536 17.3586C0.505216 13.7873 0.67149 10.2171 0.846131 6.64799C0.901555 5.51335 1.70051 4.77714 2.83201 4.76878C3.2273 4.76773 3.62155 4.76982 4.07855 4.76982ZM7.87148 18.2328C9.68063 18.2328 11.4898 18.2339 13.2989 18.2328C13.9682 18.2328 14.17 18.0299 14.1428 17.3502C14.0947 16.1507 14.0362 14.9512 13.9808 13.7518C13.873 11.4187 13.7653 9.08668 13.6545 6.75361C13.6304 6.24538 13.4087 6.02368 12.9172 6.02472C9.56246 6.02786 6.20769 6.03413 2.85397 6.0425C2.37606 6.04355 2.146 6.26002 2.11463 6.7327C2.08848 7.12799 2.08325 7.52328 2.06443 7.91858C1.91593 11.0809 1.7643 14.2443 1.62103 17.4067C1.5928 18.0216 1.81345 18.2318 2.44404 18.2318C4.25319 18.2339 6.06233 18.2328 7.87148 18.2328ZM10.4053 4.75414C10.4932 3.55884 10.1104 2.62917 9.06573 2.06969C8.13292 1.56983 7.20011 1.65453 6.35514 2.28721C5.53841 2.89897 5.26024 3.74812 5.37109 4.75309C7.05998 4.75414 8.7154 4.75414 10.4053 4.75414Z"
                                            fill="white" stroke="white" stroke-width="0.5" />
                                        <path
                                            d="M7.88573 11.1551C6.14142 11.1499 4.61985 9.97237 4.19423 8.29917C4.08025 7.84846 4.23397 7.50127 4.59476 7.39774C4.98273 7.28584 5.29855 7.49813 5.43136 7.96035C5.77541 9.15773 6.74273 9.91904 7.91083 9.91172C9.06848 9.90545 10.0076 9.15983 10.3547 7.9729C10.5137 7.42911 10.9644 7.20532 11.366 7.47826C11.6421 7.6665 11.6839 7.93107 11.6149 8.24689C11.2499 9.91381 9.65723 11.1614 7.88573 11.1551Z"
                                            fill="white" stroke="white" stroke-width="0.5" />
                                    </svg>
                                </div>
                                <span className="text-white text-xs uppercase">GIỎ HÀNG</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}