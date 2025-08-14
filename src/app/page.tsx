import Header from "./components/Header";
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
