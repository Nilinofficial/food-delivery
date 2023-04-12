import { useRouteError } from "react-router-dom"



const Error = () => {

    const {status,statusText} = useRouteError();
   

  return (
    <h1>
        {status}
        {statusText}
    </h1>
  )
}

export default Error