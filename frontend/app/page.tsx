import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/custom/hero-section";
import { FeatureSection } from "@/components/custom/features-section";
import { getHomePageData } from "@/data/loaders";

export default async function Home() {
  const strapiData = await getHomePageData();
  const { title, description, blocks } = strapiData.data;
  return (
    <main className="container mx-auto py-6">
      <h1>{title}</h1>
      <p>{description}</p>
      <Button variant='secondary'>Click me 11</Button>
      <Button variant='outline'>Click me 2</Button>
      <Button variant='destructive'>Click me 3</Button>
	    <HeroSection data={blocks[0]} />
	    <FeatureSection data={blocks[1]} />
    </main>
  );
  
}
