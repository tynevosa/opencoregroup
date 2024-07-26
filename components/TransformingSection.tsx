import Image from 'next/image';

export default function TransformingSection() {
  return (
    <section className='w-full py-16 md:py-32'>
      <div className='relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#2F5478] from-100% to-[#22405C] to-100% md:rounded-3xl'>
        <Image
          src={'/union.svg'}
          alt={'Union'}
          height={0}
          width={0}
          className='absolute -top-10 h-[117px] w-full rounded-t-2xl object-cover opacity-10 md:h-[155px] md:rounded-t-3xl'
        />
        <div className='w-full py-16 md:flex md:p-12 md:py-32'>
          <div className='px-6 font-normal md:w-1/2 md:pl-16'>
            <div className='text-[40px] text-white md:text-[64px]'>
              Transforming your{' '}
              <span className='font-bold'>Ideas into reality</span>
            </div>
            <div className='text-base text-[#EAECF0] md:text-xl'>
              Let&apos;s build something extraordinary together to captivate
              your audience.
            </div>
          </div>
          <div className='mt-16 flex items-center justify-center px-8 md:mt-0 md:w-1/2 md:justify-end md:pr-24'>
            <div className='flex aspect-square size-64 cursor-pointer items-center justify-center rounded-full border-2 border-[#EDF2F5] p-16'>
              <div className='text-2xl font-medium text-[#EAECF0]'>
                Let&apos;s Work <br /> Together!
              </div>
            </div>
          </div>
        </div>
        <Image
          src={'/union.svg'}
          alt={'Union'}
          height={0}
          width={0}
          className='absolute -bottom-10 h-[117px] w-full rotate-180 rounded-t-2xl object-cover opacity-10 md:h-[155px] md:rounded-t-3xl'
        />
      </div>
    </section>
  );
}
