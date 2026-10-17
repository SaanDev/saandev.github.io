import { socialProfiles } from "../data/content";
import { SocialIcon } from "./Icons";

export function SocialLinks({ className = "" }: { className?: string }) {
  return <div className={`profile-icons ${className}`} aria-label="Professional profiles">
    {socialProfiles.map((profile) => <a key={profile.label} href={profile.url} aria-label={profile.label} title={profile.label} target={profile.label === "Email" ? undefined : "_blank"} rel={profile.label === "Email" ? undefined : "noreferrer"}><SocialIcon label={profile.label} /></a>)}
  </div>;
}
