import { Header } from './header.js'

export function Layout({ children }) {
    return (
        <>
            <Header/>
            <main>{children}</main>
        </>
    )
}
