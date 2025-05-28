import fondo from "@assets/home.svg";
import fondoMobile from "@assets/home-mob.svg";
import versace from '@assets/image/marcas/versace.svg';
import zara from '@assets/image/marcas/zara.svg';
import gucci from '@assets/image/marcas/gucci.svg';
import prada from '@assets/image/marcas/prada.svg';
import calvin from '@assets/image/marcas/calvin.svg';
import Button from "@components/Button";
import '@shared/style/home.css';
import { Link } from "react-router-dom";

const brandLogos = [
    { src: versace, alt: 'versace' },
    { src: zara, alt: 'zara' },
    { src: gucci, alt: 'gucci' },
    { src: prada, alt: 'prada' },
    { src: calvin, alt: 'calvin klein' },
];

function HomePage() {
    return (
        <div className="w-full">
            <div className="relative w-full flex items-center justify-center min-h-screen">
                <div className="flex-1 relative min-h-screen">
                    <picture className="absolute inset-0 -z-10 w-full h-full">
                        <source media="(max-width: 640px)" srcSet={fondoMobile} />
                        <img
                            className="img-fondo w-full h-full object-cover -z-10"
                            src={fondo}
                            alt="home" />
                    </picture>
                </div>

                <div className="z-10 text-center text-black max-w-3xl">
                    <div className="content-title">
                        <p className="uppercase font-bold text-4xl sm:text-[36px] md:text-6xl lg:text-[64px] leading-tight mb-4">Find Clothes That Matches your style</p>
                    </div>
                    <div className="content-description">
                        <p className="text-[13px] sm:text-[14px] lg:text-[16px]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    </div>
                    <div className="container-button">
                        <Link to="/OnSale">
                            <Button size="lg" variant="primary" label="Shop Now"> </Button>
                        </Link>
                    </div>

                    <div className="content-number grid sm:grid grid-cols-3 lg:grid-cols-3 gap-4">
                        <div className="numbers">
                            <p className="sm:text-[24px] lg:text-[40px] font-bold">200+</p>
                            <span>International Brands</span>
                        </div>
                        <div className="numbers">
                            <p className="sm:text-[24px] lg:text-[40px] font-bold">2,000+</p>
                            <span>High-Quality Products</span>
                        </div>
                        <div className="numbers lg:col-span-1 sm:col-span-1 col-span-2 sm:col-start-2 text-center">
                            <p className="sm:text-[24px] lg:text-[40px] font-bold">30,000+</p>
                            <span>Happy Customers</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full content-brands h-full object-cover relative grid grid-cols-5 gap-5">
                {brandLogos.map((logo, index) => (
                    <img key={index} className="m-auto" src={logo.src} alt={logo.alt} width={166.48} />
                ))}
            </div>
        </div>
    )
}

export default HomePage;