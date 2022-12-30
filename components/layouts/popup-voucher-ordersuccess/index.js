import styles from "../../../styles/Home.module.css";
import Link from "next/link";

export default function Voucherordersuccess() {
    return (
        <div className="w-full h-full fixed top-0 left-0 before:content-[attr(before)] before:bg-black before:top-0 before:left-0 before:absolute before:w-full before:h-full before:opacity-70 z-[1000] hidden">
            <div className="w-[570px] p-3 rounded overflow-hidden bg-[#e9edf0] absolute top-1/2 left-1/2 -translate-x-1/2">
                <h3 className="">Dùng phiếu mua hàng</h3>
                <div class="text-box">
                    <input type="text" name="apply-code" placeholder="Nhập phiếu mua hàng" fdprocessedid="" />
                    <a class="btn-coupon apply" onclick="afterVoucher.applyVoucher(this)">Áp dụng</a>
                </div>
                <div className="">
                    <div className="">
                        <button className="w-full h-10 font-medium uppercase rounded bg-[#8f9bb3] text-white text-sm">Hoàn Tất</button>
                        <button className="w-full h-10 font-medium uppercase rounded bg-[#dfdfdf] text-[#666] text-sm">Đóng</button>
                    </div>
                </div>
            </div>
        </div>
    );
}