import styles from '../../../styles/Home.module.css'
import Link from 'next/link'

export default function LoginPopup() {
    return (
        <div before="" className='w-full h-full fixed top-0 left-0 before:content-[attr(before)] before:bg-black before:top-0 before:left-0 before:absolute before:w-full before:h-full before:opacity-70 z-[99999]'>
            <div className='w-11/12 max-w-lg bg-white rounded-xl px-4 py-5 sm:px-6 sm:py-7 lg:py-8 lg:px-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='close absolute top-0 right-0 rounded-full bg-red-600 overflow-hidden text-white p-1 translate-x-1/2 -translate-y-1/2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
                <h2 className='uppercase text-texth font-medium text-center mb-6 text-2xl xs:text-3xl sm:text-4xl'>ĐĂNG NHẬP</h2>
                <div className='group flex items-center border border-gray-300 rounded active:border-red-500 p-3 mb-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="currentColor" className='text-gray-300 group-active:text-red-500'>
                        <path d="M9.61812 9.26978C8.54499 10.1816 8.15173 11.8446 9.07835 13.1787C9.94546 14.4271 11.0377 15.5192 12.2859 16.3859C13.62 17.3123 15.2829 16.919 16.1947 15.8458L16.2048 15.8505C17.3694 16.39 18.6064 16.7597 19.876 16.9482V19.5879L19.8749 19.5879L19.872 19.5879C11.8975 19.5992 5.86745 13.499 5.87599 5.59148V5.58789H8.51535L8.51552 5.58906C8.70397 6.85854 9.07358 8.09443 9.61311 9.25897L9.61812 9.26978ZM19.8749 21.5879H20.876C21.4283 21.5879 21.876 21.1402 21.876 20.5879V16.0856C21.876 15.59 21.513 15.1692 21.0228 15.0964L20.1686 14.9697C19.0883 14.8093 18.0365 14.4948 17.0455 14.0357L16.2926 13.687C15.8563 13.4849 15.338 13.6219 15.0586 14.0131L14.7177 14.4903C14.419 14.9085 13.8488 15.0363 13.4266 14.7431C12.3743 14.0124 11.452 13.0903 10.721 12.0378C10.4278 11.6156 10.5555 11.0453 10.9738 10.7466L11.4507 10.406C11.8421 10.1265 11.9791 9.6081 11.7769 9.17179L11.4278 8.41822C10.9687 7.42729 10.6542 6.37564 10.4938 5.29538L10.367 4.44105C10.2942 3.95085 9.87343 3.58789 9.37785 3.58789H4.87599C4.3237 3.58789 3.87599 4.03561 3.87599 4.58789V5.58932C3.86627 14.5958 10.7862 21.6008 19.8749 21.5879Z" fill="" />
                    </svg>
                    <input type="text" placeholder="Số điện thoại"
                        className="w-full text-gray-300 focus:text-black text-sm xs:text-base outline-none pl-3" />
                </div>
                <button className="w-full p-4 bg-color1 border border-color1 mb-5 text-white leading-[0] rounded flex items-center justify-center relative before:duration-500 z-[1] before:content-[attr(before)] before:bg-white before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[1] before:origin-center-left before:scale-x-0 hover:before:scale-100 hover:before:duration-500 hover:text-color1">
                    <span className="text-base font-medium leading-[100%] z-[2]">Tiếp tục</span>
                </button>
                <p className='text-base mb-5 text-texth'>Bằng cách đăng ký tài khoản, bạn đã đồng ý với <a href='' title='' className='text-blue-500'>Điều khoản và Chính sách bảo mật </a>của T-Mart</p>
                <p className='text-base mb-5 text-texth text-center'>Hoặc sử dụng tài khoản</p>
                <div className='grid gap-5 grid-cols-2'>
                    <button className='flex items-center justify-center rounded overflow-hidden border border-green-500 p-3 hover:border-red-500'>
                        <div className='mr-2'>
                            <img src="./images/icon/fb.png" alt="" className="" />
                        </div>
                        <span className='text-lg text-texth'>Facebook</span>
                    </button>
                    <button className='flex items-center justify-center rounded overflow-hidden border border-green-500 p-3 hover:border-red-500'>
                        <div className='mr-2'>
                            <img src="./images/icon/gg.png" alt="" className="" />
                        </div>
                        <span className='text-lg text-texth'>Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
}