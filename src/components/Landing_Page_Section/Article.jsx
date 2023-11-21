import CardArticle from "../Cards/CardArticle";
import ButtonArticle from "../Buttons/ButtonArticle";

export default function Article() {
    return(
        <>
            <div className="Article font-Poppins gap-[12px] text-center mt-[50px] mb-[155px]">
                <h1 className="text-[#27005D] text-[44px] font-bold">Semua Informasi di Desa Anda</h1>
                <p className="text-[18px] opacity-50">Baca informasi informasi penting di desa anda yang dikelola langsung oleh <br /> warga setempat</p>
            </div>
            <div className="flex gap-[38px] font-Poppins ml-[180px]">
            <CardArticle textArticle='Warga desa bergotong royong membersihkan selokan' img='img/CardArticle.png'/>
            <CardArticle textArticle='Kepala desa memberi himbauan agar warga tidak termakan hoax' img='img/CardArticle2.png'/>
            <div className="lainnya ml-[66px]">
                <h1 className="text-[44px] font-bold text-[#27005D] mb-[26px]">Baca Artikel <br /> Lainnya</h1>
                <ButtonArticle />
            </div>
            </div>
        </>
    );
}