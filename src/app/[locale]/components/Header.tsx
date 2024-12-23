"use client";

import React, { useState, useEffect } from "react";
import { FaGlobe, FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";

const phoneNumber = "(030) 99 28 38 22";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);

    const handleMenuToggle = () => setMenuOpen((prev) => !prev);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const updateHeaderHeight = () => {
            const header = document.querySelector("header");
            if (header) {
                setHeaderHeight(header.offsetHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", updateHeaderHeight);

        updateHeaderHeight();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", updateHeaderHeight);
        };
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 bg-white border-b transition-all duration-300`}
            >
                <div
                    className={`hidden md:flex justify-between items-center px-4 text-sm bg-gray-100 transition-all ${
                        isScrolled ? "py-1" : "py-2"
                    }`}
                >
                    <div className="flex gap-4 items-center">
                        <a
                            href="#"
                            className="flex items-center gap-1 hover:underline"
                        >
                            <FaGlobe className="text-gray-600" />
                            DE
                        </a>
                        <span className="text-gray-300">|</span>
                        <a
                            href="tel:03099283822"
                            className="flex items-center gap-1 hover:underline"
                        >
                            <FaPhoneAlt className="text-gray-600" />
                            {phoneNumber}
                        </a>
                    </div>

                    <div className="flex gap-4 items-center">
                        {["Geschenkgutscheine", "B2B", "Karriere", "Hilfe"].map(
                            (item, index) => (
                                <React.Fragment key={item}>
                                    {index > 0 && (
                                        <span className="text-gray-300">|</span>
                                    )}
                                    <a href="#" className="hover:underline">
                                        {item}
                                    </a>
                                </React.Fragment>
                            )
                        )}
                    </div>
                </div>

                <div
                    className={`bg-white px-4 flex justify-between items-center md:justify-center relative transition-all ${
                        isScrolled ? "py-2" : "py-4"
                    }`}
                >
                    <a
                        href="#"
                        className="flex items-center gap-1 hover:underline md:hidden"
                    >
                        <FaGlobe className="text-gray-600" />
                        DE
                    </a>

                    <img
                        src="/logo.png"
                        alt="Circle Health Logo"
                        className={`h-10 object-contain transition-all ${
                            isScrolled ? "h-8" : "h-10"
                        }`}
                    />

                    <button className="hidden md:flex absolute right-4 items-center gap-2 border border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition">
                        <FaCalendarAlt className="text-lg" />
                        <span>Termin buchen</span>
                    </button>

                    <button
                        className="absolute right-4 md:hidden text-black"
                        onClick={handleMenuToggle}
                    >
                        ☰
                    </button>
                </div>

                <hr className="border-gray-300" />

                <nav
                    className={`${
                        menuOpen ? "block" : "hidden"
                    } md:flex justify-center gap-8 px-4 py-2 bg-gray-50 text-sm`}
                >
                    {[
                        "Infusionen",
                        "Beratung",
                        "Behandlungen",
                        "Diagnostik",
                        "Praxis",
                    ].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="hover:underline block"
                        >
                            {item}
                        </a>
                    ))}

                    {menuOpen && (
                        <a
                            href="#"
                            className="block mt-4 px-4 py-2 text-center border border-black rounded-lg md:hidden hover:bg-black hover:text-white"
                        >
                            Termin buchen
                        </a>
                    )}
                </nav>

                <div className="px-4 py-2 bg-yellow-100 text-center text-braun text-sm font-medium">
                    Circle Health Geschenkgutscheine{" "}
                    <a href="#" className="text-braun underline">
                        Jetzt entdecken
                    </a>
                </div>
            </header>

            <div style={{ height: `${headerHeight}px` }} />

            <section className="relative bg-gray-50 rounded-tl-lg rounded-tr-lg">
                <div className="px-4 py-8">
                    <p className="text-base text-gray-700">
                        Wir entscheiden gemeinsam welche spezifischen Blutwerte
                        analysiert werden, je nach individuellen Bedürfnissen
                        und medizinischen Anforderungen.
                    </p>
                </div>
            </section>
        </>
    );
};
