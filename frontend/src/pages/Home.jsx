import FeatureCard from "@/components/ui/FeatureCard";
import { SignInButton } from "@clerk/react";
import {
  ArrowRightIcon,
  CodeIcon,
  UsersIcon,
  VideoIcon,
  ZapIcon,
} from "lucide-react";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      {/* Glow Effects */}
      <div className="bg-primary/20 absolute top-[-100px] left-[-100px] h-[300px] w-[300px] rounded-full blur-3xl"></div>
      {/* <div className="bg-secondary/20 absolute right-[-100px] bottom-[-100px] h-[300px] w-[300px] rounded-full blur-3xl"></div> */}

      {/* ================= HERO ================= */}
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-8">
            <div className="badge badge-outline badge-primary badge-lg gap-2">
              <ZapIcon className="size-4" />
              Real-time Collaboration
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight lg:text-7xl">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Code. Collaborate.
              </span>
              <br />
              <span className="text-base-content">
                Crack Interviews Faster.
              </span>
            </h1>

            <p className="text-base-content/70 max-w-xl text-lg leading-relaxed">
              Practice coding interviews in real-time with video, shared editor,
              and seamless collaboration. Built for developers who want to get
              hired faster.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {["Live Video Chat", "Code Editor", "Multi-Language"].map(
                (item) => (
                  <span
                    key={item}
                    className="border-base-content/10 bg-base-100/50 rounded-full border px-4 py-2 text-sm backdrop-blur"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <SignInButton mode="modal">
                <button className="btn btn-primary btn-lg group w-full lg:w-fit">
                  Start Coding Now
                  <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
                </button>
              </SignInButton>

              <button className="btn btn-outline btn-lg w-full lg:w-fit hover:border-white">
                <VideoIcon className="size-5" />
                Watch Demo
              </button>
            </div>

            {/* Social Proof */}
            <p className="text-base-content/60 text-sm">
              Trusted by developers from Google, Amazon & startups
            </p>

            {/* Stats */}
            <div className="flex flex-col w-full md:flex-row lg:w-fit stats bg-base-100/70 backdrop-blur border border-base-content/10 shadow-xl">
              <div className="stat text-center">
                <div className="stat-value text-primary">10K+</div>
                <div className="stat-desc">Active Users</div>
              </div>
              <div className="stat text-center">
                <div className="stat-value text-secondary">50K+</div>
                <div className="stat-desc">Sessions</div>
              </div>
              <div className="stat text-center">
                <div className="stat-value text-success">99.9%</div>
                <div className="stat-desc">Uptime</div>
              </div>
            </div>
          </div>

          {/* Code Preview */}
          <div className="mockup-code text-sm shadow-2xl border border-base-content/10">
            <pre data-prefix="1">
              <code className="text-info"># Two Sum — O(n) approach</code>
            </pre>
            <pre data-prefix="2">
              <code>
                <span className="text-primary">def</span>{" "}
                <span className="text-secondary">two_sum</span>(nums, target):
              </code>
            </pre>
            <pre data-prefix="3">
              <code> seen = {"{}"}</code>
            </pre>
            <pre data-prefix="4">
              <code>
                <span className="text-primary">for</span> i, num{" "}
                <span className="text-primary">in</span> enumerate(nums):
              </code>
            </pre>
            <pre data-prefix="5">
              <code> complement = target - num</code>
            </pre>
            <pre data-prefix="6">
              <code>
                <span className="text-primary">if</span> complement{" "}
                <span className="text-primary">in</span> seen:
              </code>
            </pre>
            <pre data-prefix="7">
              <code>
                <span className="text-primary">return</span> [seen[complement],
                i]
              </code>
            </pre>
            <pre data-prefix="8">
              <code> seen[num] = i</code>
            </pre>
            <pre data-prefix="$" className="text-success">
              <code>Output: [0,1] ✓ Accepted</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto my-10 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent"></div>

      {/* ================= FEATURES ================= */}
      <div className="bg-base-200/60 border-t border-base-content/10">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="mb-12 text-center">
            <div className="badge badge-primary badge-outline mb-4">
              Features
            </div>
            <h2 className="text-4xl font-bold tracking-tight">
              Everything you need to{" "}
              <span className="text-primary font-mono">succeed</span>
            </h2>
            <p className="text-base-content/60 mx-auto mt-3 max-w-xl text-lg">
              Powerful tools designed to make your coding interviews seamless
              and productive
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={<VideoIcon className="size-5 text-info" />}
              title="HD Video Call"
              description="Crystal clear video and audio with low latency."
            />
            <FeatureCard
              icon={<CodeIcon className="size-5 text-primary" />}
              title="Live Code Editor"
              description="Real-time sync with syntax highlighting."
              featured
            />
            <FeatureCard
              icon={<UsersIcon className="size-5 text-warning" />}
              title="Easy Collaboration"
              description="Discuss, share, and solve problems together."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
