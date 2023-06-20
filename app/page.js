import Image from "next/image";
import { Fraunces, Montserrat } from "next/font/google";

const Fraunces700 = Fraunces({ weight: "700", subsets: ["latin"] });
const Montserrat500 = Montserrat({ weight: "500", subsets: ["latin"] });
const Montserrat700 = Montserrat({ weight: "700", subsets: ["latin"] });

export default function Home() {
  return (
    <div className="m-auto">
      <div className="w-[300px] md:w-[500px] bg-White rounded-b-xl flex flex-col md:flex-row ">
        <Image
          className="md:hidden rounded-t-lg"
          src="/images/image-product-mobile.jpg"
          width={343}
          height={240}
          alt="parfum"
        ></Image>
        <Image
          className="hidden md:block md:rounded-l-lg"
          src="/images/image-product-desktop.jpg"
          width={343}
          height={240}
          alt="parfum"
        ></Image>

        <div className="md:space-y-3 flex flex-col gap-3 p-4 bg-White md:rounded-r-lg min-w-[290px]">
          <h3
            className={
              Montserrat500.className +
              " tracking-[5px] text-xs text-Dark_grayish_blue"
            }
          >
            PERFUME
          </h3>
          <h1
            className={
              Fraunces700.className +
              " text-Very_dark_blue text-2xl md:text-4xl leading-6"
            }
          >
            Gabrielle Essence Eau De Parfum
          </h1>{" "}
          <p className={Montserrat500.className + " text-Dark_grayish_blue"}>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div>
            <span
              className={Montserrat700 + " text-Dark_cyan text-3xl font-bold"}
            >
              $149.99
            </span>
            <span className=" text-xs align-top pl-4 text-Dark_grayish_blue line-through">
              $169.99
            </span>
          </div>
          <button className="hover:bg-Very_dark_blue transition-all bg-Dark_cyan flex items-center justify-center gap-4 h-12 rounded-lg text-White">
            <Image
              src="/images/icon-cart.svg"
              width={15}
              height={16}
              alt="cart icon"
              className=""
            ></Image>
            <span> Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
