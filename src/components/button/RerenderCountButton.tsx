import useRerenderCountStore from "@/stores/rerenderCountStore";

export default function RerenderCountButton() {
    const rerenderCount = useRerenderCountStore.getState().rerenderCount;

    const handleClick = () => {
        console.log("rerenderCount", rerenderCount);
    };

    return (
        <button type="button" onClick={handleClick}>
            rerenderCount
        </button>
    );
}
