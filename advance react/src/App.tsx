

// import Button from "./components/Button.tsx";
// import Container from "./components/Container.tsx";
// function App() {
//   return (
//     <main>
//       <p>
//         <Button href="https://google.com">click</Button>
//       </p>
//       <p>
//         <Button >click</Button>
//       </p>
//       <Container as={Button} onClick={()=>{}}>Click on  me</Container>
//     </main>
//   )
// }

//use input component in app.tsx
// import Input from "./components/Input";
// import { useRef } from "react";
// function App() {
//   const input = useRef<HTMLInputElement>(null)
//   return (
//     <main>
//       <Input label="name" id="name" type="text" ref={input}/>
//       <Input label="age" id="age" type="number"/>
//     </main>
//   )
// }



//use Form component in app.tsx
import Input from "./components/Input";
import Form, {type FormHandle} from "./components/Form";
import Button from "./components/Button";
import { useRef } from "react";


function App() {
  const customForm = useRef<FormHandle>(null)
  function handleSave(data: unknown){
    const extractedData = data as {name: string, age: string}//i want to cinvince typescript that the data is an object with name and age properties
    console.log(extractedData)
    customForm.current?.clear()
  }

  return (
    <Form onSave = {handleSave} ref= {customForm}>
      <Input label="name" id="name" type="text"/>
      <Input label="age" id="age" type="number"/>
      <p>
        <Button>save</Button>
      </p>
    </Form>
  )
}



 export default App;
