import Image from "next/image";
import Team from "@/public/images/team.jpg";

export default function Story() {
  return (
    <section className="relative">
      {/* Blurred shape */}
      <div
        className="absolute top-0 -mt-32 left-1/2 -translate-x-1/2 ml-10 blur-2xl opacity-70 pointer-events-none -z-10"
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
              <stop offset="100%" stopColor="#1E40AF" stopOpacity="0"></stop>
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

      <div className="px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="pb-12 md:pb-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
                How c0re began
              </h2>
            </div>

            <div className="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
              <figure className="min-w-[240px]">
                <Image
                  className="sticky top-8 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[4deg]"
                  src={Team}
                  width={420}
                  height={280}
                  alt="Team"
                />
              </figure>
              <div className="max-w-[548px] mx-auto">
                <div className="text-slate-400 space-y-6">
                  <p>
                    We came together over a shared frustration with constant
                    distractions derailing our deep work. As creators and
                    builders, we needed a solution that could block distractions
                    without feeling restrictive—something that actually helped
                    us stay in flow.
                  </p>
                  <p>
                    c0re is a product that helps you focus by temporarily
                    blocking selected apps and websites during scheduled
                    sessions.{" "}
                    <strong className="text-slate-50 font-medium">
                      The idea that we can use technology to reclaim our
                      attention
                    </strong>
                    , while making approved tools instantly accessible through
                    AI-powered deep links.
                  </p>
                  <p>
                    You can cultivate focus plants through session streaks,
                    harvest glow berries, and nurture your core animal as you
                    build sustainable focus habits. We want to create a system
                    that{" "}
                    <strong className="text-slate-50 font-medium">
                      makes deep work rewarding and habitual
                    </strong>
                    , while keeping the tools you need just one tap away.
                  </p>
                  <p>
                    The focus crisis isn't just a personal productivity
                    problem—it's reshaping how we work and live. Studies show
                    that it takes an average of 23 minutes to regain focus after
                    an interruption, yet most knowledge workers are interrupted
                    every{" "}
                    <a
                      className="text-blue-500 font-medium hover:underline"
                      href="#0"
                    >
                      11 minutes
                    </a>{" "}
                    during their workday.
                  </p>
                  <p>
                    We believe that with the right tools and incentives, anyone
                    can develop the superpower of sustained focus. Our approach
                    combines proven behavioral psychology with modern technology
                    to make deep work not just possible, but genuinely rewarding
                    and fun.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
