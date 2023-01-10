import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Noteordersuccess from '../../components/layouts/popup-note-ordersuccess';
import Voucherordersuccess from '../../components/layouts/popup-voucher-ordersuccess';
import Link from "next/link";

export default function Cart({ }) {
    return (
        <div id="main" className="overflow-hidden bg-gray-100">

            <Head>
                <title>Order Success</title>
                <meta name="description" content="Generated by Huy" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="overflow-hidden shadow">
                <Header />
            </div>
            <div className="sm:container">
                <div className="w-full max-w-[640px] mx-auto">
                    <div className="w-full bg-white p-4 flex items-center justify-center">
                        <div className="bg-color1 rounded-full mr-2 p-[2px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-lg text-white" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                            </svg>
                        </div>
                        <span className="text-base text-color1 font-bold uppercase">ĐẶT HÀNG THÀNH CÔNG</span>
                    </div>
                    <div className="w-full bg-white p-4 mb-2">
                        <div className="">
                            <ul className="list-disc text-xs text-[#ccc] pl-4">
                                <li className="mb-2">
                                    <div className="text-sm text-black">
                                        Người nhận:
                                        <span id="gender">Anh</span>
                                        <span id="name"> Dasssss</span>,
                                        <span id="phone"> 0925487121 </span>
                                        <div className="flex items-center pt-1">
                                            <a href="" target="_blank" title="Chương trình khách hàng thân thiết" className="font-medium flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 504 512.08" width="14" height="14" fill="currentColor" className="text-yellow-800 mr-1"><path fill-rule="nonzero" d="m13.49 173.45 23.38 3.69c12.5-47.72 39.52-89.77 76.2-120.89C152.09 23.15 202.1 2.35 257.25.19c65.47-2.58 125.83 21.67 170.47 62.93 44.62 41.26 73.52 99.53 76.09 164.99.96 24.59-1.81 48.38-7.8 70.78a235.194 235.194 0 0 1-18.85 48.3l-.58-.94a60.454 60.454 0 0 0-23.62-21.56 62.33 62.33 0 0 0-13.7-5.07c4.95-10.41 9-21.33 12.03-32.68a191.43 191.43 0 0 0 6.36-57.02c-2.07-52.79-25.33-99.74-61.25-132.95-35.92-33.2-84.54-52.7-137.34-50.62-44.38 1.74-84.66 18.51-116.12 45.2-28.42 24.11-49.63 56.31-60.17 92.84l18.78 2.96c6.38.99 10.76 6.97 9.77 13.35-.43 2.79-1.82 5.21-3.78 6.95l-52.48 46.73c-4.83 4.3-12.25 3.87-16.56-.97-.73-.81-1.32-1.71-1.78-2.64L1.61 190.93c-3.27-5.57-1.4-12.74 4.17-16.01 2.42-1.42 5.14-1.86 7.71-1.47zm233.7 131c-2.56-.19-4.14-.45-6.03-.75l-10.58-1.52-6.53-1.1c-2.12-.37-4.23-.8-6.32-1.26-2.22-.49-4.27-1-6.11-1.49l-2.48-.66v-40.88l11.56.95 8.48.5 8.91.39 9.01.29 8.77.16 8.14.04c2.48 0 4.65-.08 6.51-.25 1.91-.17 3.62-.43 5.14-.78 1.38-.3 2.59-.72 3.61-1.21.88-.42 1.61-.93 2.18-1.5.48-.48.85-1.05 1.09-1.7.26-.75.4-1.65.4-2.68v-2.7c0-2.16-.69-3.73-2.07-4.71-.85-.6-1.8-1.07-2.81-1.37-1.03-.32-2.19-.47-3.47-.47h-11.92c-8.99 0-16.95-1.01-23.89-3.02-7.06-2.05-13.02-5.14-17.88-9.26-4.96-4.23-8.67-9.84-11.11-16.81-2.39-6.79-3.58-14.86-3.58-24.22v-7.42c0-8.67 1.33-16.3 3.97-22.88 2.68-6.69 6.72-12.27 12.1-16.71 3.9-3.22 7.59-5.85 11.96-7.9 3.7-1.74 7.84-3.04 12.95-3.89v-18.13h37.69v17.4c6.24.49 11.07 1.36 17.17 2.47l3.17.55c2.64.47 5.28.98 7.89 1.52 2.45.5 4.81 1.03 7.05 1.57l2.56.62v40.93l-3.63-.33c-3.6-.3-7.25-.58-10.91-.81-3.98-.24-8.07-.47-12.24-.64-4.36-.19-8.46-.34-12.25-.43-3.5-.08-7.21-.12-11.12-.12-4.51 0-13.13.11-16.54 3.52-2.13 2.13-2.21 8.78-1.09 11.41 1.68 3.98 6.9 4.47 10.65 4.47h14.85c5.46 0 10.52.53 15.16 1.59 4.7 1.06 8.94 2.68 12.71 4.82 7.55 4.31 13.25 10.17 17.07 17.58 1.88 3.64 3.31 7.56 4.25 11.74.94 4.15 1.42 8.52 1.42 13.07v7.43c0 7.33-.66 13.86-1.95 19.58-1.33 5.82-3.35 10.79-6.05 14.88-2.7 4.1-5.98 7.54-9.84 10.3-3.84 2.77-8.25 4.87-13.18 6.27l-1.26.36c-4.8 1.38-8.29 2.39-13.89 3v19.62h-37.69v-19.43zm-136.6 160.02V327.33c67.65 0 79.15-3.05 140.13 35.33h47.92c21.69 1.29 33.05 23.29 11.96 37.73-16.79 12.33-38.96 11.63-61.69 9.59-15.68-.78-16.35 20.28 0 20.35 5.68.45 11.84-.89 17.22-.89 28.35-.04 51.71-5.46 66.01-27.86l7.17-16.75 71.28-35.32c35.66-11.74 61.03 25.56 34.73 51.52-51.63 37.55-104.56 68.45-158.71 93.41-39.34 23.93-78.67 23.1-117.97 0l-58.05-29.97zM4.95 314.15h87.06v164.1H4.95v-164.1z" /></svg>
                                                Hạng Đồng
                                            </a>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" className="bi bi-chevron-right text-color1 ml-1" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-2">
                                    <div className="text-sm text-black">
                                        123, Phường An Khánh (Q2), TP. Thủ Đức (Q2, Q9, Thủ Đức), TP. Hồ Chí Minh
                                    </div>
                                </li>
                                <li className="mb-2"><div className="text-sm text-black">Dự kiến giao vào: <b>08h - 10h </b> - Thứ Năm (29/12) </div></li>
                                <li className="mb-2">
                                    <div className="text-sm text-color1">
                                        <a className="addnote" onclick="">Thêm ghi chú</a>
                                    </div>
                                </li>
                            </ul>
                            <ul className="list-disc text-xs text-[#ccc] pl-4">
                                <li className="mb-2">
                                    <a className="flex items-center text-sm text-blue-500" data-type="normal">
                                        Danh sách 1 sản phẩm
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-caret-down-fill ml-1.5 text-blue-500" viewBox="0 0 16 16">
                                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                            <div className="zoom-80 xs:zoom-100 hidden" data-type="">
                                <div className="text-black">
                                    <div className="">
                                        <div className="text-base">
                                            <b>GÓI GIAO NGÀY 29/12 (8H - 10H)</b>
                                        </div>
                                        <div className="">
                                            <div className="border-b py-2">
                                                <div className="flex gap-3 justify-between">
                                                    <div className="flex gap-3">
                                                        <img alt="Dầu xả Pantene 3MM Biotin ngăn rụng tóc 480ml" src="https://cdn.tgdd.vn/Products/Images/2484/291966/bhx/dau-xa-pantene-3mm-biotin-ngan-rung-toc-480ml-202210110910224605_300x300.jpg" width="80" height="80" />
                                                        <div className="">
                                                            <div className="mb-2">
                                                                <a className="text-sm" href="">
                                                                    Dầu xả Pantene 3MM Biotin ngăn rụng tóc 480ml
                                                                </a>
                                                            </div>
                                                            <div className="text-xs text-blurtext mb-1">
                                                                <label>Số lượng:</label>
                                                                <span className="text">
                                                                    1
                                                                </span>
                                                            </div>
                                                            <div className="text-xs text-blurtext mb-1 flex items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 82.14 122.88" width="14" height="14" fill="currentColor" className="text-blurtext mr-1"><g><path d="M75,80.53c1.09-11.23-0.67-21.99-7.36-34.73c-1.37,8.96-4.51,14.01-11.31,20.53c-2.97-17.65-12.67-34.14-21.9-49.42 c0.54,20.29-6.07,49.28-19.71,64.91c-1.67-8.15-0.47-12.35-1.55-20.57c-1.83,7.34-5.64,11.96-6.69,22.07 c-0.85,8.25,1.47,15.26,5.77,20.64c4.8,6,12.08,10.05,20.23,11.63C56.08,120.16,72.75,103.65,75,80.53L75,80.53z M59.64,117.53 c-4.74,3.09-9.29,4.64-14,5.15c-4.59,0.5-9.23,0.01-14.32-0.97c-9.56-1.85-18.16-6.68-23.91-13.87 c-18.06-22.57,2.36-46.03,3.81-71.92c6.31,7.7,6.95,12.2,8.09,22.31c0.12,1.07,0.22,2.14,0.3,3.21c2.61-6.6,4.57-13.56,5.93-20.43 c2.97-15,3.13-26.27,0.18-41.01c10.94,6.6,16.63,15.28,22.86,26.61c3.84,7,7.52,14.32,10.81,23.37c2.35-9.32,2.9-12.34,0.47-22.3 C88.44,45.72,90.75,97.2,59.64,117.53L59.64,117.53z" /></g></svg>
                                                                Giảm 39% chai thứ 2
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-xs">
                                                        <div className="mb-1">
                                                            <strong>164.000₫</strong>
                                                        </div>
                                                        <div className="line-through text-blurtext">
                                                            <span><b>186.000₫</b></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="clr"></div>
                                            </div>
                                        </div>
                                        <div className="border-b-[3px] py-2 text-sm">
                                            <div className="flex items-center justify-end mb-2">
                                                <span className="text-blurtext">Tiền hàng:</span>
                                                <label className="text-cltext w-32 text-right">164.000₫</label>
                                            </div>
                                            <div className="flex items-center justify-end">
                                                <span className="text-blurtext">Phí giao:</span>
                                                <label className="text-cltext w-32 text-right">15.000₫</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-2 text-sm">
                                    <div className="flex items-center justify-end mb-2">
                                        <span className="text-blurtext">Tiền hàng:</span>
                                        <label className="text-cltext w-32 text-right">164.000₫</label>
                                    </div>
                                    <div className="">
                                        <div className="flex items-center justify-end mb-2">
                                            <span className="text-blurtext">Phí giao hàng</span>
                                            <label className="text-cltext w-32 text-right">
                                                15.000₫
                                            </label>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex items-center justify-end mb-2">
                                            <span className="text-blurtext">Tổng tiền: </span>
                                            <label className="text-cltext w-32 text-right">
                                                <b>179.000₫</b>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="list-disc text-xs text-[#ccc] pl-4">
                                <li className="mb-2">
                                    <div className="text-cltext flex items-center mb-2">
                                        <span className="text-sm">Tổng tiền:</span>
                                        <div className="text-color1 text-base w-32 text-right"><b>179.000₫</b></div>
                                    </div>
                                    <div className="text-cltext text-sm">
                                        <span> Thanh toán<b> TIỀN MẶT</b> khi nhận hàng</span>
                                    </div>
                                </li>
                                <li className="mb-2">
                                    <div className="text-cltext text-sm">
                                        Yêu cầu đồng kiểm tra sản phẩm khi nhận hàng
                                    </div>
                                </li>
                                <li className="mb-3">
                                    <div className="text-cltext text-sm">
                                        Bạn được tính điểm <b>1.640 điểm</b> cho đơn hàng này. Xem hướng dẫn dùng điểm
                                        <a target="_blank" href="" className="text-blue-500 font-bold"> tại đây </a>
                                        để tích lũy điểm
                                    </div>
                                </li>
                                <a onclick="" className="w-fit h-8 px-2 flex items-center justify-center rounded border-blue-500 border overflow-hidden mb-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="text-blue-500 mr-1" id="Layer_1" data-name="Layer 1" viewBox="0 0 112.68 122.88"><path d="M100.87,60.09c-5.65-8.65-9.59-14.76-13.78-21.23-2.2-3.41-4.48-6.93-7.44-11.48l-1.3.85a2.7,2.7,0,0,1-4-3.12,2.64,2.64,0,0,1,1.08-1.4l1.31-.86c-3-4.68-6.77-10.39-11.59-17.77a.68.68,0,0,0-.41-.28.71.71,0,0,0-.49.09L62,6.32a10.12,10.12,0,0,1,.45,5.75,10.24,10.24,0,0,1-4.36,6.44l-.07.06A10.31,10.31,0,0,1,45.34,17.4L43,18.86a10.3,10.3,0,0,1,.48,5.56A10.13,10.13,0,0,1,39.09,31l-.37.24a10.09,10.09,0,0,1-7.58,1.28,10.39,10.39,0,0,1-5-2.71l-2.93,1.91a.65.65,0,0,0-.24.38.68.68,0,0,0,0,.42l.1.16c4.7,7.19,8.39,12.93,11.47,17.72l.08,0,4.52-3a2.7,2.7,0,0,1,4,3.12,2.74,2.74,0,0,1-1.08,1.4l-4.52,2.95-.12.07c1.13,1.77,2.22,3.46,3.35,5.19Zm-65.68,0-3.85-6c-3.1-4.83-6.85-10.67-12.25-18.94h0a5.43,5.43,0,0,1,1.55-7.5c1.26-.84,3.49-2.47,4.74-3.1a2.4,2.4,0,0,1,3.31.73l0,.06a5.61,5.61,0,0,0,3.46,2.46,5.36,5.36,0,0,0,4-.67l.25-.16a5.37,5.37,0,0,0,2.31-3.46,5.6,5.6,0,0,0-.86-4.15l-.09-.15a2.4,2.4,0,0,1,.79-3.29l5.95-3.65a2.39,2.39,0,0,1,3.32.69,5.45,5.45,0,0,0,7.57,1.59l.06,0a5.5,5.5,0,0,0,2.32-3.43,5.34,5.34,0,0,0-.76-4l-.15-.22a2.4,2.4,0,0,1,.7-3.32l4-2.62a5.45,5.45,0,0,1,7.52,1.58C80,19,85.73,28,91.11,36.26c4,6.26,7.83,12.11,15.49,23.83h.63a5.46,5.46,0,0,1,5.45,5.44v5.61a2.41,2.41,0,0,1-2.4,2.4H110a5.3,5.3,0,0,0-3.77,1.57,5.47,5.47,0,0,0-1.61,3.83v.14a5.32,5.32,0,0,0,1.62,3.84l.11.11a5.63,5.63,0,0,0,3.84,1.45h.1a2.4,2.4,0,0,1,2.4,2.38h0v10a2.4,2.4,0,0,1-2.4,2.4h-.1a5.7,5.7,0,0,0-3.94,1.55,5.37,5.37,0,0,0-1.64,3.84v.15a5.49,5.49,0,0,0,1.61,3.83,5.32,5.32,0,0,0,3.77,1.58h.28a2.39,2.39,0,0,1,2.41,2.37v0h0v4.78a5.46,5.46,0,0,1-5.45,5.44H5.44A5.46,5.46,0,0,1,0,117.44v-4.78a2.4,2.4,0,0,1,2.4-2.4h.3a5.3,5.3,0,0,0,3.77-1.57,5.55,5.55,0,0,0,1.61-3.83v-.07h0A5.46,5.46,0,0,0,2.6,99.32a2.4,2.4,0,0,1-2.4-2.4v-.16L0,86.92a2.39,2.39,0,0,1,2.34-2.44H2.5a5.67,5.67,0,0,0,4-1.54h0a5.36,5.36,0,0,0,1.62-3.84v-.16a5.37,5.37,0,0,0-1.62-3.83L6.35,75A5.68,5.68,0,0,0,2.5,73.54l-.27,0A2.38,2.38,0,0,1,0,71.15H0V65.53a5.46,5.46,0,0,1,5.44-5.44Zm26.09,45.22a3.74,3.74,0,0,1-1.49,1.46,6.91,6.91,0,0,1-3.15.52c-1.48,0-2.21-.39-2.21-1.17a1.47,1.47,0,0,1,.09-.36l16-28.23a6.19,6.19,0,0,1,.75-1.11,3.53,3.53,0,0,1,1.24-.77,5.87,5.87,0,0,1,2.25-.38c1.87,0,2.8.41,2.8,1.22a.87.87,0,0,1-.09.4L61.28,105.31ZM54,92.45a14.65,14.65,0,0,1-3.46-.36,7.93,7.93,0,0,1-2.72-1.26c-1.72-1.23-2.57-3.62-2.57-7.17s.9-5.77,2.7-7a11,11,0,0,1,6-1.48,11.34,11.34,0,0,1,6.08,1.48c1.81,1.18,2.71,3.49,2.71,7s-.86,6-2.57,7.17A10.75,10.75,0,0,1,54,92.45Zm0-4.37a.72.72,0,0,0,.58-.27c.39-.42.59-1.49.59-3.2A22.78,22.78,0,0,0,55,81.07a2.65,2.65,0,0,0-.41-1.2.78.78,0,0,0-.58-.22c-.79,0-1.18,1.4-1.18,4.21s.39,4.22,1.18,4.22ZM77.7,107.74a14.5,14.5,0,0,1-3.45-.36,7.89,7.89,0,0,1-2.73-1.26C69.8,104.89,69,102.5,69,99s.9-5.76,2.7-6.9a10.76,10.76,0,0,1,6-1.54,11.14,11.14,0,0,1,6.09,1.54q2.7,1.71,2.7,6.9c0,3.58-.85,6-2.57,7.17a10.75,10.75,0,0,1-6.22,1.62Zm0-4.37a.78.78,0,0,0,.58-.23c.4-.45.59-1.53.59-3.24a22.78,22.78,0,0,0-.18-3.54,2.65,2.65,0,0,0-.41-1.2.78.78,0,0,0-.58-.23c-.78,0-1.17,1.41-1.17,4.22s.39,4.22,1.17,4.22Zm29.53-38.48h-78v3.6a1.63,1.63,0,0,1,0,.31A2.1,2.1,0,0,1,25,68.49v-3.6H5.44a.64.64,0,0,0-.45.19.68.68,0,0,0-.19.45V69a10.38,10.38,0,0,1,4.83,2.53l.15.13a10.14,10.14,0,0,1,3.08,7.25v.24a10.14,10.14,0,0,1-3.08,7.24A10.36,10.36,0,0,1,4.84,89L5,94.79a10.26,10.26,0,0,1,7.92,10s0,.1,0,.12a10.28,10.28,0,0,1-8.06,9.93v2.6a.65.65,0,0,0,.64.64H25V114.7a1.45,1.45,0,0,1,0-.3,2.1,2.1,0,0,1,4.18.3v3.38h78a.67.67,0,0,0,.65-.64v-2.61a10.13,10.13,0,0,1-5.07-2.77,10.33,10.33,0,0,1-3-7.15v-.24a10.18,10.18,0,0,1,3.09-7.23h0a10.38,10.38,0,0,1,5-2.66V89a10.27,10.27,0,0,1-4.83-2.52l-.15-.13a10.19,10.19,0,0,1-3.09-7.24v-.25a10.37,10.37,0,0,1,3-7.15A10.14,10.14,0,0,1,107.88,69V65.53a.65.65,0,0,0-.2-.45.6.6,0,0,0-.45-.19ZM25,81.09a2.1,2.1,0,0,0,4.18.31,1.55,1.55,0,0,0,0-.31v-4.2a2.1,2.1,0,0,0-4.18-.3,1.45,1.45,0,0,0,0,.3v4.2ZM25,93.7a2.1,2.1,0,0,0,4.18.3,1.45,1.45,0,0,0,0-.3V89.5a2.1,2.1,0,0,0-4.18-.31,1.55,1.55,0,0,0,0,.31v4.2Zm0,12.6a2.1,2.1,0,0,0,4.18.31,1.63,1.63,0,0,0,0-.31v-4.2a2.1,2.1,0,0,0-4.18-.31,1.63,1.63,0,0,0,0,.31v4.2ZM55.75,43a2.76,2.76,0,0,0,1.08-1.39,2.7,2.7,0,0,0-4-3.13l-4.52,3a2.7,2.7,0,1,0,3,4.52l4.52-3Zm13.56-8.87a2.62,2.62,0,0,0,1.08-1.39,2.7,2.7,0,0,0-4-3.13l-4.53,3A2.76,2.76,0,0,0,60.75,34a2.7,2.7,0,0,0,4,3.13l4.52-3Z" /></svg>
                                    <span className="text-sm text-blue-500">Dùng phiếu mua hàng</span>
                                </a>
                            </ul>
                        </div>
                        <div className="px-4">
                            <div className="mb-8">
                                <div className="my-4 font-bold text-lg">
                                    Anh Dasssss có thể thanh toán trước bằng
                                </div>
                                <div className="mb-3 h-[45px] border rounded overflow-hidden border-texth p-2 flex items-center cursor-pointer">
                                    <a className="" href="" title="">
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <img src="./images/icon/moca.png" alt="" width={20} />
                                            <div className="flex items-center gap-1 text-[15px]">
                                                <span className="font-bold">Ví</span>
                                                <span className="font-bold text-blue-500">Moca</span>
                                                <span className="font-medium text-texth">|</span>
                                                <span className="font-bold text-green-500">Grab</span>
                                            </div>
                                        </label>
                                    </a>
                                </div>
                                <div className="mb-3 h-[45px] border rounded overflow-hidden border-texth p-2 flex items-center cursor-pointer">
                                    <a className="" href="" title="">
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <img src="./images/icon/atm.png" alt="" width={20} />
                                            <div className="flex items-center gap-1 text-[15px]">
                                                <span className="font-bold">Thẻ ATM</span>
                                            </div>
                                        </label>
                                    </a>
                                </div>
                                <div className="mb-3 h-[45px] border rounded overflow-hidden border-texth p-2 flex items-center cursor-pointer">
                                    <a className="" href="" title="">
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <img src="./images/icon/visa.png" alt="" width={20} />
                                            <div className="flex items-center gap-1 text-[15px]">
                                                <span className="font-bold">Thẻ Visa,Master,JCB</span>
                                            </div>
                                        </label>
                                    </a>
                                </div>
                                <div className="mb-3 h-[45px] border rounded overflow-hidden border-texth p-2 flex items-center cursor-pointer">
                                    <a className="" href="" title="">
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <img src="./images/icon/momo.png" alt="" width={20} />
                                            <div className="flex items-center gap-1 text-[15px]">
                                                <span className="font-bold">Ví Momo</span>
                                            </div>
                                        </label>
                                    </a>
                                </div>
                                <div className="mb-3 h-[45px] border rounded overflow-hidden border-texth p-2 flex items-center cursor-pointer">
                                    <a className="" href="" title="">
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <img src="./images/icon/zalo.png" alt="" width={20} />
                                            <div className="grid items-center text-[15px]">
                                                <span className="font-bold text-green-600">Ví ZaloPay</span>
                                                <span className="text-xs">Nhập mã BHX20 giảm 20k đơn từ 200k</span>
                                            </div>
                                        </label>
                                    </a>
                                </div>
                                <div className="mb-3 h-[45px] border rounded overflow-hidden border-texth p-2 flex items-center cursor-pointer">
                                    <a className="" href="" title="">
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <img src="./images/icon/vnpay.png" alt="" width={20} />
                                            <div className="flex items-center gap-1 text-[15px]">
                                                <span className="font-bold">VNPAY-QR</span>
                                            </div>
                                        </label>
                                    </a>
                                </div>
                                <div className="mb-3 h-[45px] border rounded overflow-hidden border-texth p-2 flex items-center cursor-pointer">
                                    <a className="" href="" title="">
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <img src="./images/icon/ck.png" alt="" width={20} />
                                            <div className="flex items-center gap-1 text-[15px]">
                                                <span className="font-bold">Chuyển Khoản</span>
                                            </div>
                                        </label>
                                    </a>
                                </div>
                            </div>
                            <div className="mb-8">
                                <div className="my-4 font-bold text-lg">
                                    hoặc đổi sang hình thức
                                </div>
                                <div className="mb-3 h-[45px] border rounded overflow-hidden border-texth p-2 flex items-center cursor-pointer">
                                    <a className="" href="" title="">
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <img src="./images/icon/cathe.png" alt="" width={24} />
                                            <div className="flex items-center gap-1 text-[15px]">
                                                <span className="font-bold">Cà thẻ</span>
                                            </div>
                                        </label>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-[#f4f4f4] px-4 mb-3">
                            <div className="pt-3 flex flex-wrap items-center justify-between gap-3 xs:gap-0">
                                <a className="w-full xs:max-w-[49%] h-10 flex items-center justify-center text-sm border border-green-700 text-green-700 rounded" href="">Tiếp tục mua sắm</a>
                                <a className="w-full xs:max-w-[49%] h-10 flex items-center justify-center text-sm border border-green-700 rounded" href="">
                                    <div className="grid text-center">
                                        <span className="text-green-700 font-bold leading-[100%]">Xem chi tiết đơn hàng</span>
                                        <span className="text-[10px] leading-[100%]">(Thêm/ bớt SP; Đổi địa chỉ/ giờ giao)</span>
                                    </div>
                                </a>
                            </div>
                            <div className="py-4">
                                <a className="flex items-center justify-center text-green-700" href="" title="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-x-lg mr-2" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                    </svg>
                                    <span className="text-sm">Hủy đơn hàng</span>
                                </a>
                            </div>
                        </div>
                        <div class="">
                            <span class="flex items-center justify-between text-sm">
                                <span className="text-texth">Đánh giá</span>
                                <a class="flex items-center gap-2 text-cltext" href="">
                                    <img src="./images/icon/buon.png" alt="" width={20} />Không hài lòng
                                </a>
                                <a class="flex items-center gap-2 text-cltext" href="">
                                    <img src="./images/icon/vui.png" alt="" width={20} />Hài lòng
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <Noteordersuccess />
            <Voucherordersuccess />
        </div>
    );
}








