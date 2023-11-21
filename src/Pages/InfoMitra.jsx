import ButtonArticle from '../components/Buttons/ButtonArticle';

export default function InfoMitra(){
    return(
        <>
            <div className="info font-Poppins flex justify-center mt-[160px]">
                <div className="">
                    <span className="text-[#444BD3] text-[14px] font-semibold mt-[20px]">LAYANG MELAYANI DESA ANDA</span>
                    <h1 className="w-[463px] text-[40px] font-bold text-[#27005D] my-[20px]">Beberapa desa telah bergabung bersama kami!!</h1>
                    <p className="w-[456px] text-[16px] opacity-50 mb-[32px]">
                    DocuSign uses Dlex to track key metrics to improve customer experience, resulting in more conversions, onboarding completions, and paid upgrades.
                    </p>
                    <ButtonArticle />
                </div>
                <img className='ml-[113px]' src="img/InfoMitra.png" alt="" />
            </div>
            <div className="flex ml-[175px] justify-center border-b border-t border-gray-300 w-[1150px] mt-[72px] py-[37px]">
                <div className="logoKota flex ">
                    <img src="img/GrupKota.png" alt="" />
                    {/* <img src="img/Desa-2.png" alt="" />
                    <img src="img/Desa-3.png" alt="" />
                    <img src="img/Desa-4.png" alt="" />
                    <img src="img/Desa-5.png" alt="" />
                    <img src="img/Desa-6.png" alt="" /> */}
                </div>
            </div>   
         </> 
    );
}