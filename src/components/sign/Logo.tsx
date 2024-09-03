import ImageWrapper from "@/components/ImageWrapper";
import LogoImage from "@/images/logo.png";

export default function Logo() {
    return <ImageWrapper src={LogoImage} alt="logo" width={100} height={100} />;
}
