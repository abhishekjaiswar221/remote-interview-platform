import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative">
          <Loader2 className="text-primary size-10 animate-spin" />
          <div className="bg-primary/20 absolute inset-0 rounded-full blur-xl"></div>
        </div>

        {/* Text */}
        <p className="text-base-content/60 animate-pulse text-sm">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Loader;
