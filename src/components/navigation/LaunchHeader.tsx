import { NFLHeader } from "./NFLHeader";

export default function LaunchHeader() {
  const links = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/about",
      label: "About",
    },
    {
      link: "/events",
      label: "Events",
    },
    {
      link: "/projects",
      label: "Projects",
    },
    {
      link: "/partners",
      label: "Partners",
    },
    {
      link: "/donate",
      label: "Donate",
    },
  ];

  return (
    <NFLHeader links={links} />
  );
}
