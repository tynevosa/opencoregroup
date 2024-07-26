import Image from 'next/image';
import FloatingMenu from '@/components/FloatingMenu';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <FloatingMenu />
      <Image
        src={'/union.svg'}
        alt={'Union'}
        height={0}
        width={0}
        className='h-40 w-full object-cover'
      />
      <main className='flex flex-col items-center justify-between px-4 md:px-24'>
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}
