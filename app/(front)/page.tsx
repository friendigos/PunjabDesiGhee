/* eslint-disable @next/next/no-img-element */

import productService from '@/lib/services/productService'
import { Metadata } from 'next'
import productData from '@/data/Product.json'
import TabFeatures from '@/components/Pet/TabFeatures'
import ChooseUs from '@/components/Pet/ChooseUs'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import dynamic from 'next/dynamic'
import testimonialData from '@/data/Testimonial.json'
import MainCarousel1 from '@/components/MainCarousel1'
import Banner2 from '@/components/Pet/Banner2'
import Instagram from '@/components/Pet/Instagram'
import Testimonial from '@/components/Pet/Testimonial'

const Slider = dynamic(() => import('@/components/slider/Slider'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: `Punjab Desi Ghee`,
  description: `Punjab Desi Ghee Love Purity Deliciousness Cow Ghee / Buffalo Ghee Shop Now.`,
}
const cards = [
  {
    imageSrc: 'benefits/1.png',
    heading: 'Boosts Immune System & Prevents Infections.',
  },
  {
    imageSrc: 'benefits/2.png',
    heading: 'Maintains Healthy Heart',
  },
  {
    imageSrc: 'benefits/3.png',
    heading: 'Slow Down Ageing Process',
  },
  {
    imageSrc: 'benefits/4.png',
    heading: 'Promotes Healthy Pregnancy',
  },
  {
    imageSrc: 'benefits/5.png',
    heading: 'Improves Eye Sight/Vision',
  },
  {
    imageSrc: 'benefits/6.png',
    heading: 'Promotes Digestion & Boosts Energy Level',
  },
  {
    imageSrc: 'benefits/7.png',
    heading: 'Lubricates Joints & Reduces Pain',
  },
  {
    imageSrc: 'benefits/8.png',
    heading: 'Promotes Bone Density & Strength',
  },
  {
    imageSrc: 'benefits/9.png',
    heading: 'Cleanses Liver',
  },
  {
    imageSrc: 'benefits/10.png',
    heading: 'Helps in Weight Management',
  },
  // Add more cards as needed
]

interface CarouselItem {
  title: string
  description: string
  image: string
}

const items: CarouselItem[] = [
  {
    title: 'Kiran Yadav',
    description:
      "Nani's Bilona Ghee has become a staple in my kitchen! The aroma and taste remind me of the ghee my grandmother used to make. Knowing it's crafted from Sahiwal cow's milk using the traditional bilona method gives me confidence in its purity and quality.",
    image: '/images/customers/customer1.jpeg',
  },
  {
    title: 'Rahul Jakhar',
    description:
      "I've tried various brands claiming to offer authentic A2 cow ghee, but none match the richness and texture of Nani's Bilona Ghee. It's evident that they prioritize traditional methods and high-quality ingredients. My morning chai wouldn't be the same without it!",
    image: '/images/customers/customer2.jpeg',
  },
  {
    title: 'Ranju jha',
    description:
      "As a health-conscious consumer, finding pure A2 cow ghee was a priority for me. Nani's Bilona Ghee not only meets but exceeds my expectations. Its golden hue and smooth consistency speak volumes about its craftsmanship. I use it in cooking, and it elevates the flavor of every dish!",
    image: '/images/customers/customer3.jpeg',
  },
  {
    title: 'Vishwajeet bhori',
    description:
      "Nani's Bilona Ghee has a distinct taste that sets it apart from other brands. Its nutty flavor and creamy texture add depth to my meals. I appreciate the care they put into sourcing Sahiwal cow's milk and using traditional methods. It's a product I trust for its purity and authenticity.",
    image: '/images/customers/customer4.jpeg',
  },
  {
    title: 'Naveen sihag',
    description:
      "I've been incorporating more Ayurvedic practices into my lifestyle, and Nani's Bilona Ghee fits perfectly into that philosophy. It's not just ghee; it's a holistic experience. I feel nourished knowing I'm consuming a product crafted with mindfulness and reverence for tradition.",
    image: '/images/customers/customer5.jpeg',
  },
  {
    title: 'Neelam Raghav',
    description:
      "Nani's Bilona Ghee has become a kitchen essential for me. Whether I'm sautéing vegetables or drizzling it over warm rotis, its rich flavor enhances every dish. I appreciate their commitment to preserving the purity of A2 cow ghee through the traditional bilona method.",
    image: '/images/customers/customer6.jpeg',
  },
  {
    title: 'Sourav',
    description:
      "Nani's Bilona Ghee has earned a permanent spot in my pantry. Its purity and flavor are unmatched by any other brand I've tried. I love supporting a company that values tradition and quality, and it's evident in every spoonful of this delicious ghee.",
    image: 'images/customers/customer7.jpg',
  },

  // Add more items as needed
]

export default async function Home() {
  const featuredProducts = await productService.getFeatured()
  const latestProducts = await productService.getLatest()
  const latestSocialMedia = await productService.getSocialMedia()
  const latestBanners = await productService.getBanners()
  const latestFaqs = await productService.getFaq()
  const photoGallery = await productService.getPhotos()
  return (
    <>
      {/* <CompleteProcessLoopVideo></CompleteProcessLoopVideo> */}
      {/* <MainCarousel></MainCarousel> */}
      <MainCarousel1></MainCarousel1>
          <TabFeatures data={productData} start={0} limit={10} />
          <img src="https://cdn.shopify.com/s/files/1/0618/5648/1500/files/barcurve.jpg?v=1654088619" style={{width:"80%", margin:"20px auto" }}></img>
          <Banner2 />
            <ChooseUs />
            {/* <MulticolumnList/> */}
            

      

      {/* <h2
        className="mb-4 text-2xl md:text-3xl font-extrabold leading-none tracking-tight text-[#1b2528] md:text-4xl lg:text-5xl text-center py-6"
        id="product-section"
      >
        Latest Products  
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center m-auto mb-10">
        {latestProducts.map((product) => (
          <ProductItem key={product.slug} product={convertDocToObj(product)} />
        ))}
      </div> */}

      <div style={{ backgroundColor: '#fff' }} className="pt-10 pb-10 mt-10">
        <div
          className="container m-auto"
          style={{ backgroundColor: '#fff' }}
        >
          <div className="section-template--17416144912614__16553807110bc9f878-padding">
    <video src="https://cdn.shopify.com/videos/c/o/v/944d90d0e9754d7db43d2f8450c986ed.mp4" autoPlay muted loop></video>
  </div>
  <img src="https://cdn.shopify.com/s/files/1/0618/5648/1500/files/barcurve.jpg?v=1654088619" style={{width:"80%", margin:"auto", backgroundColor:"#ffffff", marginTop:"40px"}}></img>

          <Testimonial data={testimonialData} limit={5} />
        </div>
      </div>
      {/* <img src="https://cdn.shopify.com/s/files/1/0618/5648/1500/files/barcurve.jpg?v=1654088619" style={{width:"80%", margin:"auto"}}></img> */}
      {/* <div className="my-8 m-auto pt-5" style={{ backgroundColor: '#ffffff' }}>
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center text-[#1b2528]">
          Benefits of A2 Cow Ghee
        </h1>
        <Card cards={cards} />
      </div> */}

      {/* <PopularProduct /> */}

      <WhatsAppWidget></WhatsAppWidget>

      {/* <FrequentlyAskedQuestions AllFaq={latestFaqs}></FrequentlyAskedQuestions> */}

      <Instagram />
      <img src="https://cdn.shopify.com/s/files/1/0618/5648/1500/files/barcurve.jpg?v=1654088619" style={{width:"80%", margin:"auto", marginTop:"40px"}}></img>
      

     
    </>
  )
}
