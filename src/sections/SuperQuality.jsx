import { shoe4 } from "../assets/images"
import Button from "../components/Button"
const SuperQuality = () => {
  return (
    <section className="max-container max-sm:mt-12 border-2 border-coral-red flex ">
      <div>
        <h2 className="mt-10 font-palanquin text-3xl max-sm:text-[72px] max-sm:leasing-[82] font-bold">We Provide You 
        <span className="text-coral-red xl-bg-white xl:whitespace-nowrap relative z-10 pr-10"> Super</span>
        <br/>
        <span className="text-coral-red inline-block mt-3"> Quality</span> Shoes</h2>
        <p className="leading-7 mt-2 mb-7 sm:max-w-sm font-montserrat text-slate-gray">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation and a touch of elegance.</p>
        <p className="leading-7 mt-2 mb-7 sm:max-w-sm font-montserrat text-slate-gray">Our dedication to detail and excellence ensures your satisfaction.</p>

        <Button label="View Details" iconURL={""} />        
      </div>
      <div className="mx-10 border 2 border-coral-red"> 
        <img src={shoe4} alt="shoe image" width={300} height={300} className=""/>
      </div>

      
    </section>
  )
}

export default SuperQuality