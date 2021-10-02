import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="bg-gray-100 dark:bg-gay-700 md:w-auto min-h-screen lg:p-2 pt-6 px-4">
      <div className="container mx-auto mx-8 max-w-4xl lg:p-2" data-is-root-path={isRootPath}>
        <header className="global-header">{header}</header>
        <main className="">{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built by
          {` `} Ein Verne
        </footer>
      </div>
    </div>
  )
}

export default Layout
