"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumbs = () => {
    const pathname = usePathname();

    // Safety check
    if (!pathname) return null;

    const pathSegments = pathname.split("/").filter((item) => item !== "");

    return (
        <nav aria-label="Breadcrumb" className="flex items-center py-3">
            <ul className="flex items-center list-none p-0 m-0 flex-wrap">
                {/* Home Item */}
                <li className="flex items-center">
                    <Link href="/" className="text-white flex items-center justify-center transition-colors group">
                        <span className="flex items-center justify-center w-5 h-5 mr-2">
                            <i className="fas fa-house text-sm"></i>
                        </span>
                        <span className="font-medium leading-none mb-[1px]">Home</span>
                    </Link>
                </li>

                {/* Dynamic Items */}
                {pathSegments.map((segment, index) => {
                    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathSegments.length - 1;
                    // const isDisabled = segment === "services";

                    // Convert slug to readable text
                    const label = decodeURIComponent(segment)
                        .replace(/-/g, " ")
                        .replace(/\b\w/g, (c) => c.toUpperCase());

                    return (
                        <li key={href} className="flex items-center leading-none">
                            {/* Separator */}
                            <i className="fas fa-chevron-right mx-1 text-gray-400 text-[10px]"></i>

                            {isLast ? (
                                <span className="text-white tracking-wide" aria-current="page">
                                    {label}
                                </span>
                            ) : (
                                <Link
                                    href={href}
                                    className="hover:text-blue-500 transition-colors font-medium text-white font-medium"
                                >
                                    {label}
                                </Link>
                            )}
                            {/* {isLast || isDisabled ? (
                                <span
                                    className={`tracking-wide ${
                                        isLast ? "text-white" : "text-gray-400 cursor-default"
                                    }`}
                                    aria-current={isLast ? "page" : undefined}
                                >
                                    {label}
                                </span>
                            ) : (
                                <Link
                                    href={href}
                                    className="hover:text-blue-500 transition-colors text-white font-medium"
                                >
                                    {label}
                                </Link>
                            )} */}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;
