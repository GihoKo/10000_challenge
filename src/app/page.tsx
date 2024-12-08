import NavigateButton from "@/components/button/NavigateButton";
import ImageWrapper from "@/components/ImageWrapper";
import logoImage from "@/images/logo.png";
import useRerenderCountStore from "@/stores/rerenderCountStore";

export default function Home() {
    // const { incrementRerenderCount } = useRerenderCountStore.getState();

    // incrementRerenderCount();
    return (
        <div className="h-screen flex flex-col gap-4 justify-center items-center">
            <ImageWrapper
                src={logoImage}
                width={144}
                height={144}
                alt="로고 이미지"
            />

            <NavigateButton path={"/signIn"} text="시작하기" width="w-24" />
        </div>
    );
}
