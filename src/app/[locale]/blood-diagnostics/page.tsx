import { HeroSection } from "./components/HeroSection";
import { InfoSection } from "./components/InfoSection";
import { TestDetails } from "./components/TestDetails";
import { PatientFeedback } from "./components/PatientFeedback";

export default function BloodDiagnosticsPage() {
    return (
        <div className="w-full mx-auto">
            <HeroSection />
            <InfoSection />
            <TestDetails />
            <PatientFeedback />
        </div>
    );
}
