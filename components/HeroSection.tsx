import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="flex justify-center gap-5 container items-center py-10 bg-[url('/assets/bg-arbic.png')] bg-opacity-20 bg-center bg-no-repeat">
      <div className="text-white text-center mx-auto">
        <h1 className="font-elMessiri font-bold text-5xl">
          Välkommen till <br /> StuderaKoranen!
        </h1>
        <p className="font-semibold text-xl">-Studera Koranen online</p>
        <p className="w-96 text-justify font-medium py-5 text-gray-300">
          StuderaKoranen är en unik satsning vars syfte är att främja
          koranundervisning i Sverige. Vi erbjuder inspelade kurser,
          kursmaterial, koran-app, rådgivning och mycket mer!
        </p>
        <div className="text-black flex justify-center gap-8 mt-5">
          <button className="flex items-center justify-center py-1.5 shadow-lg shadow-gray-900 gap-3 bg-white rounded-lg w-32">
            <svg
              width="15"
              height="18"
              viewBox="0 0 15 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 12.6V0.9C15 0.3375 14.6786 0 14.1429 0H3.21429C1.39286 0 0 1.4625 0 3.375V14.625C0 16.5375 1.39286 18 3.21429 18H14.1429C14.5714 18 15 17.6625 15 17.1V16.5375C15 16.3125 14.8929 16.0875 14.6786 15.8625C14.5714 15.3 14.5714 13.725 14.6786 13.275C14.8929 13.1625 15 12.9375 15 12.6ZM10.0808 5.12648C10.1009 5.08395 10.1397 5.0625 10.1786 5.0625C10.2174 5.0625 10.2563 5.08395 10.2763 5.12648L10.6507 5.92277L11.4877 6.05039C11.5771 6.0641 11.6129 6.17941 11.5483 6.24586L10.9426 6.86566L11.0856 7.7407C11.0977 7.81488 11.0417 7.875 10.9781 7.875C10.9614 7.875 10.944 7.87078 10.9272 7.86164L10.1786 7.44855L9.42991 7.86164C9.41317 7.87078 9.39576 7.875 9.37902 7.875C9.3154 7.875 9.25949 7.81488 9.27154 7.7407L9.41451 6.86566L8.80882 6.24586C8.74386 6.17941 8.77969 6.0641 8.86942 6.05039L9.70614 5.92277L10.0808 5.12648ZM8.14252 2.70035C8.60022 2.70035 9.05525 2.78789 9.49453 2.96086C9.52774 2.96088 9.56053 2.96856 9.5906 2.98335C9.62067 2.99814 9.64728 3.01968 9.66855 3.04646C9.68982 3.07323 9.70524 3.10457 9.71371 3.13829C9.72218 3.172 9.7235 3.20725 9.71757 3.24156C9.71164 3.27586 9.69862 3.30838 9.67941 3.33682C9.6602 3.36526 9.63528 3.38893 9.60641 3.40615C9.57754 3.42337 9.54542 3.43372 9.51232 3.43648C9.47921 3.43924 9.44594 3.43433 9.41484 3.42211C9.39241 3.42211 9.31138 3.41473 9.27656 3.41473C7.52511 3.41473 6.10045 4.91062 6.10045 6.74965C6.10045 8.58832 7.52511 10.0846 9.27656 10.0846C9.31105 10.0846 9.39308 10.0772 9.41484 10.0772C9.54643 10.0772 9.64252 10.1876 9.64252 10.3155C9.64252 10.4203 9.57757 10.5093 9.48783 10.5413C9.05022 10.7125 8.59754 10.7993 8.14219 10.7993C6.01574 10.7996 4.28571 8.98277 4.28571 6.75C4.28571 4.51687 6.01574 2.70035 8.14252 2.70035ZM12.75 15.75H3.21429C2.57143 15.75 2.14286 15.3 2.14286 14.625C2.14286 13.95 2.67857 13.5 3.21429 13.5H12.75V15.75Z"
                fill="black"
              />
            </svg>
            Koranen
          </button>
          <button className="flex items-center justify-center py-1.5 shadow-lg shadow-gray-900 gap-3 bg-white rounded-lg w-32">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.30106 9.5H9.45159V7.91667H6.30106V9.5ZM6.30106 7.125H12.6021V5.54167H6.30106V7.125ZM6.30106 4.75H12.6021V3.16667H6.30106V4.75ZM4.7258 12.6667C4.2926 12.6667 3.92189 12.5118 3.61366 12.202C3.30491 11.8916 3.15053 11.5187 3.15053 11.0833V1.58333C3.15053 1.14792 3.30491 0.775042 3.61366 0.464708C3.92189 0.154903 4.2926 0 4.7258 0H14.1774C14.6106 0 14.9816 0.154903 15.2903 0.464708C15.5985 0.775042 15.7527 1.14792 15.7527 1.58333V11.0833C15.7527 11.5187 15.5985 11.8916 15.2903 12.202C14.9816 12.5118 14.6106 12.6667 14.1774 12.6667H4.7258ZM1.57527 15.8333C1.14207 15.8333 0.771355 15.6784 0.463128 15.3686C0.154376 15.0583 0 14.6854 0 14.25V3.16667H1.57527V14.25H12.6021V15.8333H1.57527Z"
                fill="black"
                fillOpacity="0.9"
              />
            </svg>
            Kurser
          </button>
        </div>
      </div>
      <Image
        width={300}
        height={10}
        src="/assets/logo-lg.png"
        alt=""
        className="absolute md:static opacity-30 md:opacity-100 inline-block px-16 py-10 md:px-0 mx-auto"
      />
    </section>
  );
};

export default HeroSection;
