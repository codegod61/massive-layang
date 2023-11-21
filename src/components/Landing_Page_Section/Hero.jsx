import CardMenu from '../Cards/CardMenu'

export default function Hero(){
    return(
        <>
        <div className="container py-[96px] px-[156px] font-Poppins">
            <span className='text-[#444BD3] font-semibold text-[14px] mt-[8px]'>MENGAPA HARUS LAYANG</span>
            <h1 className='text-[#121127] text-[32px] font-bold mb-[40px]'>Beberapa keunggulan LAYANG yang akan membuat anda selalu ingin menggunakannya</h1>
            <div className="card flex gap-[26px]">
                <CardMenu menu = 'Cepat' menuDesc = 'Layang terbukti cepat memproses laporan sehingga akan menghemat waktu anda' />
                <CardMenu menu = 'Aman' menuDesc = 'Keamana data anda menjadi prioritas utama kami dalam melayani kebutuhan anda' />
                <CardMenu menu = 'Praktis' menuDesc = 'Layang dapat diakses di smartphone anda sehingga pempermudah anda' />
                <CardMenu menu = 'Simpel' menuDesc = 'Layang tidak akan membuat kamu kebingungan saat melalukan pelaporan ' />
            </div>
        </div>
        </>
    )
}