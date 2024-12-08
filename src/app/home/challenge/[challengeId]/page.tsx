import useRerenderCountStore from "@/stores/rerenderCountStore";
import Header from "./_componenets/Header/Header";
import Main from "./_componenets/Main/Main";

export default function Challenge() {
    const { incrementRerenderCount } = useRerenderCountStore.getState();
    incrementRerenderCount();

    return (
        <div>
            <Header />

            <Main />
        </div>
    );
}
