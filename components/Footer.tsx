import Image from 'next/image';

export default function Footer() {
  const socials = [
    'instagram.svg',
    'facebook.svg',
    'twitter.svg',
    'x.svg',
    'linkedin.svg',
  ];
  return (
    <div className='w-full bg-[#294F74] py-10 md:py-20'>
      <div className='mx-4 rounded-2xl bg-white pt-6 md:mx-16 md:rounded-[36px] md:pt-0'>
        <div className='px-6 md:flex md:justify-between md:px-24 md:py-20'>
          <div className='flex flex-col items-center gap-3 md:items-start'>
            <div className='text-xl font-semibold text-[#475467] md:text-[#1D2939]'>
              Say Hello!
            </div>
            <div className='flex w-full items-center justify-center rounded-lg border border-[#EAECF0] px-4 py-2 text-base font-normal text-[#475467] md:justify-start md:border-0 md:p-0 md:text-xl'>
              opencoregroup@gmail.com
              <svg
                width='17'
                height='18'
                viewBox='0 0 17 18'
                fill='none'
                className='ml-2 block md:hidden'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9.75 4H2.875C2.37772 4 1.90081 4.19754 1.54917 4.54917C1.19754 4.90081 1 5.37772 1 5.875V14.625C1 15.1223 1.19754 15.5992 1.54917 15.9508C1.90081 16.3025 2.37772 16.5 2.875 16.5H11.625C12.1223 16.5 12.5992 16.3025 12.9508 15.9508C13.3025 15.5992 13.5 15.1223 13.5 14.625V7.75M4.75 12.75L16 1.5M16 1.5H11.625M16 1.5V5.875'
                  stroke='#D0D5DD'
                  strokeWidth='1.25'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <div className='mt-6 flex w-full justify-between md:w-auto md:gap-8'>
              {socials.map((social) => (
                <div
                  className={`${social === 'twitter.svg' ? 'hidden md:flex' : ''} ${social === 'x.svg' ? 'flex md:hidden' : ''} flex h-10 w-10 justify-center rounded-lg bg-[#F2F4F7] md:rounded`}
                  key={social}
                >
                  <Image
                    src={`/${social}`}
                    alt={social}
                    width={20}
                    height={20}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='my-8 flex justify-between gap-16 border-y-2 border-[#F2F4F7] py-8 text-base text-[#475467] md:my-0 md:border-y-0 md:py-0 md:text-xl'>
            <ul className='flex flex-col gap-4'>
              <li>Home</li>
              <li>About us</li>
              <li>Work</li>
            </ul>
            <ul className='flex flex-col gap-4'>
              <li>Services</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col items-center px-6 text-sm text-[#667085] md:flex-row md:justify-between md:px-24 md:text-xl'>
          <div>Toronto, ON Canada</div>
          <div>OpenCore. All Rights Reserved</div>
        </div>
        <div className='mt-8 flex justify-center md:mt-28'>
          <Image
            src={'/opencoregroup-full-logo.svg'}
            alt={'OpenCoreGroup Logo'}
            width={0}
            height={0}
            className='w-full md:w-2/3'
          />
        </div>
      </div>
    </div>
  );
}
