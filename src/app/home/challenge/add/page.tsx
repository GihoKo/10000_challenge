import PageContentHeader from "@/components/Header/PageContentHeader";
import Form from "./_components/Form/Form";
import PageTransition from "@/components/animated/PageTransition";

export default function Add() {
    return (
        <PageTransition direction="left">
            <PageContentHeader text="챌린지를 추가할께요" />

            <Form />
        </PageTransition>
    );
}
