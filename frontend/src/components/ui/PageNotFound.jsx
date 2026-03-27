import { Link } from "react-router";
import { HomeIcon, ArrowLeftIcon } from "lucide-react";

const PageNotFound = () => {
  return (
    <div className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
      {/* Glow Background */}
      <div className="bg-primary/20 absolute top-[-100px] left-[-100px] h-[300px] w-[300px] rounded-full blur-3xl"></div>
      <div className="bg-secondary/20 absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="z-10 space-y-6">
        <h1 className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-7xl font-extrabold text-transparent">
          404
        </h1>

        <h2 className="text-2xl font-semibold text-base-content">
          Page Not Found
        </h2>

        <p className="text-base-content/60 max-w-md">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn btn-primary btn-md gap-2">
            <HomeIcon className="size-4" />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline btn-md gap-2"
          >
            <ArrowLeftIcon className="size-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
