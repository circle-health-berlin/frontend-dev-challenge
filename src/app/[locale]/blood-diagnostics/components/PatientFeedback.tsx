"use client";

import { useState, useEffect } from "react";

const feedbacks = [
    {
        name: "Sophia Lie",
        text: "Immediately after getting your treatment, you begin to benefit from increased hydration and the effects of the nutrients come shortly after.",
        rating: 5,
    },
    {
        name: "John Doe",
        text: "I noticed a significant improvement in my energy levels and overall well-being after the blood diagnostics.",
        rating: 4,
    },
    {
        name: "Jane Smith",
        text: "The optional consultation provided excellent insights into my health metrics and areas to improve.",
        rating: 5,
    },
    {
        name: "John Doe",
        text: "I noticed a significant improvement in my energy levels and overall well-being after the blood diagnostics.",
        rating: 4,
    },
    {
        name: "Jane Smith",
        text: "The optional consultation provided excellent insights into my health metrics and areas to improve.",
        rating: 5,
    },
    {
        name: "Michael Brown",
        text: "Quick results and very professional staff. Highly recommended!",
        rating: 5,
    },
    {
        name: "Jane Smith",
        text: "The optional consultation provided excellent insights into my health metrics and areas to improve.",
        rating: 5,
    },
    {
        name: "Michael Brown",
        text: "Quick results and very professional staff. Highly recommended!",
        rating: 5,
    },
];

const FeedbackCard = ({
    name,
    text,
    rating,
}: {
    name: string;
    text: string;
    rating: number;
}) => (
    <div className="min-w-[100%] md:min-w-[25%] p-6 border border-gray-200 rounded-lg shadow-sm bg-white mx-2">
        <h3 className="font-bold text-sm text-gray-800">{name}</h3>
        <hr className="my-2 border-gray-300" />
        <p className="text-xs text-gray-600 mb-4">{text}</p>
        <div className="flex items-center gap-1">
            <span className="text-yellow-500 text-sm">
                {"★".repeat(rating)}
            </span>
            <span className="text-gray-400 text-sm">
                {"☆".repeat(5 - rating)}
            </span>
        </div>
    </div>
);

export const PatientFeedback = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(4);

    useEffect(() => {
        const updateItemsPerSlide = () => {
            setItemsPerSlide(window.innerWidth < 640 ? 1 : 4);
        };

        updateItemsPerSlide();
        window.addEventListener("resize", updateItemsPerSlide);
        return () => window.removeEventListener("resize", updateItemsPerSlide);
    }, []);

    const totalSlides = Math.ceil(feedbacks.length / itemsPerSlide);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <section className="py-8 px-4 bg-[#f9f4ef] relative">
            <div className="mb-6">
                <p className="text-sm text-gray-600">Patient feedback</p>
                <h2 className="text-2xl font-bold text-gray-800">
                    What others are saying.
                </h2>
            </div>

            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={handlePrev}
                    className="bg-gray-200 text-gray-600 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-300"
                >
                    {"<"}
                </button>
                <button
                    onClick={handleNext}
                    className="bg-gray-200 text-gray-600 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-300"
                >
                    {">"}
                </button>
            </div>

            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-300"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                >
                    {feedbacks.map((feedback, index) => (
                        <div
                            key={index}
                            style={{
                                minWidth: `${100 / itemsPerSlide}%`,
                            }}
                        >
                            <FeedbackCard {...feedback} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
