import { Home, Info, Anchor, Image, Mail } from "lucide-react";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import FeaturesPage from "./pages/Features";
import GalleryPage from "./pages/Gallery";
import ContactPage from "./pages/Contact";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <HomePage />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <AboutPage />,
  },
  {
    title: "Features",
    to: "/features",
    icon: <Anchor className="h-4 w-4" />,
    page: <FeaturesPage />,
  },
  {
    title: "Gallery",
    to: "/gallery",
    icon: <Image className="h-4 w-4" />,
    page: <GalleryPage />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Mail className="h-4 w-4" />,
    page: <ContactPage />,
  },
];