import { Header } from "./header/header"


export const AppLayout =(props) =>{

      return (
        <>
        <Header/>
        {props.children}
        </>
      )
}