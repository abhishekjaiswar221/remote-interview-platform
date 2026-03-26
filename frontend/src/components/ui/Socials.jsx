import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { Link } from "react-router";

const Socials = ({ styles }) => {
  const socialIcons = [
    {
      path: "https://github.com/abhishekjaiswar221",
      icon: (
        <IconBrandGithub
          className={`${styles} box-content rounded-lg p-1 hover:bg-zinc-800 hover:text-indigo-400`}
          size={20}
          strokeWidth={1.5}
        />
      ),
      label: "Visit my github profile",
    },
    {
      path: "https://linkedin.com/in/abhishekjai221",
      icon: (
        <IconBrandLinkedin
          className={`${styles} box-content rounded-lg p-1 hover:bg-zinc-800 hover:text-indigo-400`}
          size={20}
          strokeWidth={1.5}
        />
      ),
      label: "Visit my linkedin profile",
    },
    {
      path: "https://x.com/abhishekjai221",
      icon: (
        <IconBrandTwitter
          className={`${styles} box-content rounded-lg p-1 hover:bg-zinc-800 hover:text-indigo-400`}
          size={20}
          strokeWidth={1.5}
        />
      ),
      label: "Visit my twitter profile",
    },
  ];

  return (
    <div className="flex items-center justify-center gap-5">
      {socialIcons.map(({ path, icon, label }, index) => {
        return (
          <Link key={index} href={path} target="_blank" aria-label={label}>
            {icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
