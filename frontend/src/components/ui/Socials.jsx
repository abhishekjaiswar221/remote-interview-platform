import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

const Socials = ({ styles }) => {
  const socialIcons = [
    {
      path: "https://github.com/abhishekjaiswar221",
      icon: IconBrandGithub,
      label: "GitHub",
    },
    {
      path: "https://linkedin.com/in/abhishekjai221",
      icon: IconBrandLinkedin,
      label: "LinkedIn",
    },
    {
      path: "https://twitter.com/abhishekjai221",
      icon: IconBrandTwitter,
      label: "Twitter",
    },
  ];

  return (
    <div className="flex items-center justify-center gap-5">
      {socialIcons.map(({ path, icon: Icon, label }, index) => (
        <a
          key={index}
          href={path}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group relative"
        >
          {/* Glow background */}
          <span className="absolute inset-0 rounded-lg bg-primary/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"></span>

          {/* Icon */}
          <Icon
            className={`${styles} relative box-content rounded-lg p-2 transition-all duration-300 group-hover:scale-110 group-hover:text-primary`}
            size={22}
            strokeWidth={1.5}
          />
        </a>
      ))}
    </div>
  );
};

export default Socials;
