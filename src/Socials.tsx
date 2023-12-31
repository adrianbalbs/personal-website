import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  DiscordLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

export default function Socials() {
  return (
    <div className="flex gap-5 my-5 justify-center">
      <a href="https://github.com/adrianbalbs" target="_blank" rel="noopener noreferrer">
        <GitHubLogoIcon className="w-10 h-10 transition-all hover:scale-110" />
      </a>
      <a
        href="https://www.instagram.com/adrian.balbalosa_/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramLogoIcon className="w-10 h-10 transition-all hover:scale-110" />
      </a>
      <a
        href="https://www.linkedin.com/in/adrianbalbs/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInLogoIcon className="w-10 h-10 transition-all hover:scale-110" />
      </a>
      <a
        href="https://discordapp.com/users/240803619136471040"
        target="_blank"
        rel="noopener noreferrer"
      >
        <DiscordLogoIcon className="w-10 h-10 transition-all hover:scale-110" />
      </a>
    </div>
  );
}
