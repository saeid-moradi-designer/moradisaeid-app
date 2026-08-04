export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-black overflow-hidden">
      {/* Background Effects - Static */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 shadow-2xl p-8 md:p-10">
          {/* Avatar */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-2xl overflow-hidden ring-2 ring-violet-500/30 ring-offset-4 ring-offset-black/50">
                <img
                  src="/my-pic.webp"
                  alt="Saeid Moradi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* Name - روش جدید بدون bg-clip-text */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            سعید مرادی
          </h1>
          {/* Title */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <h2 className="text-sm md:text-base text-zinc-400 font-light tracking-wider">
              طراح سایت <span className="text-violet-400">|</span> برنامه‌نویس
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
          {/* Contact Numbers */}
          <div className="space-y-3">
            <a
              href="tel:09190700386"
              className="group flex justify-between items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-violet-500/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-all duration-300">
                <svg
                  className="w-5 h-5 text-violet-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <span
                className="text-zinc-300 group-hover:text-white transition-colors duration-300 font-mono tracking-wider"
                dir="ltr"
              >
                0919 070 0386
              </span>
            </a>

            <a
              href="tel:09921340185"
              className="group flex justify-between items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-300">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <span
                className="text-zinc-300 group-hover:text-white transition-colors duration-300 font-mono tracking-wider"
                dir="ltr"
              >
                0992 134 0185
              </span>
            </a>
          </div>
          {/* Status Badge */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span className="text-xs text-emerald-400 font-medium">
                Available for Work
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <span className="text-xs text-red-500 font-medium">Busy</span>
            </div>
          </div> */
}
