import { ReactComponent as DiscordIcon } from "@/public/svg/DiscordIcon";
import { ReactComponent as Twitter } from "@/public/svg/TwitterIcon";
import { ReactComponent as MediumIcon } from "@/public/svg/MediumIcon";
import DixtoolIcon from "../public/svg/DixtoolIcon";
export const LeftImage = "../public/left.svg";
export const RightImage = "../public/right.svg";
export const TopImage = "../public/top.svg";

export const HeroSectionCircle = "/public/HeroSectionCircle.svg";

export const FOOTER_CONTENT = [
  {
    parent: "Contact",
    children: [
      { id: 1, label: "Telegram", link: "", tooltipPlacement: "left" },
      {
        id: 2,
        label: "Twitter",
        link: "https://twitter.com/NNTBotOfficial",
        tooltipPlacement: "left",
      },
      {
        id: 3,
        label: "Discord",
        link: "https://discord.gg/PKDP95n6",
        tooltipPlacement: "left",
      },
      { id: 4, label: "Youtube", link: "", tooltipPlacement: "left" },
      { id: 5, label: "Tiktok", link: "", tooltipPlacement: "left" },
      {
        id: 6,
        label: "Medium",
        link: "https://nntbot.medium.com",
        tooltipPlacement: "bottom",
      },
    ],
  },
  {
    parent: "Overview",
    children: [
      { id: 7, label: "About", link: "", tooltipPlacement: "left" },
      {
        id: 8,
        label: "Whitepaper",
        link: "/whitepaper",
        tooltipPlacement: "bottom",
      },
    ],
  },
  {
    parent: "Product",
    children: [
      { id: 9, label: "Dashboard", link: "", tooltipPlacement: "left" },
      { id: 10, label: "Telegram Bot", link: "", tooltipPlacement: "right" },
      {
        id: 11,
        label: "Mobile Application",
        link: "",
        tooltipPlacement: "bottom",
      },
    ],
  },
  {
    parent: "Blog",
    children: [],
  },
];

export const NAV_BAR_CONTENT = [
  { id: 1, content: "navBar.home", pathName: "/" },
  { id: 3, content: "navBar.feature", pathName: "#feature" },
  { id: 4, content: "navBar.tokenomics", pathName: "#tokenomics" },
  { id: 5, content: "navBar.roadmap", pathName: "#roadmap" },
  { id: 2, content: "navBar.dashboard", pathName: "/" },
];

// Larp

export const SOCIAL_MEDIA_ICON = [
  {
    id: 1,
    Icon: Twitter,
  },
  {
    id: 2,
    Icon: DiscordIcon,
  },
  {
    id: 3,
    Icon: MediumIcon,
  },
  {
    id: 4,
    Icon: DixtoolIcon,
  },
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Windows",
    link: "hello",
  },
  {
    id: 2,
    name: "MacOS",
    link: "hello",
  },
  {
    id: 3,
    name: "Linux",
    link: "",
  },
];

export const BUSINESSES = [
  {
    id: 1,
    name: "Features",
    link: "#feature",
    content: "navBar.feature",
  },
  {
    id: 2,
    name: "Tokenomics",
    link: "#tokenomics",
    content: "navBar.tokenomics",
  },
  {
    id: 3,
    name: "Roadmap",
    link: "#roadmap",
    content: "navBar.roadmap",
  },
  {
    id: 4,
    name: "Platforms",
    link: "#platform",
  },
  {
    id: 5,
    name: "Whitepaper",
    link: "/",
  },
];

export const SLIDES_DATA = [
  {
    id: "01",
    title: "Secure Transaction",
    heading: "Secure Crypto Transaction",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum iaculis nisl sed dictum aliquam.",
  },
  {
    id: "02",
    title: "Secure Transaction",
    heading: "Secure Transaction",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum iaculis nisl sed dictum aliquam.",
  },
  {
    id: "03",
    title: "Secure Transaction",
    heading: "Secure Crypto Transaction",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum iaculis nisl sed dictum aliquam.",
  },
  {
    id: "04",
    title: "Secure Transaction",
    heading: "Secure Crypto Transaction",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum iaculis nisl sed dictum aliquam.",
  },
  {
    id: "05",
    title: "Secure Transaction",
    heading: "Secure Crypto Transaction",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum iaculis nisl sed dictum aliquam.",
  },
];
