
import Link from 'next/link';
import styles from '../../../styles/Home.module.css'

export default function NewsHome() {
    var indents = []
    for (var i = 0; i < 5; i++) {
        indents.push(
            <>
                <a href="" title=""
                    className="flex items-center mb-4 pb-4 border-b border-b-gray-300 last:pb-0 last:border-b-0">
                    <div className="min-w-[60px]">
                        <div className="relative w-full pt-[60%] transition-all">
                            <img src="./images/new.png" alt=""
                                className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className={`w-full pl-4  overflow-hidden ${styles.limit_text_2}`}>
                        <p className="text-[13px] text-texth hover:text-color1">Dạy trẻ 5 thói quen sau để phòng
                            bệnh trong mùa tựu trường
                        </p>
                    </div>
                </a>
            </>
        );
    }

    return (
        <>
            <div className="bg-white p-4 mb-5 hidden xs:block">
                <h2 className="text-base uppercase text-texth font-medium mb-4">MẸO HAY TRONG GIA ĐÌNH</h2>
                <div className="flex flex-wrap mx-[-10px]">
                    <div className="w-full mb-5 sm:mb-0 sm:w-3/5 px-[10px]">
                        <div className="relative w-full">
                            <div className="w-full overflow-hidden relative flex cursor-pointer z-10 transition-all"
                                data-fancybox="gallery" href="https://www.youtube.com/watch?v=v1_YayoOKWo">
                                <div className="img relative w-full pt-[60%] transition-all">
                                    <img src="./images/new.png" alt=""
                                        className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full h-full object-cover" />
                                </div>
                                <div
                                    className={`absolute bg-white h-14 w-14 flex items-center justify-center top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-full cursor-pointer before:content-[attr(before)] before:w-full before:h-full before:absolute before:top-0 before:-left-0 before:border before:border-white before:rounded-full ${styles.play_video}`}>
                                    <svg className="svg-inline--fa fa-play fa-w-14 text-color1 max-w-[20px] ml-[2px]"
                                        aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play"
                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                        data-fa-i2svg="">
                                        <path fill="currentColor"
                                            d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-2/5 px-[10px]">
                        <div className="">
                            {indents}
                        </div>
                        <Link href={'/news'}>
                            <a href="" title="" className="flex items-center">
                                <span className="text-[13px] text-blue-500">Xem các tin bài khác</span>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" className="ml-1 mt-1">
                                    <path
                                        d="M9.09742 12.1336L8.15409 11.1916L11.2208 8.12491L8.15409 5.05824L9.09742 4.12024L13.1041 8.12691L9.09809 12.1336H9.09742ZM5.48075 12.1336L4.53809 11.1916L7.60475 8.12491L4.53809 5.06291L5.48075 4.12024L9.48809 8.12691L5.48142 12.1336H5.48075Z"
                                        fill="#2F80ED" />
                                </svg>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}