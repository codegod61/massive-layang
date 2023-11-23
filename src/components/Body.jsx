import Product2 from '/img/product2.png?url'

export default function Body(){
    return(
       <>
       <div className="container flex ml-[177px]">
        <div className="containerLeft font-Poppins w-[652px]">
            <span className="text-[#444BD3] font-semibold">FITUR UTAMA APLIKASI LAYANG</span>
            <h1 className="text-slate-950 text-[40px] font-bold">2 FITUR UTAMA YANG KAMI TAWARKAN...</h1>
            <h4 className="text-slate-950 text-[18PX] font-normal">Kami memahami kebutuhan desa Anda. Aplikasi kami menawarkan dua fitur utama yang revolusioner: <p className='font-semibold'>Pembuatan Surat Pengantar secara Online dan Pelaporan Online Masalah Desa.</p></h4>
        </div>

        <div className="containerRight mt-[-80px] z-0 ">
                  <img src={Product2} alt="" />
              </div>        
       </div>
       </>        

    );
}