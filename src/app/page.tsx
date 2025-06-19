import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <main >
       
        <div id="hero"><Hero /></div>
        <div id="services"><Services /></div>
        <div id="blog"><Blog /></div>
        <div id="footer"><Footer /></div>
        
      </main>
    </>
  )
}