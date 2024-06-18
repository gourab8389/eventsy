import { collaboration } from "@/data";
import ColaborationText from "./ui/ColaborationText";
import ColaborationDataProvider from "./ui/ColaborationDataProvider";

const Colaborations = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-3 h-auto relative overflow-hidden pb-20 pt-1">
            <ColaborationText />
            <div className="flex flex-row justify-center flex-wrap mt-4 gap-3 w-full px-4 md:px-8 lg:px-16">
                {collaboration.map((image, index) => (
                    <ColaborationDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                        className="w-12 h-12 md:w-24 md:h-24 lg:w-40 lg:h-40"
                    />
                ))}
            </div>
        </section>
    );
};

export default Colaborations;
