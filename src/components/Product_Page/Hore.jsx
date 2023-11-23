import Gps from '/imgProduct/gps.png?url'
import ButtomApp from '/imgProduct/btnapp.png?url'
import Product from '/imgProduct/product.png?url'


function Hore() {
  return (
    <div>
        <div className="hore flex mt-[111px]">
              <div className="horeLeft font-Poppins w-[652px] ml-[220px]">
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
              <div className="horeRight mt-[-80px] z-0 ">
                  <img src={Product} alt="" />
              </div>
          </div>
    </div>
  )
}

export default Hore
