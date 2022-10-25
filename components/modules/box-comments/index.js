
import styles from '../../../styles/Home.module.css'

export default function BoxComments() {

    return (
        <>
            <div className="flex items-center justify-between flex-wrap">
                <div className="flex items-center mb-5">
                    <h3 className="text-texth text-sm font-medium">Hỏi đáp về chương trình</h3>
                    <a href="" title="" className="text-blue-500 text-sm ml-6">Quy định</a>
                </div>
                <div className="w-full sm:max-w-[150px] mb-5">
                    <div className="w-full border border-gray-300 overflow-hidden px-2 bg-white h-9 flex">
                        <input type="text" placeholder="Tìm theo nội dung"
                            className="w-full text-gray-300 focus:text-black text-[13px] outline-none" />
                        <button className="text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18" fill="currentColor">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M17.5893 16.5227L14.5291 13.3863L14.5307 13.3814C15.7032 11.9286 16.3426 10.1122 16.341 8.23907C16.3409 6.61419 15.8644 5.02562 14.9714 3.67313C14.0784 2.32063 12.8089 1.26458 11.3224 0.637769C9.83587 0.0109578 8.19878 -0.158631 6.61697 0.150326C5.03515 0.459284 3.57922 1.23299 2.43225 2.37417C1.28528 3.51535 0.498479 4.97304 0.17078 6.56396C-0.15692 8.15487 -0.0108875 9.80799 0.590514 11.3154C1.19192 12.8229 2.22184 14.1173 3.55077 15.0361C4.87971 15.9548 6.44833 16.4568 8.05939 16.4789C9.93479 16.4833 11.7567 15.8486 13.2294 14.6776L16.2025 17.7637C16.2886 17.8455 16.3905 17.9086 16.5019 17.949C16.6133 17.9893 16.7317 18.006 16.8497 17.9981C16.9678 17.9902 17.083 17.9577 17.188 17.9029C17.2931 17.848 17.3858 17.7719 17.4604 17.6792C18.0901 17.01 17.5893 16.5227 17.5893 16.5227ZM11.5648 13.529C10.5311 14.2437 9.31098 14.6343 8.05778 14.6516C6.36096 14.6633 4.72902 13.9948 3.52088 12.7932C2.31274 11.5915 1.62734 9.95515 1.61542 8.24394C1.61522 6.97999 1.9856 5.7442 2.67998 4.69197C3.37435 3.63974 4.36173 2.81805 5.51793 2.33022C6.67414 1.8424 7.94756 1.71022 9.17806 1.95032C10.4086 2.19041 11.5412 2.79206 12.4335 3.6796C13.3259 4.56713 13.9381 5.70094 14.1932 6.93843C14.4483 8.17592 14.3348 9.46185 13.8672 10.6345C13.3995 11.8072 12.5985 12.8142 11.5648 13.529ZM4.34065 6.77527L5.87092 7.38367L5.87075 7.3841C5.64605 7.94959 5.65513 8.58118 5.896 9.13999C6.13693 9.69894 6.59004 10.1393 7.15564 10.3642L6.54723 11.8944C5.77738 11.5883 5.12886 11.0498 4.68691 10.3617C4.57117 10.1815 4.46961 9.99107 4.38373 9.79184C4.29786 9.59262 4.22913 9.388 4.1776 9.18014C3.98079 8.38635 4.03457 7.54512 4.34065 6.77527Z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mb-5">
                <textarea name="" id="" placeholder="Mời bạn bình luận hoặc đặt câu hỏi" className="w-full border border-gray-300 pt-2 pl-2 sm:pt-4 sm:pl-4 text-sm text-gray-300 focus:text-black focus:outline-none" rows="5"></textarea>
            </div>
            <div className="mb-6">
                <div className='flex items-center justify-between gap-4 mb-4 zoom-80 xs:zoom-100'>
                    <div className="flex gap-6">
                        <div class="flex items-center">
                            <input class="appearance-none rounded-full h-4 w-4 relative border border-gray-400 bg-white checked:border-green-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer before:content-[attr(before)] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full checked:before:bg-green-600" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="text-sm cursor-pointer inline-block text-gray-800" for="flexRadioDefault1">
                                Anh
                            </label>
                        </div>
                        <div class="flex items-center">
                            <input class="appearance-none rounded-full h-4 w-4 relative border border-gray-400 bg-white checked:border-green-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer before:content-[attr(before)] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full checked:before:bg-green-600" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="text-sm cursor-pointer inline-block text-gray-800" for="flexRadioDefault2">
                                Chị
                            </label>
                        </div>
                    </div>
                    <label for="myfile" className='flex items-center gap-2 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-camera-fill text-blue-500" viewBox="0 0 16 16">
                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                            <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg>
                        <span className='text-sm text-blue-500'>Thêm hình ảnh</span>
                    </label>
                    <input type="file" id="myfile" name="myfile" className='hidden' />
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                    <input type="text"
                        className="rounded p-3 focus:outline-none border border-gray-200 h-auto placeholder-gray-300 text-black text-sm w-full"
                        placeholder="Họ - tên*" id="typemsg" />
                    <input type="text"
                        className="rounded p-3 focus:outline-none border border-gray-200 h-auto placeholder-gray-300 text-black text-sm w-full"
                        placeholder="Số điện thoại*" id="typemsg" />
                    <input type="text"
                        className="rounded p-3 focus:outline-none border border-gray-200 h-auto placeholder-gray-300 text-black text-sm w-full"
                        placeholder="Email (không bắt buộc)" id="typemsg" />
                    <button
                        className="w-full p-3 overflow-hidden bg-green-600 border border-green-600 text-white leading-[0] rounded flex items-center justify-center relative before:duration-500 z-[1] before:content-[attr(before)] before:bg-white before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[1] before:origin-center-left before:scale-x-0 hover:before:scale-100 hover:before:duration-500 hover:text-green-600">
                        <span className="text-sm xs:text-base font-medium leading-[100%] z-[2]">
                            Gửi
                        </span>
                    </button>
                </div>
            </div>
            <div className="">
                <div className="mb-5">
                    <div className="flex items-center mb-2">
                        <h3 className="text-sm text-texth font-medium">Đặng Thư</h3>
                        <div className="flex items-center ml-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="currentColor" className="text-yellow-300 stroke-yellow-400 ml-[2px]">
                                <path d="M7.17829 1.09863L9.12782 5.04816L13.4874 5.68538L10.3329 8.75794L11.0773 13.0986L7.17829 11.0482L3.27924 13.0986L4.02372 8.75794L0.869141 5.68538L5.22876 5.04816L7.17829 1.09863Z" fill="" stroke="" stroke-width="1.03629" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="currentColor" className="text-yellow-300 stroke-yellow-400 ml-[2px]">
                                <path d="M7.17829 1.09863L9.12782 5.04816L13.4874 5.68538L10.3329 8.75794L11.0773 13.0986L7.17829 11.0482L3.27924 13.0986L4.02372 8.75794L0.869141 5.68538L5.22876 5.04816L7.17829 1.09863Z" fill="" stroke="" stroke-width="1.03629" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="currentColor" className="text-yellow-300 stroke-yellow-400 ml-[2px]">
                                <path d="M7.17829 1.09863L9.12782 5.04816L13.4874 5.68538L10.3329 8.75794L11.0773 13.0986L7.17829 11.0482L3.27924 13.0986L4.02372 8.75794L0.869141 5.68538L5.22876 5.04816L7.17829 1.09863Z" fill="" stroke="" stroke-width="1.03629" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="currentColor" className="text-yellow-300 stroke-yellow-400 ml-[2px]">
                                <path d="M7.17829 1.09863L9.12782 5.04816L13.4874 5.68538L10.3329 8.75794L11.0773 13.0986L7.17829 11.0482L3.27924 13.0986L4.02372 8.75794L0.869141 5.68538L5.22876 5.04816L7.17829 1.09863Z" fill="" stroke="" stroke-width="1.03629" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="currentColor" className="text-gray-300 stroke-gray-300 ml-[2px]">
                                <path d="M7.17829 1.09863L9.12782 5.04816L13.4874 5.68538L10.3329 8.75794L11.0773 13.0986L7.17829 11.0482L3.27924 13.0986L4.02372 8.75794L0.869141 5.68538L5.22876 5.04816L7.17829 1.09863Z" fill="" stroke="" stroke-width="1.03629" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="flex items-center ml-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                <path d="M9.77471 17.7556L4.82471 12.8057L6.23871 11.3917L9.77621 14.9251L9.77471 14.9267L18.2597 6.44165L19.6737 7.85565L11.1887 16.3417L9.77571 17.7547L9.77471 17.7556Z" fill="#00A652" />
                            </svg>
                            <span className="text-sm text-blue-500">Đã mua</span>
                        </div>
                    </div>
                    <div className="text-texth text-sm mb-4">
                        <p className="">Dưa lưới chứa lượng lớn chất dinh dưỡng có khả năng chống oxy hóa như lutein, zeaxanthin, vitamin C và cryptoxanthin giúp bảo vệ các tế bào...</p>
                    </div>
                    <div className="flex flex-wrap gap-5 mb-2">
                        <img src="./images/detail1.png" alt="" className="w-24 h-24" />
                        <img src="./images/detail2.png" alt="" className="w-24 h-24" />
                        <img src="./images/detail3.png" alt="" className="w-24 h-24" />
                    </div>
                    <div className="flex items-center gap-7">
                        <a href="" title="" className="">
                            <span className="text-blue-500 text-sm ">Thảo luận</span>
                        </a>
                        <a href="" title="" className="group flex items-center">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 group-hover:text-blue-500 mr-1">
                                <g clip-path="url(#clip0_1_9582)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.51552 1.24108C7.62129 1.0031 7.85729 0.849731 8.11771 0.849731C8.81681 0.849731 9.48728 1.12745 9.98161 1.62178C10.476 2.11612 10.7537 2.78659 10.7537 3.48568V5.46265H13.8212C14.1064 5.46001 14.3888 5.5191 14.649 5.63589C14.9104 5.75324 15.1433 5.92603 15.3313 6.14229C15.5194 6.35855 15.6581 6.61311 15.738 6.88833C15.8179 7.16355 15.8371 7.45286 15.7941 7.7362L14.8847 13.667C14.8846 13.6672 14.8847 13.6668 14.8847 13.667C14.8131 14.1382 14.5736 14.5682 14.2104 14.8769C13.8482 15.1848 13.3871 15.3519 12.9117 15.3475H3.5048C2.98047 15.3475 2.47762 15.1392 2.10687 14.7684C1.73612 14.3977 1.52783 13.8948 1.52783 13.3705V8.75759C1.52783 8.23326 1.73612 7.73042 2.10687 7.35966C2.47762 6.98891 2.98047 6.78062 3.5048 6.78062H5.0535L7.51552 1.24108ZM4.82277 8.0986H3.5048C3.33002 8.0986 3.16241 8.16803 3.03882 8.29161C2.91524 8.4152 2.84581 8.58281 2.84581 8.75759V13.3705C2.84581 13.5453 2.91524 13.7129 3.03882 13.8365C3.16241 13.9601 3.33002 14.0295 3.5048 14.0295H4.82277V8.0986ZM6.14075 14.0295H12.9226C13.0815 14.0313 13.2357 13.9756 13.3568 13.8727C13.4779 13.7698 13.5578 13.6265 13.5816 13.4694L14.491 7.53842C14.491 7.53833 14.491 7.53851 14.491 7.53842C14.5053 7.44405 14.4989 7.34745 14.4723 7.2558C14.4457 7.16405 14.3994 7.0792 14.3368 7.00711C14.2741 6.93503 14.1965 6.87743 14.1093 6.83831C14.0222 6.7992 13.9275 6.7795 13.832 6.78058L13.8246 6.78067L10.0947 6.78062C9.73073 6.78062 9.43569 6.48558 9.43569 6.12164V3.48568C9.43569 3.13613 9.29683 2.8009 9.04966 2.55373C8.89952 2.40359 8.71687 2.29341 8.51827 2.23005L6.14075 7.57946V14.0295Z" fill="" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_9582">
                                        <rect width="15.8157" height="15.8157" fill="white" transform="translate(0.869141 0.190796)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="text-gray-400 group-hover:text-blue-500 text-sm ">Thích 200</span>
                        </a>
                    </div>
                </div>
                <div className="p-2 xs:p-4 bg-gray-100 rounded overflow-hidden mb-3">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-6 h-6 rounded-full overflow-hidden">
                            <img src="./images/icon/Logo-filnal.png" alt="" className="w-full h-full" />
                        </div>
                        <h3 className="text-sm text-texth font-medium">Đặng Thư</h3>
                        <div className="border border-green-600 px-1 rounded overflow-hidden">
                            <span className="text-[13px] text-green-600">Quản trị viên</span>
                        </div>
                    </div>
                    <div className="text-texth text-sm">
                        <p className="">Dưa lưới chứa lượng lớn chất dinh dưỡng có khả năng chống oxy hóa như lutein, zeaxanthin, vitamin C và cryptoxanthin giúp bảo vệ các tế bào...</p>
                    </div>
                </div>
            </div>
        </>
    );
}