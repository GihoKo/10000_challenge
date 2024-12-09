import useRerenderCountStore from "@/stores/rerenderCountStore";
import { memo, useEffect, useRef } from "react";

interface LabelProps {
    htmlFor: string;
    text: string;
    children?: React.ReactNode;
}

function Label({ htmlFor, text, children }: LabelProps) {
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

const memoizedLabel = memo(Label);

export default memoizedLabel;
