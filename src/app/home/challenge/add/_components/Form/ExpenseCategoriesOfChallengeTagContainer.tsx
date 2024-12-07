import { ExpenseCategoriesOfChallengeTagContainerProps } from "./ExpenseCategoriesOfChallengeTagContainer.type";

export default function ExpenseCategoriesOfChallengeTagContainer({
    handleExpenseCategoryTagClick,
    expenseCategoriesOfChallenge,
}: ExpenseCategoriesOfChallengeTagContainerProps) {
    return (
        <ul
            className="flex gap-2 mt-2 flex-wrap"
            onClick={handleExpenseCategoryTagClick}
        >
            {expenseCategoriesOfChallenge.map((category) => {
                console.log(category);
                return (
                    <li
                        key={category.id}
                        data-id={category.id}
                        className="rounded-lg text-sm text-white bg-blue-500 px-2 py-1 cursor-pointer"
                    >
                        {category.name}
                    </li>
                );
            })}
        </ul>
    );
}
