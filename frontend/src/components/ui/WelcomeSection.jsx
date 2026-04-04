import { useUser } from "@clerk/react";
import { ArrowRightIcon, SparklesIcon, ZapIcon } from "lucide-react";

const WelcomeSection = ({ onCreateSession }) => {
  const { user } = useUser();

  return (
    <div className="relative overflow-hidden">
      {/* Background Glow Effects */}
      {/* <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/20 blur-3xl rounded-full -z-10" /> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="flex items-start sm:items-center gap-3 mb-5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <SparklesIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Welcome back, {user?.firstName || "there"}
              </h1>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-base-content/70 sm:ml-14 leading-relaxed">
              Ready to level up your coding skills? Start a new session and
              challenge yourself with real-world problems.
            </p>
          </div>

          {/* Create Session Section */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-4">
            <button
              onClick={onCreateSession}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-semibold sm:font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-95 w-full sm:w-auto"
            >
              <div className="flex items-center justify-center gap-3">
                <ZapIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Create Session</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Glow Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <p className="text-sm text-base-content/50">
              Start solving in seconds ⚡
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
