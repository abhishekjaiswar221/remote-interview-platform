import { SignInButton } from "@clerk/react";
import { ArrowRightIcon, SparklesIcon } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav className="bg-base-100/80 border-primary/20 sticky top-0 z-50 border-b shadow-lg backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          {/* Logo */}
          <Link
            to={"/"}
            className="flex items-center gap-3 transition-transform duration-200 hover:scale-105"
          >
            <div className="from-primary via-secondary to-accent flex size-10 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg">
              <SparklesIcon className="size-6 text-white" />
            </div>

            <div className="flex flex-col">
              <span className="from-primary via-secondary to-accent bg-gradient-to-r bg-clip-text font-mono text-xl font-black tracking-wider text-transparent">
                InterviewX
              </span>
              <span className="text-base-content/60 -mt-1 text-xs font-medium">
                Code Together
              </span>
            </div>
          </Link>

          {/* Auth Btn */}
          <SignInButton mode="modal">
            <button className="group from-primary to-secondary flex items-center gap-2 rounded-xl bg-gradient-to-r px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl">
              <span>Get Started</span>
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </SignInButton>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
