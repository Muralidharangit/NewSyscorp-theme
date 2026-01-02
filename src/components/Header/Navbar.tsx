"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const linkBase =
    "relative py-2 transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full";
  const activeLink = "text-blue-600 after:w-full";

  const seoServices = [
    { name: "Enterprise SEO", href: "/enterprise-seo", icon: "fa-building" },
    { name: "Local SEO", href: "/local-seo", icon: "fa-location-dot" },
    { name: "Global SEO", href: "/global-seo", icon: "fa-globe" },
    { name: "E-commerce SEO", href: "/ecommerce-seo", icon: "fa-cart-shopping" },
    { name: "YouTube SEO", href: "/youtube-seo", icon: "fa-play" },
    { name: "Google Business", href: "/google-my-bussiness", icon: "fa-map" },
    { name: "Content Writing", href: "/content-writting", icon: "fa-pen-nib" },
    { name: "SEO Reseller", href: "/seo-reseller", icon: "fa-handshake" },
  ];

  const generalServices = [
    {
      name: "Web Development",
      href: "/best-website-development-company-in-chennai",
      icon: "fa-code",
    },
    { name: "Web Maintenance", href: "/website-maintenance", icon: "fa-screwdriver-wrench" },
    { name: "SEO Optimization", href: "/seo-service", icon: "fa-arrow-trend-up" },
    {
      name: "Search Marketing",
      href: "/search-engine-marketing",
      icon: "fa-magnifying-glass-chart",
    },
    { name: "Social Media", href: "/socialmedia-marketing", icon: "fa-share-nodes" },
    { name: "Logo Design", href: "/logo-design-service", icon: "fa-palette" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link href="/">
            <img src="/images/logo/logo.webp" alt="Logo" className="main-logo" />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-8 font-semibold text-gray-700">
            <li>
              <Link href="/" className={`${linkBase} ${isActive("/") ? activeLink : ""}`}>
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className={`${linkBase} ${isActive("/about") ? activeLink : ""}`}
              >
                Company
              </Link>
            </li>

            {/* ✅ SHADCN SERVICES MENU */}
           {/* ✅ SHADCN SERVICES MENU */}
<li className="relative">
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="bg-transparent px-0 font-semibold text-gray-700 hover:text-blue-600">
          Services
        </NavigationMenuTrigger>

        <NavigationMenuContent className="absolute left-1/2 -translate-x-1/2 left-50%">
          {/* Mega menu container */}
          <div className="w-[900px] bg-white overflow-hidden rounded-lg shadow-xl ring-1 ring-black/5">
            <div className="grid grid-cols-12">
              {/* Column 1: SEO Services */}
              <div className="col-span-4 p-8 border-r border-gray-50">
                <h4 className="text-[12px] font-bold tracking-wider text-gray-900 uppercase mb-6">
                  SEO Services
                </h4>
                <div className="space-y-6">
                  {seoServices.slice(0, 4).map((s) => (
                    <NavigationMenuLink asChild key={s.href}>
                      <Link
                        href={s.href}
                        className="group flex items-start gap-4 transition-colors"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-50  transition-colors group-hover:bg-indigo-600 group-hover:text-white  text-[#005cd8]">
                          <i className={`fas ${s.icon} text-sm`} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900 group-hover:text-indigo-600">
                            {s.name}
                          </p>
                          <p className="text-[13px] text-gray-500 line-clamp-1">
                            Expert {s.name.toLowerCase()} solutions.
                          </p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </div>

              {/* Column 2: Digital Services */}
              <div className="col-span-4 p-8 border-r border-gray-50">
                <h4 className="text-[12px] font-bold tracking-wider text-gray-900 uppercase mb-6">
                  Digital Services
                </h4>
                <div className="space-y-6">
                  {generalServices.slice(0, 4).map((s) => (
                    <NavigationMenuLink asChild key={s.href}>
                      <Link
                        href={s.href}
                        className="group flex items-start gap-4 transition-colors"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-50  transition-colors group-hover:bg-indigo-600 group-hover:text-white  text-[#005cd8]">
                          <i className={`fas ${s.icon} text-sm`} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900 group-hover:text-indigo-600">
                            {s.name}
                          </p>
                          <p className="text-[13px] text-gray-500 line-clamp-1">
                            Optimize your {s.name.toLowerCase()} presence.
                          </p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </div>

              {/* Column 3: Video Tutorials */}
              <div className="col-span-4 bg-slate-50/50 p-8">
                <h4 className="text-[12px] font-bold tracking-wider text-gray-900 uppercase mb-6">
                  Video Tutorials
                </h4>
                <div className="space-y-8">
                  {/* Tutorial cards... same as your code */}
                </div>
              </div>
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</li>

            <li>
              <Link
                href="/blog"
                className={`${linkBase} ${isActive("/blog") ? activeLink : ""}`}
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={`${linkBase} ${isActive("/contact") ? activeLink : ""}`}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button href="/contact">Request a Quote</Button>
          </div>

          {/* MOBILE TOGGLE */}
          <button className="lg:hidden text-2xl" onClick={() => setOpen(true)}>
            <i className="fas fa-bars" />
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 z-[60] ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* MOBILE SIDEBAR (UNCHANGED) */}
      {/* ⬇️ Your existing mobile code stays exactly the same ⬇️ */}
      {/* (No changes needed here) */}
        <div
                className={`fixed top-0 right-0 h-screen w-[300px] bg-white z-[70] transform transition-transform duration-300 ${
                    open ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between p-6">
                    <img src="/images/logo/logo.webp" className="h-8" />
                    <button
                        onClick={() => setOpen(false)}
                        className="p-2 rounded-full hover:bg-gray-100 transition"
                        aria-label="Close menu"
                    >
                        <i className="fa-solid fa-xmark text-xl"></i>
                    </button>
                </div>

                <div className="flex flex-col h-[calc(100vh-80px)] overflow-y-auto p-6">
                    <ul className="flex flex-col gap-5 font-semibold">
                        <li>
                            <Link
                                href="/"
                                onClick={() => setOpen(false)}
                                className={isActive("/") ? "text-blue-600" : ""}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                onClick={() => setOpen(false)}
                                className={isActive("/about") ? "text-blue-600" : ""}
                            >
                                Company
                            </Link>
                        </li>

                        {/* Mobile Services Accordion */}
                        <li>
                            <button
                                className="flex items-center justify-between w-full"
                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                aria-expanded={mobileServicesOpen}
                            >
                                Services
                                <i
                                    className={`fas fa-chevron-down text-xs transition-transform ${
                                        mobileServicesOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            <div
                                className={`transition-all duration-300 overflow-hidden ${
                                    mobileServicesOpen ? "max-h-[2000px] mt-4" : "max-h-0"
                                }`}
                            >
                                <div className="overflow-y-auto max-h-[calc(100vh-80px)]">
                                    <ul className="pl-4 space-y-3 text-sm text-gray-600">
                                        <li className="font-bold text-blue-600 flex items-center gap-2">
                                            <i className="fas fa-search-plus"></i> SEO
                                        </li>
                                        {seoServices.map((s) => (
                                            <li key={s.href}>
                                                <Link
                                                    href={s.href}
                                                    onClick={() => setOpen(false)}
                                                    className="flex gap-2"
                                                >
                                                    <i className={`fas ${s.icon} text-blue-500 text-xs`} />
                                                    {s.name}
                                                </Link>
                                            </li>
                                        ))}

                                        <li className="font-bold text-blue-600 pt-4 flex items-center gap-2">
                                            <i className="fas fa-th-large"></i> Digital
                                        </li>
                                        {generalServices.map((s) => (
                                            <li key={s.href}>
                                                <Link
                                                    href={s.href}
                                                    onClick={() => setOpen(false)}
                                                    className="flex gap-2"
                                                >
                                                    <i className={`fas ${s.icon} text-blue-500 text-xs`} />
                                                    {s.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li>
                            <Link
                                href="/blog"
                                onClick={() => setOpen(false)}
                                className={isActive("/blog") ? "text-blue-600" : ""}
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                onClick={() => setOpen(false)}
                                className={isActive("/contact") ? "text-blue-600" : ""}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <div className="mt-auto pt-8">
                        <Button href="/contact" className="w-full">
                            Request a Quote
                        </Button>
                    </div>
                </div>
            </div>
    </nav>
  );
}
