import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingAstrologer from "@/components/FloatingAstrologer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function PagesLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
            {/* <FloatingAstrologer />
      <FloatingWhatsApp /> */}
        </>
    );
}
