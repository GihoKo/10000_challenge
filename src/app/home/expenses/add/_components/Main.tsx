"use client";

import ConfirmButton from "@/components/button/ConfirmButton";
import ExpenseCategorySelect from "@/components/input/ExpenseCategorySelect";
import useMain from "./Main.hook";
import Label from "@/components/label/label";
import ExpenseInput from "../../../../../components/input/ExpenseInput";
import { DevTool } from "@hookform/devtools";
import InputErrorMessage from "@/components/ErrorMessage/InputErrorMessage";
import RerenderCountButton from "@/components/button/RerenderCountButton";
// import { useEffect, useState } from "react";
// import { getExpenseCategoryByUserId } from "@/apis/services/expenseCategory";
// import { ExpenseCategory } from "@/app/home/setting/expenseCategory/_components/Main/Main.type";
// import ExpenseInputForTest from "./ForTest/ExpenseInputForTest";
// import ExpenseCategorySelectForTest from "./ForTest/ExpenseCategorySelectForTest";
// import useRerenderCountStore from "@/stores/rerenderCountStore";

// useState를 이용한 제어 컴포넌트 입니다.
// export default function Main() {
//     const incrementRerenderCount =
//         useRerenderCountStore.getState().incrementRerenderCount;
//     incrementRerenderCount();

//     const [expenseCategories, setExpenseCategories] = useState<
//         ExpenseCategory[]
//     >([]);

//     const [formValues, setFormValues] = useState({
//         category_name: "",
//         description: "",
//         amount: 0,
//         date: "YYYY-MM-DD",
//     });

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;

//         setFormValues({
//             ...formValues,
//             [name]: value,
//         });
//     };

//     const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//         const { name, value } = e.target;

//         setFormValues({
//             ...formValues,
//             [name]: value,
//         });
//     };

//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         console.log(formValues);
//     };

//     useEffect(() => {
//         getExpenseCategoryByUserId({
//             userId: process.env.NEXT_PUBLIC_USER_ID as string,
//         })
//             .then((response) => {
//                 setExpenseCategories(response);
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     }, []);

//     return (
//         <main>
//             <form onSubmit={handleSubmit}>
//                 <div className="mt-2">
//                     <Label
//                         htmlFor="category_name"
//                         text="지출 카테고리를 선택해주세요."
//                     >
//                         <ExpenseCategorySelectForTest
//                             formValues={formValues}
//                             handleSelectChange={handleSelectChange}
//                             expenseCategories={expenseCategories}
//                         />
//                     </Label>
//                 </div>

//                 <div className="mt-2">
//                     <Label
//                         htmlFor="description"
//                         text="지출 설명을 입력해주세요."
//                     >
//                         <ExpenseInputForTest
//                             name="description"
//                             type="text"
//                             formValues={formValues}
//                             handleInputChange={handleInputChange}
//                         />
//                     </Label>
//                 </div>

//                 <div className="mt-2">
//                     <Label htmlFor="amount" text="금액을 입력해주세요.">
//                         <ExpenseInputForTest
//                             name="amount"
//                             type="number"
//                             formValues={formValues}
//                             handleInputChange={handleInputChange}
//                         />
//                     </Label>
//                 </div>

//                 <div className="mt-2">
//                     <Label htmlFor="date" text="지출 날짜를 선택해주세요.">
//                         <ExpenseInputForTest
//                             name="date"
//                             type="date"
//                             formValues={formValues}
//                             handleInputChange={handleInputChange}
//                         />
//                     </Label>
//                 </div>

//                 <div className="mt-10">
//                     <ConfirmButton type="submit" text="추가" />
//                 </div>
//             </form>
//             <RerenderCountButton />
//         </main>
//     );
// }

// react-hook-form을 이용한 비제어 컴포넌트 입니다.
export default function Main() {
    const {
        errors,
        control,
        expenseCategories,
        register,
        handleSubmit,
        onSubmit,
        handleSelectChange,
    } = useMain();

    return (
        <main>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="mt-2">
                    <Label
                        htmlFor="category_name"
                        text="지출 카테고리를 선택해주세요."
                    >
                        <ExpenseCategorySelect
                            handleSelectChange={handleSelectChange}
                            expenseCategories={expenseCategories}
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
            <RerenderCountButton />
        </main>
    );
}
