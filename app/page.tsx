import Image from 'next/image';
import FloatingMenu from '@/components/FloatingMenu';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import FilterSection from '@/components/FilterSection';
import ProjectSection from '@/components/ProjectSection';

export default function Home() {
  return (
    <>
      <FloatingMenu />
      <Image
        src={'/union.svg'}
        alt={'Union'}
        height={0}
        width={0}
        className='h-[117px] w-full object-cover md:h-[155px]'
      />
      <main className='flex flex-col items-center justify-between bg-gradient-to-b from-white to-[#F4F4F4] px-4 md:to-white md:px-24'>
        <HeroSection />
        <FilterSection />
        <ProjectSection />
      </main>
      <Footer />
    </>
  );
}
