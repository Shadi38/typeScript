import {forwardRef,type ComponentPropsWithoutRef} from "react";


// type InputProps ={
//     label: string;
//     id: string;}
// } & ComponentPropsWithRef<"input">;//this is a component props type that i want to use for an input element



// export default function Input({ label, id, ...props }: InputProps) {
// return (
//     <div>
//     <label htmlFor={id}>{label}</label>
//     <input id={id} {...props}/>
//     </div>
// )
// }

//we want to use forward ref function to forward the ref to the input element

type InputProps ={
    label: string;
    id: string;}& ComponentPropsWithoutRef<"input">;

// const input = forwardRef(function Input ({label, id, ...props }: InputProps, ref) {
   const input = forwardRef<HTMLInputElement, InputProps>(function Input ({label, id, ...props }, ref) {
    return (
            <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} {...props} ref={ref}/>
            </div>
        )
})
export default input;
