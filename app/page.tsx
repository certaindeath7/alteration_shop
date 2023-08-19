import HeroBanner from '@/components/LandingPage/HeroBanner';
import NavBar from '@/components/LandingPage/NavBar';
import ServicesComp from '@/components/LandingPage/ServicesComp';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col justify-between overflow-hidden dark:bg-gray-900">
      <NavBar />
      <HeroBanner />
      <ServicesComp />
    </main>
  );
}
