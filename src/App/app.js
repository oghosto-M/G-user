import React from 'react'
import {useRoutes} from "react-router-dom";
import routes from "./routes";
export default function App() {
    let route = useRoutes(routes)
  return (
    <>
      {route}
    </>
  )
}
