import useRerenderCountStore from "@/stores/rerenderCountStore";

interface LabelProps {
    htmlFor: string;
    text: string;
    children: React.ReactNode;
}

export default function Label({ htmlFor, text, children }: LabelProps) {
    const incrementRerenderCount =
        useRerenderCountStore.getState().incrementRerenderCount;
    incrementRerenderCount();

    return (
        <label htmlFor={htmlFor} className="flex flex-col gap-1 relative group">
            <div className="text-sm text-gray-600 group-focus-within:text-blue-500 transition-all">
                {text}
            </div>

            {children}
        </label>
    );
}
