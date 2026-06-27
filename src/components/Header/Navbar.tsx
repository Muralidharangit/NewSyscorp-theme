"use client";

import * as React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
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

import {
    Menu,
    X,
    ChevronDown,
    Palette,
    Smartphone,
    Briefcase,
    Building2,
    ShoppingCart,
    BarChart3,
    Server,
    Wrench,
    Code,
    TrendingUp,
    Search,
    Network,
    MapPin,
    Link2,
    Target,
    PenTool,
    Hash,
} from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isActive = (href: string) => pathname === href;

    const navTextStyles = "text-[16px] font-semibold text-gray-700";

    const linkBase = `${navTextStyles} relative py-2 transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#00A3FF] after:transition-all after:duration-300 hover:text-[#00A3FF] hover:after:w-full`;

    const activeLink = "text-[#00A3FF] after:w-full";

    const seoServices = [
        { name: "Custom Website Design", href: "/services/custom-website-design", icon: Palette },
        { name: "Responsive UI/UX", href: "/services/responsive-ui-ux", icon: Smartphone },
        { name: "Business Websites", href: "/services/business-websites", icon: Briefcase },
        { name: "Corporate Website", href: "/services/corporate-website", icon: Building2 },
        { name: "E-Commerce", href: "/services/e-commerce", icon: ShoppingCart },
        { name: "Web Applications And Dashboards", href: "/services/web-applications-dashboards", icon: BarChart3 },
        { name: "Hosting And Domain", href: "/services/hosting-domain", icon: Server },
        { name: "Website Maintenance and Support", href: "/services/website-maintenance-support", icon: Wrench },
    ];

    const generalServices = [
        { name: "SEO Audit", href: "/services/seo-audit", icon: Code },
        { name: "Keyword Research", href: "/services/keyword-research", icon: Search },
        { name: "On-Page SEO", href: "/services/on-page-seo", icon: TrendingUp },
        { name: "Off-Page SEO", href: "/services/off-page-seo", icon: Network },
        { name: "Technical SEO", href: "/services/technical-seo", icon: Code },
        { name: "Local SEO", href: "/services/local-seo", icon: MapPin },
        { name: "Link Building", href: "/services/link-building", icon: Link2 },
        { name: "Performance Tracking and Reporting", href: "/services/performance-tracking-reporting", icon: BarChart3 },
    ];

    const digitalMarketingServices = [
        { name: "Brand-Focused Marketing Strategy", href: "/services/brand-focused-marketing-strategy", icon: Target },
        { name: "High-Impact Performance Ads", href: "/services/high-impact-performance-ads", icon: BarChart3 },
        { name: "Premium Social Media Management", href: "/services/premium-social-media-management", icon: Hash },
        { name: "Content & Creative Marketing", href: "/services/content-creative-marketing", icon: PenTool },
        { name: "Instagram Ads", href: "/services/instagram-ads", icon: Smartphone },
        { name: "Facebook Ads", href: "/services/facebook-ads", icon: Target },
        { name: "SEO & Organic Growth", href: "/services/seo-organic-growth", icon: Search },
    ];

    const [menuValue, setMenuValue] = React.useState("");

    const closeMenu = () => {
        setOpen(false);
        setMobileServicesOpen(false);
        setMenuValue("");
    };

    return (
        <nav
            className="sticky top-0 z-50 transition-all duration-300"
            style={{
                background: scrolled ? "rgba(255,255,255,0.92)" : "#ffffff",
                backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
                boxShadow: scrolled ? "0 1px 40px rgba(0,0,0,0.07), 0 1px 0 rgba(0,0,0,0.04)" : "0 1px 0 rgba(0,0,0,0.06)",
            }}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* LOGO */}
                    <Link href="/">
                        <img src="/images/logo/logo.webp" alt="Syscorp Logo" className="h-10 w-auto object-contain" />
                    </Link>

                    {/* DESKTOP MENU */}
                    <ul className="hidden lg:flex items-center gap-8">
                        <li>
                            <Link href="/" className={`${linkBase} ${isActive("/") ? activeLink : ""}`}>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href="/about" className={`${linkBase} ${isActive("/about") ? activeLink : ""}`}>
                                Company
                            </Link>
                        </li>

                        {/* SERVICES MENU */}
                        <li className="flex items-center">
                            <NavigationMenu value={menuValue} onValueChange={setMenuValue}>
                                <NavigationMenuList>
                                    <NavigationMenuItem value="services">
                                        <NavigationMenuTrigger
                                            className={`
                        ${navTextStyles}
                        !bg-transparent !p-0 !h-auto 
                        hover:!bg-transparent hover:text-[#00A3FF] 
                        focus:!bg-transparent focus:text-[#00A3FF]
                        data-[state=open]:!bg-transparent data-[state=open]:text-[#00A3FF]
                        data-[active]:!bg-transparent
                        transition-colors
                        group
                      `}
                                        >
                                            Services
                                        </NavigationMenuTrigger>

                                        <NavigationMenuContent>
                                            <div className="w-[900px] bg-white rounded-lg shadow-xl ring-1 ring-black/5">
                                                <div className="grid grid-cols-12">
                                                    {/* Website Services */}
                                                    <div className="col-span-4 p-8 border-r border-gray-50">
                                                        <h4 className="text-[12px] font-bold tracking-wider text-gray-900 uppercase mb-6">
                                                            Website Services
                                                        </h4>

                                                        <div className="space-y-6">
                                                            {seoServices.map((s) => {
                                                                const Icon = s.icon;
                                                                return (
                                                                    <NavigationMenuLink asChild key={s.href}>
                                                                        <Link
                                                                            href={s.href}
                                                                            className="group flex items-center gap-4 transition-colors mb-2"
                                                                        >
                                                                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-50 transition-colors group-hover:bg-[#00a3ff] text-[#00a3ff] group-hover:text-white">
                                                                                <Icon size={18} />
                                                                            </div>

                                                                            <p className="text-sm font-bold text-gray-900 group-hover:text-[#00a3ff]">
                                                                                {s.name}
                                                                            </p>
                                                                        </Link>
                                                                    </NavigationMenuLink>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>

                                                    {/* SEO Services */}
                                                    <div className="col-span-4 p-8 border-r border-gray-50">
                                                        <h4 className="text-[12px] font-bold tracking-wider text-gray-900 uppercase mb-6">
                                                            SEO Services
                                                        </h4>

                                                        <div className="space-y-6">
                                                            {generalServices.map((s) => {
                                                                const Icon = s.icon;
                                                                return (
                                                                    <NavigationMenuLink asChild key={s.href}>
                                                                        <Link
                                                                            href={s.href}
                                                                            className="group flex items-center gap-4 transition-colors mb-2"
                                                                        >
                                                                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-50 transition-colors group-hover:bg-[#00a3ff] text-[#00a3ff] group-hover:text-white">
                                                                                <Icon size={18} />
                                                                            </div>

                                                                            <p className="text-sm font-bold text-gray-900 group-hover:text-[#00a3ff]">
                                                                                {s.name}
                                                                            </p>
                                                                        </Link>
                                                                    </NavigationMenuLink>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>

                                                    {/* Digital Marketing */}
                                                    <div className="col-span-4 p-8">
                                                        <h4 className="text-[12px] font-bold tracking-wider text-gray-900 uppercase mb-6">
                                                            Digital Marketing
                                                        </h4>

                                                        <div className="space-y-6">
                                                            {digitalMarketingServices.map((s) => {
                                                                const Icon = s.icon;
                                                                return (
                                                                    <NavigationMenuLink asChild key={s.href}>
                                                                        <Link
                                                                            href={s.href}
                                                                            className="group flex items-center gap-4 transition-colors mb-2"
                                                                        >
                                                                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-50 transition-colors group-hover:bg-[#00a3ff] text-[#00a3ff] group-hover:text-white">
                                                                                <Icon size={18} />
                                                                            </div>

                                                                            <p className="text-sm font-bold text-gray-900 group-hover:text-[#00a3ff]">
                                                                                {s.name}
                                                                            </p>
                                                                        </Link>
                                                                    </NavigationMenuLink>
                                                                );
                                                            })}
                                                        </div>

                                                        <div className="mt-6">
                                                            <Link
                                                                href="/services"
                                                                onClick={() => setMenuValue("")}
                                                                className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-[#00a3ff] text-white text-sm font-semibold hover:bg-blue-700 transition"
                                                            >
                                                                View All Services
                                                            </Link>
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
                            <Link href="/career" className={`${linkBase} ${isActive("/career") ? activeLink : ""}`}>
                                Career
                            </Link>
                        </li>

                        <li>
                            <Link href="/blog" className={`${linkBase} ${isActive("/blog") ? activeLink : ""}`}>
                                Blog
                            </Link>
                        </li>

                        <li>
                            <Link href="/contact" className={`${linkBase} ${isActive("/contact") ? activeLink : ""}`}>
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* CTA */}
                    <div className="hidden lg:block">
                        <Button href="/contact">Request a Quote</Button>
                    </div>

                    {/* MOBILE TOGGLE */}
                    <button
                        className="lg:hidden text-2xl"
                        onClick={() => setOpen(true)}
                        aria-label="Open navigation menu"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </div>

            {/* MOBILE OVERLAY */}
            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            />

            {/* MOBILE SIDEBAR */}
            <div
                className={`fixed top-0 right-0 h-screen w-[300px] bg-white z-[70] transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between p-6">
                    <img src="/images/logo/logo.webp" className="h-8 w-auto object-contain" alt="Syscorp Logo" />
                    <button
                        onClick={() => setOpen(false)}
                        aria-label="Close menu"
                        className="p-2 rounded-full hover:bg-gray-100 transition"
                    >
                        <X size={22} />
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

                        {/* Mobile Accordion */}
                        <li>
                            <button
                                className="flex items-center justify-between w-full"
                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            >
                                Services
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`transition-all duration-300 overflow-hidden ${mobileServicesOpen ? "max-h-[2000px] mt-4" : "max-h-0"
                                    }`}
                            >
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li className="font-bold pt-2">Website Services</li>

                                    {seoServices.map((s) => {
                                        const Icon = s.icon;
                                        return (
                                            <li key={s.href}>
                                                <Link
                                                    href={s.href}
                                                    onClick={() => setOpen(false)}
                                                    className="flex gap-2 items-center"
                                                >
                                                    <span className="flex items-center justify-center w-5 h-5 text-blue-500">
                                                        <Icon size={14} />
                                                    </span>
                                                    {s.name}
                                                </Link>
                                            </li>
                                        );
                                    })}

                                    <li className="font-bold pt-4">SEO Service</li>

                                    {generalServices.map((s) => {
                                        const Icon = s.icon;
                                        return (
                                            <li key={s.href}>
                                                <Link
                                                    href={s.href}
                                                    onClick={() => setOpen(false)}
                                                    className="flex gap-2 items-center"
                                                >
                                                    <span className="flex items-center justify-center w-5 h-5 text-blue-500">
                                                        <Icon size={14} />
                                                    </span>
                                                    {s.name}
                                                </Link>
                                            </li>
                                        );
                                    })}

                                    <li className="font-bold pt-4">Digital Marketing</li>

                                    {digitalMarketingServices.map((s) => {
                                        const Icon = s.icon;
                                        return (
                                            <li key={s.href}>
                                                <Link
                                                    href={s.href}
                                                    onClick={() => setOpen(false)}
                                                    className="flex gap-2 items-center"
                                                >
                                                    <span className="flex items-center justify-center w-5 h-5 text-blue-500">
                                                        <Icon size={14} />
                                                    </span>
                                                    {s.name}
                                                </Link>
                                            </li>
                                        );
                                    })}

                                    <Link
                                        href="/services"
                                        onClick={closeMenu}
                                        className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-[#00a3ff] text-white text-sm font-semibold hover:bg-blue-700 transition mt-4"
                                    >
                                        View All Services
                                    </Link>
                                </ul>
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
