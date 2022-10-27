import styles from '../../../styles/Home.module.css'
import Link from 'next/link'

export default function ProductItem() {
    return (
        <div className={`bg-white rounded sm:rounded-none overflow-hidden ${styles.item_product}`}>
            <Link href={'/product'}>
                <a href="" title="" className="group grid p-2 relative">
                    <div className="mb-3 w-full overflow-hidden">
                        <div className="relative transition-all w-full pt-[100%]">
                            <img src="./images/ome2.png" alt=""
                                className="absolute top-1/2 left-1/2 overflow-hidden transform -translate-y-1/2 -translate-x-1/2 w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="">
                        <div className="mb-3 xs:mb-5">
                            <h3
                                className={`text-[13px] text-texth mb-2 font-medium h-10 overflow-hidden group-hover:text-red-700 ${styles.limit_text_2}`}>
                                Táo Dazzle nhập khẩu New Zealand túi 1kg (5-7 trái)</h3>
                            <div className="flex items-center justify-between">
                                <div className="xs:flex flex-wrap items-center ">
                                    <h3 className="text-[13px] text-red-700 mr-2 mb-1 xs:mb-0 font-bold">
                                        150.000đ</h3>
                                    <p className="text-xs text-gray-400 mr-2">250.000đ</p>
                                </div>
                                <div
                                    className="bg-red-700 flex px-[5px] py-[1px] w-fit rounded-sm absolute top-2 left-2 sm:top-auto sm:left-auto sm:relative">
                                    <span className="text-xs text-white font-medium">-25%</span>
                                </div>
                            </div>
                        </div>
                        <button
                            className="w-full p-0 xs:p-3 border border-white xs:border-color1 text-color1 leading-[0] rounded-sm flex items-center justify-center relative before:duration-500 z-[1] before:content-[attr(before)] before:bg-color1 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[1] before:origin-center-left before:scale-x-0 hover:before:scale-100 hover:before:duration-500 hover:text-white">
                            <span
                                className="text-[13px] font-medium uppercase leading-[100%] z-[2]">CHỌN
                                MUA</span>
                        </button>
                    </div>
                </a>
            </Link>
        </div>
    );
}