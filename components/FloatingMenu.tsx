import Image from 'next/image';

export default function FloatingMenu() {
  return (
    <div className='fixed top-14 z-50 flex w-full justify-center'>
      <div className='flex h-[56px] w-[140px] rounded-[500px] border border-[#D0D5DD] bg-[#FCFCFD] md:h-[88px] md:w-[176px]'>
        <div className='flex w-1/2 cursor-pointer items-center justify-center'>
          <Image
            src={'/opencoregroup-logo.svg'}
            alt={'OpenCoreGroup Logo'}
            width={0}
            height={0}
            className='size-[24px] md:size-[38px]'
          />
        </div>
        <div className='h-full w-[1px] bg-[#D0D5DD]'></div>
        <div className='flex w-1/2 cursor-pointer items-center justify-center'>
          <Image
            src={'/menu.svg'}
            alt={'Menu Icon'}
            width={0}
            height={0}
            className='size-[24px] md:size-[38px]'
          />
        </div>
      </div>
    </div>
  );
}
