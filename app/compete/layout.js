import Menu from "@Components/Menu"

export const metadata = {
    title: "Compete from Codata",
    description:"Code to learn"
}

export default function RootLayout({ children }) {
    return (
      <section className="grid grid-cols-[148px_1fr]">
        <div className="page_gradient pt-20"> <Menu type={"compete"} /></div>
        <div>{children}</div>
      </section>
    )
  }