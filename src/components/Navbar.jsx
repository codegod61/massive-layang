import ButtomApp from '/img/btnapp.jfif?url'
import Gps from '/img/gps.jfif?url'
import Product from '/img/product.png?url'

export default function Navbar(){
    return(
      <>

          <div className='flex justify-center '>
              <div className="navbar bg-opacity-0 bg-transparent z-50 w-[1128px] mt-[31px]">
                  <div className="header flex items-center justify-between text-slate-50  font-Poppins">
                      <div className="logo flex items-center font-bold text-2xl">
                          <img className="mr-[19px]" src="img/logo.png" alt="" />
                          <h1 className="text-[24px] text-slate-950">LAYANG</h1>
                      </div>
                      <ul className="">
                          <li className="space-x-12 text-slate-950">
                              <a className="pt-6 " href="">Produk Kami</a>
                              <a className="pt-6 " href="">Tentang Kami</a>
                              <a className="pt-6 " href="">Artikel</a>
                              <a className="pt-6 " href="">Kontak Kami</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>

          <div className="container flex mt-[111px] ml-[177px]">
              <div className="containerLeft font-Poppins w-[652px]">
                  <h1 className="text-slate-950 text-[40px] font-bold">APLIKASI LAYANG AKAN MEMBANTUMU</h1>
                  <h4 className="text-slate-950 text-[18PX] font-normal">Dengan Layang, melaporkan secara online dan membuat surat pengantar tidak pernah semudah ini. Segera dapatkan aplikasinya.</h4>
                  <div className="button flex my-5 space-x-4 text-center">
                      <button className='px-[32px] py-[14px] rounded-lg'>
                        <img src={Gps} alt="" />
                      </button>
                      <button className='px-[32px] py-[14px] rounded-lg'>
                        <img src={ButtomApp} alt="" />
                      </button>
                  </div>
              </div>
              <div className="containerRight mt-[-80px] z-0 ">
                  <img src={Product} alt="" />
              </div>
          </div>

      </>

    );
}