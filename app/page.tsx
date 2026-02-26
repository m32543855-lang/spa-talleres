import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import BeforeAfter from "@/components/before-after"
import WhyTrustUs from "@/components/why-trust-us"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    name: "S.P.A. Talleres",
    url: "https://spatalleres.netlify.app",
    image: "https://spatalleres.netlify.app/images/logo.png",
    description:
      "Taller especializado en enderezado tecnico de carroceria y pintura automotriz al horno.",
    telephone: "+593981911423",
    email: "edy2a@hotmail.com",
    priceRange: "$$",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+593981911423",
        areaServed: "EC",
        availableLanguage: ["es"],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
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
