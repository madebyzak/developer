import { ProfileHeader } from "@/components/profile-header";
import { Experience } from "@/components/experience";
import { TechStack } from "@/components/tech-stack";
import { Testimonial } from "@/components/testimonial";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <main>
        <ProfileHeader />
        <Experience />
        <TechStack />
        <Testimonial />
      </main>
      <SiteFooter />
    </>
  );
}
