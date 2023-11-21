import Navbar from './components/Navbar'
import Body from './components/Body'
import Cards from './components/Cards'


export default function App() {
  return (
    <>
    <Navbar />
    <Body />
    <Cards 
    title='Tools for every stack'
    content='Pembuatan surat pengantar sekarang dapat dilakukan dengan beberapa ketukan jari.  Masukkan informasi, dan surat pengantar akan segera di proses.'
    />
    </>
  )
}