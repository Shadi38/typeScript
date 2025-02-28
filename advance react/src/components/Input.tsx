import { ComponentPropsWithRef } from "react";


type InputProps ={
    label: string;
    id: string;
} & ComponentPropsWithRef<"input">;//this is a component props type that i want to use for an input element

export default function Input({ label, id, ...props }: InputProps) {
return (
    <div>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...props}/>
    </div>
)
}

