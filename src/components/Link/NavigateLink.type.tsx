import { StaticImageData } from "next/image";

export interface NavigateLinkProps {
    href: string;
    image: StaticImageData;
    text: string;
    alt: string;
}
