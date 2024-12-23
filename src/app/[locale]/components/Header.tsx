"use client";

import React, { useState } from "react";
import { FaGlobe, FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";

const phoneNumber = "(030) 99 28 38 22";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => setMenuOpen((prev) => !prev);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white border-b">
            <div className="hidden md:flex justify-between items-center px-4 py-2 text-sm bg-gray-100">
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

            <div className="bg-white px-4 py-4 flex justify-center items-center relative">
                <img
                    src="/logo.png"
                    alt="Circle Health Logo"
                    className="h-10 object-contain"
                />
                <button className="absolute right-4 hidden md:flex items-center gap-2 border border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition">
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
                    <a key={item} href="#" className="hover:underline block">
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
    );
};
