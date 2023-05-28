import Button from "@Components/Button"
import Search from "@Components/Search"

const Code = () => {
  return (
    <section className="page_gradient py-20 flex items-center flex-col">
      Code is mandatory for Any Programmer Either if it is for copying or Learning....
      <br />
      So you can find all of codes needed for your Software engineering carrier
      <br />
      You can find codes for all data structure in your favrouite langugae simply by searching it <Search />
      <br />
      or by learning the Concept behind that data structure and comparing codes in different languges <Button name={"Learn"} link={"learn"} /><br />
    </section>
  )
}

export default Code