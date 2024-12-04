import ConfirmButton from "@/components/button/ConfirmButton";
import ExpenseCategorySelect from "@/components/input/ExpenseCategorySelect";
import useMain from "./Main.hook";
import Label from "@/components/label/label";
import ExpenseInput from "../../../../../components/input/ExpenseInput";
import { DevTool } from "@hookform/devtools";
import InputErrorMessage from "@/components/ErrorMessage/InputErrorMessage";

export default function Main() {
    const { errors, control, register, handleSubmit, onSubmit } = useMain();

    return (
        <main>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="mt-2">
                    <Label
                        htmlFor="category"
                        text="지출 카테고리를 선택해주세요."
                    >
                        <ExpenseCategorySelect
                            id="category"
                            register={register}
                        />
                    </Label>
                </div>

                <div className="mt-2">
                    <Label
                        htmlFor="description"
                        text="지출 설명을 입력해주세요."
                    >
                        <ExpenseInput
                            id="description"
                            type="text"
                            register={register}
                        />
                        {errors.description && (
                            <InputErrorMessage
                                message={errors.description.message as string}
                            />
                        )}
                    </Label>
                </div>

                <div className="mt-2">
                    <Label htmlFor="amount" text="금액을 입력해주세요.">
                        <ExpenseInput
                            id="amount"
                            type="number"
                            register={register}
                        />
                        {errors.amount && (
                            <InputErrorMessage
                                message={errors.amount.message as string}
                            />
                        )}
                    </Label>
                </div>

                <div className="mt-2">
                    <Label htmlFor="date" text="지출 날짜를 선택해주세요.">
                        <ExpenseInput
                            id="date"
                            type="date"
                            register={register}
                        />
                        {errors.date && (
                            <InputErrorMessage
                                message={errors.date.message as string}
                            />
                        )}
                    </Label>
                </div>

                <div className="mt-10">
                    <ConfirmButton type="submit" text="추가" />
                </div>

                <DevTool control={control} />
            </form>
        </main>
    );
}
