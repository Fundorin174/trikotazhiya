import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import GallerySection from "./components/GallerySection";
import LocationSection from "./components/LocationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { fetchGalleryMedia } from "./lib/apiClient";

export default async function HomePage() {
  const media = await fetchGalleryMedia();
  
  return (
    <>
      <Header />
      <HomeSection />
      <main className="pt-20">
        <GallerySection media={media} />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
