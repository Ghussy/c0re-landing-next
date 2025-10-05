export default function AnimatedBear() {
  return (
    <div className="relative w-48 h-48 flex justify-center items-center">
      {/* Halo effect */}
      <svg
        className="absolute inset-0 -z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none blur-md opacity-70"
        width="480"
        height="480"
        viewBox="0 0 480 480"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pulse-a" x1="50%" x2="50%" y1="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="76.382%" stopColor="#DBEAFE" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
        </defs>
        <g fillRule="evenodd">
          <path
            className="pulse"
            fill="url(#pulse-a)"
            fillRule="evenodd"
            d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
          />
          <path
            className="pulse pulse-1"
            fill="url(#pulse-a)"
            fillRule="evenodd"
            d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
          />
          <path
            className="pulse pulse-2"
            fill="url(#pulse-a)"
            fillRule="evenodd"
            d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"
          />
        </g>
      </svg>
      {/* Bear video in center */}
      <video
        className="relative w-full h-full drop-shadow-lg animate-float"
        autoPlay
        muted
        loop
        playsInline
        suppressHydrationWarning
      >
        <source src="/video/good-bear_alpha.webm" type="video/webm" />
        <source
          src="/video/good-bear_alpha_hvc1.mov"
          type="video/quicktime; codecs=hvc1"
        />
      </video>
    </div>
  );
}
