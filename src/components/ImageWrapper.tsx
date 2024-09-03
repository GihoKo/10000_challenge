import Image, { StaticImageData } from "next/image";

export default function ImageWrapper({
    src,
    alt,
    width,
    height,
}: {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
}) {
    return (
        <div className="flex justify-center items-center">
            <Image src={src} alt={alt} width={width} height={height} />
        </div>
    );
}
