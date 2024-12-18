import DefaultNavigateLink from "@/components/Link/DefaultNavigateLink";
import ImageWrapper from "@/components/ImageWrapper";
import logoImage from "@/images/logo.png";

export default function Home() {
    return (
        <div className="h-screen flex flex-col gap-4 justify-center items-center">
            <ImageWrapper
                src={logoImage}
                width={144}
                height={144}
                alt="로고 이미지"
            />

            <DefaultNavigateLink
                href={"/signIn"}
                text="시작하기"
                width="w-24"
            />
        </div>
    );
}
