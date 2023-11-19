import  BgMain  from '/img/bg-landing-page.png?url'
import Phone from '/img/layang-phone.png?url'

export default function MainBody(){
    return(
        <>
        <div className="relative bg-cover h-[895px] z-0" style={{backgroundImage: `url(${BgMain})`}}>
            <div className='flex justify-center '>
                <div className="navbar bg-opacity-0 bg-transparent z-50 w-[1128px] mt-[31px]">
                    <div className="header flex items-center justify-between text-slate-50  font-Poppins">
                        <div className="logo flex items-center font-bold text-2xl">
                            <img className="mr-[19px]" src="img/logo.png" alt="" />
                            <h1>LAYANG</h1>
                        </div>
                        <ul className="">
                            <li className="space-x-12 text-slate-50">
                                <a className="pt-6 " href="">Produk Kami</a>
                                <a className="pt-6 " href="">Tentang Kami</a>
                                <a className="pt-6 " href="">Artikel</a>
                                <a className="pt-6 " href="">Kontak Kami</a>
                            </li>
                        </ul>
                    </div>
                    {/* <img className="w-screen" src="img/bg-landing-page.png" alt="" /> */}
                </div>
            </div>

            <div className="container flex mt-[111px] ml-[177px]">
                <div className="containerLeft font-Poppins w-[652px]">
                    <h1 className="text-slate-50 text-[56px] font-bold">Pelaporan dan Pembuatan Surat Tanpa Ribet</h1>
                    <h4 className="text-slate-50 text-xl font-normal">Selesaikan Urusan Tanpa Ribet: Layanan Pelaporan Online Kami, Cepat, Aman, dan Efisien!</h4>
                    <div className="button flex my-5 space-x-4 text-center">
                        <button className='px-[32px] py-[14px] rounded-lg bg-white text-[#27005D]'>Pelajari Lebih Lanjut</button>
                        <button className='border-2 border-white px-[32px] py-[14px] rounded-lg text-white'>Download Aplikasi</button>
                    </div>
                </div>
                <div className="containerRight mt-[-80px]">
                    <img src={Phone} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}