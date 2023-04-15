import { Typography } from "@mui/material"
import React from "react"
import Header from "./Header"

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <main className="my-5">{children}</main>
    <footer className="text-center ">
      <Typography textAlign="center" sx={{ mt: 5 }}>
        Copyright © 2023 Novin.dev
      </Typography>
    </footer>
  </>
)

export default Layout
