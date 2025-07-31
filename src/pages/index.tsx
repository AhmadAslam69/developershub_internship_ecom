import HeroSection from "@/components/herosection";
import "@/globals.css";
import Navbar from "@/components/navbar";
import DealsSection from "@/components/deals_sec";
import CategorySection from "@/components/category";
import QuoteRequestCard from "@/components/sendreq";
import RecommendedItems from "@/components/recomended";
import ExtraServices from "@/components/extraservices_suppliers";
import NewsletterSubscription from "@/components/newsletter";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      
      <Navbar/>
      <HeroSection />

      <main className="bg-gray-100 px-6 py-2">
      <DealsSection />
      </main>

      <main className="bg-gray-100 px-4 py-2">
      <CategorySection />
      </main>


      <main className="bg-gray-100 p-6">
      <QuoteRequestCard />
      </main>


      <main className="p-2 bg-gray-100 ">
      <RecommendedItems />
      </main>


      <main className="bg-gray-100 p-2">
      <ExtraServices />
      </main>

      <NewsletterSubscription/>
      <Footer />

    </main>
  );
}
