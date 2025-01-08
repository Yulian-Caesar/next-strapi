import Image from "next/image";
import { Button } from "@/components/ui/button"

async function getHomePageData(path: string) {
  const baseUrl = 'http://localhost:1337';
  try{
    const res = await fetch(`${baseUrl}${path}`);
    const data = await res.json();
    return data
  } catch(err) {
    console.log(err)
  }
}

export default async function Home() {
  const strapiData = await getHomePageData('/api/home-page');
  const { title, description } = strapiData.data;

  return (
    <main className="container mx-auto py-6">
      <h1>{title}</h1>
      <p>{description}</p>
      <Button variant='secondary'>Click me 11</Button>
      <Button variant='outline'>Click me 2</Button>
      <Button variant='destructive'>Click me 3</Button>
    </main>
  );
}
