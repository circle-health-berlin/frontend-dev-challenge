"use client";

import { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CiDroplet } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { LuTestTubeDiagonal } from "react-icons/lu";

const testSelectionSchema = z.object({
    selectedTest: z.string().min(1, { message: "Please select a test." }),
});

type TestSelectionFormInputs = z.infer<typeof testSelectionSchema>;

const tests = [
    {
        id: "standard",
        name: "Standard Blood Test",
        price: "249€",
        subtext: "Includes basic biomarkers for health monitoring.",
    },
    {
        id: "cortisol",
        name: "Cortisol Test",
        price: "149€",
        subtext: "Measures your body's stress response.",
    },
    {
        id: "hormone",
        name: "Hormone Test",
        price: "149€",
        subtext: "Evaluates hormonal balance and ACTH levels.",
    },
    {
        id: "gut-health",
        name: "Gut Health Test",
        price: "149€",
        subtext: "Identifies signs of gut inflammation and issues.",
    },
];

export const InfoSection = () => {
    const [selectedTest, setSelectedTest] = useState<string | null>(null);

    const methods = useForm<TestSelectionFormInputs>({
        resolver: zodResolver(testSelectionSchema),
        defaultValues: { selectedTest: "" },
        mode: "onChange",
    });

    const { handleSubmit, setValue, formState } = methods;
    const { isValid } = formState;

    const onSubmit: SubmitHandler<TestSelectionFormInputs> = (data) => {
        alert(`You selected: ${data.selectedTest}`);
    };

    const handleSelect = (id: string) => {
        setSelectedTest(id);
        setValue("selectedTest", id, { shouldValidate: true });
    };

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="py-8 px-4 max-w-6xl mx-auto flex flex-col md:flex-row gap-8"
            >
                <div className="flex-1">
                    <p className="text-base text-gray-700 mb-6">
                        Wir entscheiden gemeinsam welche spezifischen Blutwerte
                        analysiert werden, je nach individuellen Bedürfnissen
                        und medizinischen Anforderungen.
                    </p>
                    <ul className="space-y-4">
                        <ListItem
                            icon={<CiDroplet />}
                            text="Termin ohne Wartezeit in unserer Praxis"
                        />
                        <ListItem
                            icon={<LuTestTubeDiagonal />}
                            text="Ergebnisse innerhalb von 1-2 Wochen"
                        />
                        <ListItem
                            icon={<FaUsers />}
                            text="Optionale Beratung"
                        />
                    </ul>
                </div>

                <div className="flex-1 bg-gray-50 tab768:p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-bold mb-4">
                        Wähle deinen Bluttest
                    </h2>
                    <div className="space-y-4">
                        {tests.map((test) => (
                            <SelectableTestCard
                                key={test.id}
                                test={test}
                                isSelected={selectedTest === test.id}
                                onSelect={handleSelect}
                            />
                        ))}
                    </div>
                    <button
                        type="submit"
                        disabled={!isValid}
                        className={`mt-6 w-full py-3 rounded-lg ${
                            isValid
                                ? "bg-black text-white hover:bg-gray-800"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                    >
                        Jetzt buchen
                    </button>
                </div>
            </form>
        </FormProvider>
    );
};

interface Test {
    id: string;
    name: string;
    price: string;
    subtext: string;
}

const SelectableTestCard = ({
    test,
    isSelected,
    onSelect,
}: {
    test: Test;
    isSelected: boolean;
    onSelect: (id: string) => void;
}) => {
    return (
        <div
            className={`p-4 border rounded-lg cursor-pointer transition-all ${
                isSelected
                    ? "border-braun border-2 bg-gray-100"
                    : "border-gray-300"
            }`}
            onClick={() => onSelect(test.id)}
        >
            <div className="flex justify-between items-center">
                <div className="text-sm font-bold">{test.name}</div>
                <div className="text-sm text-gray-600 font-semibold">
                    {test.price}
                </div>
            </div>
            <hr className="my-2 border-gray-200" />
            <div className="text-xs text-gray-500">{test.subtext}</div>
        </div>
    );
};

const ListItem = ({ icon, text }: { icon: JSX.Element; text: string }) => (
    <li className="flex items-center gap-4">
        <span className="text-lg text-gray-600">{icon}</span>
        <span className="text-sm">{text}</span>
    </li>
);
