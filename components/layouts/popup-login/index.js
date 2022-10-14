import styles from '../../../styles/Home.module.css'
import Link from 'next/link'

export default function LoginPopup() {
    return (
        <div before="" className='w-full h-full fixed top-0 left-0 before:content-[attr(before)] before:bg-black before:top-0 before:left-0 before:absolute before:w-full before:h-full before:opacity-70 z-[99999]'>
            <div className='w-full max-w-xl bg-white rounded-xl px-4 py-5 sm:px-6 sm:py-7 lg:py-8 lg:px-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <h2 className=''></h2>
            </div>
        </div>
    );
}