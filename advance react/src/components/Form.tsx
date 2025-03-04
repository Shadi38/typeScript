// import { ComponentPropsWithoutRef } from "react"

// type FormProps =  ComponentPropsWithoutRef<"form">&{
//     onSave:(valu:unknown)=>void
// }

// export default function Form({onSave,children,...otherProps}:FormProps){

// function handleSubmit(event: React.FormEvent<HTMLFormElement>){
//     event.preventDefault();
//   //get submitted data(is an object) in the form
//   //in this approach we have to have name props in the input elements
//   const formData = new FormData(event.currentTarget) //this is the mecanism that built into the browser to get the data(all values of input elements) from the form
//    const data = Object.fromEntries(formData)//this is a method that convert the form data into an array of key value pairs
//    onSave(data)
// }
// return(
//     <form  onSubmit={handleSubmit} {...otherProps}>
//      {children}
//     </form>
// )
// }


//exposing an API to the parent component, callable methods from your API, from our component to other components in the app
import { ComponentPropsWithoutRef, forwardRef, useImperativeHandle, useRef } from "react"

//we want to use clear method from the form component and we have to define the type of the ref object
export type FormHandle = {
    clear:()=>void
  }

type FormProps =  ComponentPropsWithoutRef<"form">&{
    onSave:(valu:unknown)=>void
}

 const Form = forwardRef<FormHandle,FormProps>(function Form({onSave,children,...otherProps}, ref) {

  const form = useRef<HTMLFormElement>(null)
  //useImperativeHandle is a hook that allows you to expose an API to the parent component, callable methods from your API,
  //from our component to other components in the app.
  //we have to use forwardRef when we use useImperativeHandle
  useImperativeHandle(ref,()=>{  
    return {
        clear(){
            console.log("clearing the form")
            form.current?.reset()
        }
    }
  }
)  

function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
  //get submitted data(is an object) in the form
  //in this approach we have to have name props in the input elements
  const formData = new FormData(event.currentTarget) //this is the mecanism that built into the browser to get the data(all values of input elements) from the form
   const data = Object.fromEntries(formData)//this is a method that convert the form data into an array of key value pairs
   onSave(data)
}

return(
    <form  onSubmit={handleSubmit} {...otherProps} ref={form}>
     {children}
    </form>
)
})
export default Form;