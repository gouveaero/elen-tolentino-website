import HomeHeader from "@/components/HomeHeader";
import HomeHero from "@/components/HomeHero";
import HomeAbout from "@/components/HomeAbout";
import HomeCourses from "@/components/HomeCourses";
import HomeTestimonials from "@/components/HomeTestimonials";
import HomeFooter from "@/components/HomeFooter";

export default function Home() {
  return (
    <div className="bg-[#121212] text-[#E0E0E0] font-sans min-h-screen">
      <HomeHeader />
      <main>
        <HomeHero />
        <HomeAbout />
        <HomeCourses />
        <HomeTestimonials />
      </main>
      <HomeFooter />
    </div>
  );
}
