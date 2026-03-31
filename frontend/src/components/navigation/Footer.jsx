import { Copyright } from "lucide-react";
import Socials from "../ui/Socials";

const Footer = () => {
  return (
    <footer className="relative border-t border-base-content/10 bg-base-100/70 backdrop-blur-xl">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-primary/40 via-secondary/40 to-accent/40"></div>

      <div className="mx-auto max-w-7xl px-4 py-10">
        {/* ================= TOP ================= */}
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-base-content/70 text-sm tracking-wide">
            Stay Connected
          </p>

          <Socials styles="text-base-content/70" />
        </div>

        {/* ================= MIDDLE ================= */}
        {/* <div className="mt-6 flex justify-center">
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-base-content/60 transition-colors hover:text-primary"
          >
            View Source Code →
          </a>
        </div> */}

        {/* ================= BOTTOM ================= */}
        <div className="mt-8 flex flex-col items-center gap-2 text-sm text-base-content/60">
          <div className="flex items-center gap-1">
            <Copyright size={14} strokeWidth={1.5} />
            <span>{new Date().getFullYear()} All Rights Reserved</span>
          </div>

          <p className="text-sm">
            Made with <span className="text-red-500">❤️</span> by{" "}
            <span className="text-primary font-medium">Abhishek Jaiswar</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
