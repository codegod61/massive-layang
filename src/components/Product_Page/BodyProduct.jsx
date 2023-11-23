import Product2 from '/imgProduct/product2.png?url'

function BodyProduct() {
  return (
    <div>
        <div className="container flex mt-[111px]">
        <div className="containerLeft font-Poppins w-[652px] ml-[220px]">
            <span className="text-[#444BD3] font-semibold">FITUR UTAMA APLIKASI LAYANG</span>
            <h1 className="text-slate-950 text-[32px] font-bold">2 FITUR UTAMA YANG KAMI TAWARKAN...</h1>
            <p className="text-slate-950 text-[16PX] font-normal">Kami memahami kebutuhan desa Anda. Aplikasi kami menawarkan dua fitur utama yang revolusioner: 
            <span className="font-semibold"> Pembuatan Surat Pengantar secara Online dan Pelaporan Online Masalah Desa.</span></p>
        </div>

        



        <div className="containerRight mt-[-80px] z-0 ">
                  <img src={Product2} alt="" />
              </div>        
       </div>
    </div>
  )
}

export default BodyProduct