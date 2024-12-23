import React from "react";

interface TestDetail {
    pretext: string;
    title: string;
    bullets: string[];
    isHighlighted?: boolean;
}

const testDetailsData: TestDetail[] = [
    {
        pretext: "Standard Blood Test",
        title: "Comprehensive health markers",
        bullets: [
            "Detects nutritional deficiencies",
            "Monitors cholesterol and blood sugar levels",
            "Evaluates kidney and liver function",
        ],
        isHighlighted: true,
    },
    {
        pretext: "Cortisol Test",
        title: "Stress and hormone evaluation",
        bullets: [
            "Assesses stress response",
            "Evaluates adrenal fatigue",
            "Supports sleep disturbance analysis",
        ],
    },
    {
        pretext: "Hormone Test",
        title: "Balance and fertility insights",
        bullets: [
            "Evaluates hormonal imbalances",
            "Supports fertility assessments",
            "Identifies causes of fatigue",
        ],
    },
    {
        pretext: "Gut Health Test",
        title: "Digestive health analysis",
        bullets: [
            "Assesses gut microbiome",
            "Detects markers for IBS and SIBO",
            "Provides actionable insights",
        ],
    },
];

const TestDetailCard: React.FC<TestDetail> = ({
    pretext,
    title,
    bullets,
    isHighlighted,
}) => (
    <div
        className={`flex flex-col md:flex-row gap-6 p-4 rounded-lg mb-6 tab768:mx-4 min-h-[320px] ${
            isHighlighted ? "bg-black text-white" : "bg-gray-100 text-gray-800"
        }`}
    >
        <div className="flex-1 flex flex-col justify-between">
            <div>
                <p
                    className={`text-sm ${
                        isHighlighted ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                    {pretext}
                </p>
                <h3
                    className={`text-2xl font-bold mt-2 ${
                        isHighlighted ? "text-white" : "text-black"
                    }`}
                >
                    {title}
                </h3>
            </div>
            <button
                className={`mt-4 text-sm flex items-center gap-2 ${
                    isHighlighted
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-black"
                }`}
            >
                <span>Mehr erfahren</span>
                <span className="text-lg">+</span>
            </button>
        </div>
        <div className="flex-1">
            <ul className="space-y-2">
                {bullets.map((bullet, index) => (
                    <li key={index} className="text-sm">
                        {bullet}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export const TestDetails: React.FC = () => (
    <section className="py-8 px-4 max-w-6xl mx-auto">
        {testDetailsData.map((detail, index) => (
            <TestDetailCard key={index} {...detail} />
        ))}
    </section>
);
