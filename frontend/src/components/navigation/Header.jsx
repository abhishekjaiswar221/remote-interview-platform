import { SignInButton, UserButton, useUser } from "@clerk/react";
import { ArrowRightIcon, SparklesIcon } from "lucide-react";
import { Link } from "react-router";

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <nav className="bg-base-100/70 border-base-content/10 sticky top-0 z-50 border-b backdrop-blur-xl">
      {/* Subtle glow line */}
      <div className="from-primary/40 via-secondary/40 to-accent/40 absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r"></div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* ================= LOGO ================= */}
        <Link
          to="/"
          className="group flex items-center gap-3 transition-all duration-300 hover:scale-[1.03]"
        >
          {/* Logo Icon */}
          <div className="relative flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-secondary to-accent shadow-lg">
            {/* Glow */}
            <div className="bg-primary/40 absolute inset-0 rounded-xl blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

            <SparklesIcon className="relative size-5 text-white" />
          </div>

          {/* Text */}
          <div className="flex flex-col leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text font-mono text-lg font-extrabold tracking-wide text-transparent">
              InterviewX
            </span>
            <span className="text-base-content/50 text-[11px] font-medium">
              Code Together
            </span>
          </div>
        </Link>

        {/* ================= RIGHT ================= */}
        <div className="flex items-center gap-3">
          {/* Optional Nav Links (future ready) */}
          <div className="hidden items-center gap-6 text-sm text-base-content/70 md:flex">
            <Link className="hover:text-primary transition-colors" to="#">
              Features
            </Link>
            <Link className="hover:text-primary transition-colors" to="#">
              Pricing
            </Link>
            <Link className="hover:text-primary transition-colors" to="#">
              Docs
            </Link>
          </div>

          {/* Auth */}
          {isSignedIn ? (
            <div className="flex items-center gap-3">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-10 h-10 ring-2 ring-primary/20",
                  },
                }}
              />
            </div>
          ) : (
            <SignInButton mode="modal">
              <button className="group relative flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                {/* Glow hover */}
                <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

                <span className="relative">Get Started</span>
                <ArrowRightIcon className="relative size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
