import styles from "../../../styles/Home.module.css";
import Link from "next/link";

export default function Noteordersuccess() {
    return (
        <div className="w-full h-full fixed top-0 left-0 before:content-[attr(before)] before:bg-black before:top-0 before:left-0 before:absolute before:w-full before:h-full before:opacity-70 z-[1000] hidden">
            <div className="w-[400px] p-3 rounded overflow-hidden bg-white absolute top-1/2 left-1/2 -translate-x-1/2">
                <div className="content">
                    <ul className="list-disc text-xs text-[#ccc] pl-4">
                        <li className="mb-2"><textarea className="border rounded border-[#d9d9d9] w-full p-2 text-sm text-texth" placeholder="Ghi chú thêm (nếu có)" rows={4}></textarea></li>
                        <li className="mb-3"><i className="text-cltext text-xs">Một số yêu cầu vượt ngoài khả năng rất mong Quý khách thông cảm vì BachhoaXANH có thể không phục vụ được.</i></li>
                    </ul>
                </div>
                <div className="">
                    <div className="flex items-center justify-between">
                        <button className="w-[49%] h-10 font-medium uppercase rounded bg-[#8f9bb3] text-white text-sm">Hoàn Tất</button>
                        <button className="w-[49%] h-10 font-medium uppercase rounded bg-[#dfdfdf] text-[#666] text-sm">Đóng</button>
                    </div>
                </div>
            </div>
        </div>
    );
}