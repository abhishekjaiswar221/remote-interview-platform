import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import FeatureCard from "@/components/ui/FeatureCard";
import FeaturePill from "@/components/ui/FeaturePill";
import { SignInButton } from "@clerk/react";
import { ArrowRightIcon, VideoIcon, ZapIcon } from "lucide-react";

const Home = () => {
  return (
    <>
      <div className="from-base-100 via-base-200 to-base-300 bg-gradient-to-br">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="badge badge-primary badge-lg">
                <ZapIcon className="size-4" />
                Real-time Collaboration
              </div>

              <h1 className="text-5xl leading-tight font-black lg:text-7xl">
                <span className="from-primary via-secondary to-accent bg-gradient-to-r bg-clip-text text-transparent">
                  Code Together,
                </span>
                <br />
                <span className="text-base-content">Learn Together</span>
              </h1>

              <p className="text-base-content/70 max-w-xl text-xl leading-relaxed">
                The ultimate platform for collaborative coding interviews and
                pair programming. Connect face-to-face, code in real-time, and
                ace your technical interviews.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3">
                <FeaturePill text={"Live Video Chat"} />
                <FeaturePill text={"Code Editor"} />
                <FeaturePill text={"Multi-Language"} />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <SignInButton mode="modal">
                  <button className="btn btn-primary btn-lg">
                    Start Coding Now
                    <ArrowRightIcon className="size-5" />
                  </button>
                </SignInButton>

                <button className="btn btn-outline btn-lg">
                  <VideoIcon className="size-5" />
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="stats stats-vertical lg:stats-horizontal bg-base-100 shadow-lg">
                <div className="stat">
                  <div className="stat-value text-primary">10K+</div>
                  <div className="stat-title">Active Users</div>
                </div>
                <div className="stat">
                  <div className="stat-value text-secondary">50K+</div>
                  <div className="stat-title">Sessions</div>
                </div>
                <div className="stat">
                  <div className="stat-value text-accent">99.9%</div>
                  <div className="stat-title">Uptime</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <img
              src="/images/hero.png"
              alt="CodeCollab Platform"
              className="border-base-100 h-auto w-full rounded-3xl border-4 shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Everything You Need to{" "}
              <span className="text-primary font-mono">Succeed</span>
            </h2>
            <p className="text-base-content/70 mx-auto max-w-2xl text-lg">
              Powerful features designed to make your coding interviews seamless
              and productive
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <FeatureCard
              title={"HD Video Call"}
              description={
                "Crystal clear video and audio for seamless communication during interviews"
              }
            />

            {/* Feature 2 */}
            <FeatureCard
              title={"Live Code Editor"}
              description={
                "Collaborate in real-time with syntax highlighting and multiple language support"
              }
            />

            {/* Feature 3 */}
            <FeatureCard
              title={"Easy Collaboration"}
              description={
                "Share your screen, discuss solutions, and learn from each other in real-time"
              }
            />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};
export default Home;
