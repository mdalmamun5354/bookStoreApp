import ContactUtil from "../components/ContactUtil"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function Contact() {
  return (
    <>
      <Navbar />
      <div className="mt-36 mb-20">
        <ContactUtil />
      </div>
      <Footer />
    </>
  )
}

export default Contact
