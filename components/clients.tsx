import Particles from "./particles";

const roles = [
  "Students",
  "Developers",
  "Designers",
  "Writers",
  "Founders",
  "Researchers",
];

export default function Clients() {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Particles animation */}
        <div className="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-6">
          <Particles className="absolute inset-0 -z-10" quantity={5} />
        </div>

        <div className="py-12 md:py-16">
          <div className="text-center mb-6">
            <div className="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-blue-500 to-blue-200">
              Built for
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_li]:mx-3">
                {roles.map((role, index) => (
                  <li key={`a-${index}`}>
                    <span className="inline-flex items-center rounded-full border border-slate-700/60 bg-slate-800/40 px-4 py-1.5 text-slate-300 hover:text-white hover:border-slate-600 transition">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 ring-4 ring-blue-500/20 mr-2"></span>
                      {role}
                    </span>
                  </li>
                ))}
              </ul>
              <ul
                className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_li]:mx-3"
                aria-hidden="true"
              >
                {roles.map((role, index) => (
                  <li key={`b-${index}`}>
                    <span className="inline-flex items-center rounded-full border border-slate-700/60 bg-slate-800/40 px-4 py-1.5 text-slate-300 hover:text-white hover:border-slate-600 transition">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 ring-4 ring-blue-500/20 mr-2"></span>
                      {role}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
