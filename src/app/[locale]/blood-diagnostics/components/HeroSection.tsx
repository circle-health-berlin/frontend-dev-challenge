export const HeroSection = () => {
    return (
        <section className="relative bg-gray-100">
            <img
                src="/hero-image.jpg"
                alt="Blutdiagnostik"
                className="w-full h-48 object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white">
                    Blutdiagnostik
                </h1>
            </div>
        </section>
    );
};
