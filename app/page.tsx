import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import BeforeAfter from "@/components/before-after"
import WhyTrustUs from "@/components/why-trust-us"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <WhyTrustUs />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
