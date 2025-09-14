import Image from "next/image";
import Particles from "./particles";
import Illustration from "@/public/images/page-illustration.svg";
import AnimatedBear from "./animated-bear";

export default function HeroAbout() {
  return (
    <section className="relative">
      {/* Radial gradient */}
      <div
        className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square"
        aria-hidden="true"
      >
        <div className="absolute inset-0 translate-z-0 bg-blue-500 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute w-64 h-64 translate-z-0 bg-blue-400 rounded-full blur-[80px] opacity-70"></div>
      </div>

      {/* Particles animation */}
      <Particles className="absolute inset-0 h-96 -z-10" quantity={10} />

      {/* Illustration */}
      <div
        className="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          width={1440}
          height={427}
          alt="Page Illustration"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-16 md:pt-52 md:pb-32">
          {/* Hero content */}

          {/* Animated Bear with Rings */}
          <div
            className="mx-auto relative flex items-center justify-center w-48 h-48 mb-4"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            <Particles className="absolute inset-0 -z-10" quantity={10} />
            <AnimatedBear />
          </div>

          <div className="text-center">
            <div className="mb-6" data-aos="fade-down">
              <div className="inline-flex relative before:absolute before:inset-0 before:bg-blue-500 before:blur-md">
                <a
                  className="btn-sm py-0.5 text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(var(--color-blue-500),var(--color-blue-500))_padding-box,linear-gradient(var(--color-blue-500),var(--color-blue-200)_75%,transparent_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/50 before:rounded-full before:pointer-events-none shadow-sm"
                  href="#0"
                >
                  <span className="relative inline-flex items-center">
                    Join the beta{" "}
                    <span className="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <h1
              className="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4"
              data-aos="fade-down"
            >
              Building focus without friction
            </h1>
            <p
              className="text-lg text-slate-300 mb-8"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              c0re helps you schedule distraction‑free sessions that temporarily
              block selected apps and websites. Quickly launch approved tools
              via deep links, and stay motivated with optional in‑app rewards —
              unlockable pets for time spent in focus mode.
            </p>

            <div
              className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <div>
                <a
                  className="btn text-slate-900 bg-linear-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group"
                  href="#0"
                >
                  Get Updates{" "}
                  <span className="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </a>
              </div>
              <div>
                <a
                  className="btn text-slate-200 hover:text-white bg-slate-900/25 hover:bg-slate-900/30 w-full transition duration-150 ease-in-out"
                  href="#0"
                >
                  <svg
                    className="shrink-0 fill-slate-300 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                  </svg>
                  <span>Turn on binaural beats</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
