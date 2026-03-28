import { useRouteError, Link } from "react-router";
import { AlertTriangle, HomeIcon, RefreshCcw } from "lucide-react";

const ErrorPage = () => {
  const error = useRouteError();

  console.error(error);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
      {/* Glow Background */}
      {/* <div className="bg-red-500/20 absolute top-[-100px] left-[-100px] h-[300px] w-[300px] rounded-full blur-3xl"></div>
      <div className="bg-orange-500/20 absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] rounded-full blur-3xl"></div> */}

      <div className="z-10 space-y-6">
        {/* Icon */}
        <div className="flex justify-center">
          <AlertTriangle className="size-12 text-red-500" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-base-content">
          Something went wrong
        </h1>

        {/* Message */}
        <p className="text-base-content/60 max-w-md">
          {error?.statusText ||
            error?.message ||
            "An unexpected error occurred. Please try again."}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn btn-primary gap-2">
            <HomeIcon className="size-4" />
            Go Home
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="btn btn-outline gap-2"
          >
            <RefreshCcw className="size-4" />
            Retry
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
