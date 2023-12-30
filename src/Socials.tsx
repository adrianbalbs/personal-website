import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  DiscordLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

export default function Socials() {
  return (
    <div className="flex gap-5 my-5 justify-center">
      <GitHubLogoIcon className="w-10 h-10" />
      <InstagramLogoIcon className="w-10 h-10" />
      <LinkedInLogoIcon className="w-10 h-10" />
      <DiscordLogoIcon className="w-10 h-10" />
    </div>
  );
}
