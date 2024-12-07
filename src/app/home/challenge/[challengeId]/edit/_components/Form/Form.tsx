"use client";

import ConfirmButton from "@/components/button/ConfirmButton";
import InputErrorMessage from "@/components/ErrorMessage/InputErrorMessage";
import ChallengeInput from "@/components/input/ChallengeInput";
import Label from "@/components/label/label";
import { DevTool } from "@hookform/devtools";
import useForm from "./Form.hook";
import ExpenseCategorySelect from "@/components/input/ExpenseCategorySelect";
import ExpenseCategoriesOfChallengeTagContainer from "@/app/home/challenge/add/_components/Form/ExpenseCategoriesOfChallengeTagContainer";

export default function Form() {
    const {
        register,
        handleSubmit,
        onSubmit,
        handleSelectChange,
        handleExpenseCategoryTagClick,
        errors,
        control,
        expenseCategories,
        expenseCategoriesOfChallenge,
    } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-2">
                <Label htmlFor="name" text="챌린지 이름을 입력해주세요">
                    <ChallengeInput id="name" type="text" register={register} />
                    {errors.name && (
                        <InputErrorMessage
                            message={errors.name.message as string}
                        />
                    )}
                </Label>
            </div>

            <div className="mt-2">
                <Label htmlFor="resolution" text="스스로의 다짐을 입력해주세요">
                    <ChallengeInput
                        id="resolution"
                        type="text"
                        register={register}
                    />
                    {errors.resolution && (
                        <InputErrorMessage
                            message={errors.resolution.message as string}
                        />
                    )}
                </Label>
            </div>

            <div className="mt-2">
                <Label
                    htmlFor="dailySaving"
                    text="매일 목표로 할 지출 금액을 입력해주세요"
                >
                    <ChallengeInput
                        id="dailySaving"
                        type="number"
                        register={register}
                    />
                    {errors.dailySaving && (
                        <InputErrorMessage
                            message={errors.dailySaving.message as string}
                        />
                    )}
                </Label>
            </div>

            <div className="mt-2">
                <Label htmlFor="category" text="지출 카테고리를 추가해주세요.">
                    <ExpenseCategorySelect
                        expenseCategories={expenseCategories}
                        handleSelectChange={handleSelectChange}
                    />
                </Label>
                <ExpenseCategoriesOfChallengeTagContainer
                    handleExpenseCategoryTagClick={
                        handleExpenseCategoryTagClick
                    }
                    expenseCategoriesOfChallenge={expenseCategoriesOfChallenge}
                />
            </div>

            <div className="mt-2">
                <Label
                    htmlFor="goalDate"
                    text="챌린지 목표 날짜를 입력해주세요"
                >
                    <ChallengeInput
                        id="goalDate"
                        type="date"
                        register={register}
                    />
                    {errors.goalDate && (
                        <InputErrorMessage
                            message={errors.goalDate.message as string}
                        />
                    )}
                </Label>
            </div>

            <div className="mt-10">
                <ConfirmButton type="submit" text="추가" />
            </div>

            <DevTool control={control} />
        </form>
    );
}
