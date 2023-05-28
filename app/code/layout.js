import Menu from "@Components/Menu"

export const metadata = {
    title: "Code from Codata",
    description:"Code to learn"
}

export default function RootLayout({ children }) {
    return (
      <section className="grid grid-cols-[148px_1fr]">
        <div className="page_gradient pt-20"> <Menu type={"code"} /></div>
        <div>{children}</div>
      </section>
    )
  }