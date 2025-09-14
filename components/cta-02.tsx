import Particles from "./particles";

export default function Cta02() {
  return (
    <section className="relative">
      {/* Particles animation */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24">
        <Particles
          className="absolute inset-0 -z-10"
          quantity={6}
          staticity={30}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative px-8 py-12 md:py-20 border-t border-b [border-image:linear-gradient(to_right,transparent,var(--color-slate-800),transparent)1]">
          {/* Blurred shape */}
          <div
            className="absolute top-0 -mt-24 left-1/2 -translate-x-1/2 ml-24 blur-2xl opacity-70 pointer-events-none -z-10"
            aria-hidden="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
              <defs>
                <linearGradient
                  id="bs4-a"
                  x1="19.609%"
                  x2="50%"
                  y1="14.544%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3B82F6"></stop>
                  <stop
                    offset="100%"
                    stopColor="#3B82F6"
                    stopOpacity="0"
                  ></stop>
                </linearGradient>
              </defs>
              <path
                fill="url(#bs4-a)"
                fillRule="evenodd"
                d="m0 0 461 369-284 58z"
                transform="matrix(1 0 0 -1 0 427)"
              ></path>
            </svg>
          </div>
          {/* Content */}
          <div className="max-w-3xl mx-auto text-center">
            <div>
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-blue-200 pb-3">
                Build better focus habits
              </div>
            </div>
            <h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Take control of your time
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Schedule distraction‑free sessions that temporarily block selected
              apps and websites. Quick‑launch approved tools, add optional
              binaural beats, and earn in‑app rewards as you stay in the zone.
            </p>
            <form className="inline-flex max-w-sm w-full">
              <div className="w-full flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-none">
                <input
                  type="email"
                  className="form-input py-1.5 w-full mb-3 sm:mb-0 sm:mr-2 rounded-full bg-slate-800/30 border-slate-700"
                  placeholder="Your email"
                  aria-label="Your email"
                />
                <button
                  className="btn text-slate-900 bg-linear-to-r from-white/80 via-white to-white/80 hover:bg-white transition duration-150 ease-in-out group"
                  type="submit"
                >
                  Subscribe
                  <span className="tracking-normal text-blue-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
