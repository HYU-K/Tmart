
import styles from '../../../styles/Home.module.css'

export default function BoxNhoNewsHomemHang() {
    var indents = []
    for (var i = 0; i < 10; i++) {
        indents.push(
            <>
                <a href="" title="" className="border border-red-300 p-1 rounded-md sm:border-0 sm:p-0">
                    <div className="mb-2 flex items-center justify-center w-1/2 m-auto sm:w-full"><img
                        src="../images/sp.png" alt="" className="m-auto" /></div>
                    <div className={`text-black text-xs font-medium title11 sm:text-[13px] text-center overflow-hidden ${styles.limit_text_2}`}>Thịt heo các loại
                    </div>
                </a>
            </>
        );
    }

    return (
        <>
            <div className="mb-4">
                <h2 className="font-bold text-black hidden sm:block">Nhóm hàng thường mua</h2>
            </div>
            <div className="grid gap-2 sm:gap-4 xl:gap-6 grid-cols-5 xl:grid-cols-10">
                {indents}
            </div>
        </>
    );
}