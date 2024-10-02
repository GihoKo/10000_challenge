import ConfirmButton from "@/components/button/ConfirmButton";
import DateInput from "./DateInput";
import AmountInput from "./AmountInput";
import DesciptionInput from "./DesciptionInput";
import ExpenseCategorySelect from "@/components/input/ExpenseCategorySelect";
import useMain from "./Main.hook";

export default function Main() {
    const { values, handleInputChange, handleCategoryChange, handleSubmit } =
        useMain();

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <div className="mt-2">
                    <ExpenseCategorySelect
                        value={values.category}
                        onChange={handleCategoryChange}
                    />
                </div>

                <div className="mt-2">
                    <DesciptionInput
                        values={values}
                        handleInputChange={handleInputChange}
                    />
                </div>

                <div className="mt-2">
                    <AmountInput
                        values={values}
                        handleInputChange={handleInputChange}
                    />
                </div>

                <div className="mt-2">
                    <DateInput
                        values={values}
                        handleInputChange={handleInputChange}
                    />
                </div>

                <div className="mt-10">
                    <ConfirmButton type="submit" text="추가" />
                </div>
            </form>
        </main>
    );
}
