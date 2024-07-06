import './globals.css'
import '@/styles/styles.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'
import DrawerButton from '@/components/DrawerButton'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/header/Header1'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Punjab Desi Ghee`,

  description: `Unleash the Power of Pure Ghee: Punjab Desi Ghee Offers Cow & Buffalo Ghee Nationwide`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="drawer bg-white">
            <DrawerButton />
            <div className="drawer-content">
              <div className="min-h-screen w-full flex flex-col">
                <Header />
                <main className="flex-grow p-2 pt-4">{children}</main>

                <footer className="bg-[#006a4e]">
                <div className="banner__media media">
      <img src="//vediko.in/cdn/shop/files/footer.jpg?v=1690885603&amp;width=375 375w,//vediko.in/cdn/shop/files/footer.jpg?v=1690885603&amp;width=550 550w,//vediko.in/cdn/shop/files/footer.jpg?v=1690885603&amp;width=750 750w,//vediko.in/cdn/shop/files/footer.jpg?v=1690885603&amp;width=1100 1100w,//vediko.in/cdn/shop/files/footer.jpg?v=1690885603&amp;width=1500 1500w,//vediko.in/cdn/shop/files/footer.jpg?v=1690885603&amp;width=1780 1780w,//vediko.in/cdn/shop/files/footer.jpg?v=1690885603 1913w" sizes="100vw" loading="lazy" alt="" width="1913" height="606.0"/>
    </div>
                  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                      <div>
                        <div className="mb-6 md:mb-0">
                          <a href="/" className="flex items-center">
                            <span className="self-center text-base md:text-2xl font-semibold whitespace-nowrap text-white">
                              Punjab Desi Ghee
                            </span>
                          </a>
                        </div>
                        <div className="mb-5 md:mb-0">
                          <h2 className="text-gray-300 text-xs md:text-base" style={{width:"60%"}}>
                          Building No.: 101, D5, Road No. 20 Nearby Landmark: Marol MIDC, Andheri East Mumbai District: Mumbai Suburban - 400093
                          </h2>
                          <h2 className="text-gray-300 text-xs md:text-base">
                            Tel: +91 8208589302
                          </h2>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-4">
                        <div>
                          <h2 className="mb-2 md:mb-6 text-xs md:text-sm font-semibold text-[#fbbf24] uppercase">
                            Services
                          </h2>
                          <ul className="text-white font-medium">
                            <li className="mb-1  md:mb-4">
                              <a
                                href="/products"
                                className="hover:underline text-xs md:text-sm"
                              >
                                Our Products
                              </a>
                            </li>
                            <li className="mb-1 md:mb-4">
                              <a
                                href="/our-story"
                                className="hover:underline text-xs md:text-sm"
                              >
                                About Us
                              </a>
                            </li>
                            <li>
                              <a
                                href="/contact-us"
                                className="hover:underline text-xs md:text-sm"
                              >
                                Contact Us
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h2 className="mb-2 md:mb-6 text-xs  md:text-sm font-semibold text-[#fbbf24] uppercase">
                            Follow us
                          </h2>
                          <ul className="text-white font-medium">
                            <li className="mb-1 md:mb-4">
                              <a
                                href="https://www.instagram.com/punjab_desi_ghee/"
                                className="hover:underline text-xs md:text-sm"
                              >
                                Instagram
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://m.facebook.com/100067118401703/"
                                className="hover:underline text-xs md:text-sm"
                              >
                                Facebook
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://amzn.in/d/00H0y67B"
                                className="hover:underline text-xs md:text-sm"
                              >
                                Amazon
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://dl.flipkart.com/s/po9i9NuuuN"
                                className="hover:underline text-xs md:text-sm"
                              >
                                Flipkart
                              </a>
                            </li>
                            {/* <li>
                              <a
                                href="https://www.facebook.com/NaniBilonaGhee/"
                                className="hover:underline text-xs md:text-sm"
                              >
                                BigBasket
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.facebook.com/NaniBilonaGhee/"
                                className="hover:underline text-xs md:text-sm"
                              >
                                JioMart
                              </a>
                            </li> */}
                            <li>
                              <a
                                href="https://indmrt.com/gBMb"
                                className="hover:underline text-xs md:text-sm"
                              >
                                IndiaMart
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h2 className="mb-2 md:mb-6 text-xs md:text-sm font-semibold text-[#fbbf24] uppercase">
                            Legal
                          </h2>
                          <ul className="text-white  font-medium">
                            <li className="mb-1 md:mb-4">
                              <a
                                href="/privacy-policy"
                                className="hover:underline text-xs md:text-sm"
                              >
                                Privacy Policy
                              </a>
                            </li>
                            <li className="mb-1 md:mb-4">
                              <a
                                href="/terms-of-service"
                                className="hover:underline text-xs md:text-sm"
                              >
                                Terms of Service
                              </a>
                            </li>
                            <li className="mb-1 md:mb-4">
                              <a
                                href="/ship-policy"
                                className="hover:underline text-xs md:text-sm"
                              >
                                Shipping Policy
                              </a>
                            </li>
                            <li>
                              <a
                                href="/refund-policy"
                                className="hover:underline text-xs md:text-sm"
                              >
                                Refund Policy
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* <div>
                          <h2 className="mb-2 md:mb-6 text-sm font-semibold text-[#fbbf24] uppercase">
                            Need Help ?
                          </h2>
                          <ul className="text-white font-medium">
                            <li className="md-2 md:mb-4">
                              <Link
                                href="/contact-us"
                                className=" py-1 px-1 md:py-2 md:px-3 sm:ms-0 text-xs md:text-sm font-small text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#fbbf24] focus:z-10 focus:ring-4 focus:ring-gray-100 "
                              >
                                Contact Us
                              </Link>
                            </li>
                            <li>
                              <a
                                href="https://wa.me/917303290341"
                                className="hover:underline text-xs md:text-sm"
                              >
                                WhatsApp
                              </a>
                            </li>
                          </ul>
                        </div> */}
                      </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2024{' '}
                        <a href="" className="hover:underline">
                          Punjab Desi Ghee
                        </a>
                        . All Rights Reserved.
                      </span>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
            <div className="drawer-side z-10">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <Sidebar />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
