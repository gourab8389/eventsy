import { collaboration } from "@/data";
import ColaborationText from "./ui/ColaborationText";
import ColaborationDataProvider from "./ui/ColaborationDataProvider";

const Colaborations = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-3 min-h-screen relative overflow-hidden pb-20 py-20">
            <ColaborationText />
            <div className="flex flex-row justify-center flex-wrap mt-4 gap-3 w-full px-4 md:px-8 lg:px-16">
                {collaboration.map((image, index) => (
                    <ColaborationDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
            <div className="absolute inset-0 w-full h-full">
                <div className="relative w-full h-full z-[-10] opacity-30 flex items-center justify-center bg-cover">
                    <video
                        className="w-full h-full object-cover"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm"
                    />
                </div>
            </div>
        </section>
    );
};

export default Colaborations;
