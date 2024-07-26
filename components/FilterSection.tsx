'use client';

import { useState } from 'react';

export default function FilterSection() {
  const [selectedBtn, setSelectedBtn] = useState('All Resources');
  const buttons = [
    'All Resources',
    'Design',
    'Development',
    'Marketing',
    'Branding',
  ];
  const handleFilterBtnClick = (key: string) => {
    setSelectedBtn(key);
  };
  return (
    <section className='mt-6 flex w-full flex-col gap-4 md:mt-20 md:gap-8'>
      <div className='relative w-full'>
        <div className='pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3'>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8.5 2.1111C7.61358 2.1111 6.73583 2.28569 5.91689 2.62491C5.09794 2.96413 4.35382 3.46133 3.72703 4.08812C3.10023 4.71492 2.60303 5.45903 2.26381 6.27798C1.92459 7.09693 1.75 7.97467 1.75 8.8611C1.75 9.74752 1.92459 10.6253 2.26381 11.4442C2.60303 12.2632 3.10023 13.0073 3.72703 13.6341C4.35382 14.2609 5.09794 14.7581 5.91689 15.0973C6.73583 15.4365 7.61358 15.6111 8.5 15.6111C10.2902 15.6111 12.0071 14.8999 13.273 13.6341C14.5388 12.3682 15.25 10.6513 15.25 8.8611C15.25 7.07088 14.5388 5.35399 13.273 4.08812C12.0071 2.82225 10.2902 2.1111 8.5 2.1111ZM0.25 8.8611C0.250175 7.53619 0.56944 6.23082 1.18079 5.05539C1.79214 3.87997 2.67759 2.86907 3.76224 2.10822C4.84689 1.34736 6.09883 0.85892 7.41216 0.684219C8.7255 0.509519 10.0616 0.653695 11.3074 1.10455C12.5533 1.55541 13.6722 2.29968 14.5695 3.27442C15.4669 4.24915 16.1163 5.42567 16.4628 6.70446C16.8094 7.98324 16.8428 9.32668 16.5603 10.6211C16.2778 11.9156 15.6878 13.1229 14.84 14.1411L19.53 18.8311C19.6037 18.8998 19.6628 18.9826 19.7038 19.0746C19.7448 19.1666 19.7668 19.2659 19.7686 19.3666C19.7704 19.4673 19.7518 19.5673 19.7141 19.6607C19.6764 19.7541 19.6203 19.8389 19.549 19.9101C19.4778 19.9814 19.393 20.0375 19.2996 20.0752C19.2062 20.1129 19.1062 20.1315 19.0055 20.1297C18.9048 20.1279 18.8055 20.1059 18.7135 20.0649C18.6215 20.0239 18.5387 19.9648 18.47 19.8911L13.78 15.2011C12.5752 16.2046 11.1094 16.844 9.55432 17.0444C7.99922 17.2447 6.41922 16.9978 4.99941 16.3325C3.5796 15.6672 2.37878 14.6111 1.53763 13.2878C0.69648 11.9646 0.249828 10.4291 0.25 8.8611Z'
              fill='#344054'
            />
          </svg>
        </div>
        <input
          type='text'
          className='h-[44px] w-full rounded-lg border-2 border-[#EAECF0] bg-white ps-10 text-sm md:h-[64px] md:rounded-2xl md:text-base'
          placeholder='Search for resources and tutorials'
          required
        />
      </div>
      <div className='flex w-full justify-between text-sm text-[#667085] md:text-base'>
        <div className='hidden gap-4 md:flex'>
          {buttons.map((button) => (
            <Button
              callbackClick={() => handleFilterBtnClick(button)}
              key={button}
              selected={selectedBtn === button}
            >
              {button}
            </Button>
          ))}
        </div>
        <div className='block md:hidden'>
          <Button selected>
            All Resources
            <svg
              width='12'
              height='7'
              viewBox='0 0 12 7'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11.0723 0.793457L6.07227 5.79346L1.07227 0.793457'
                stroke='#294F74'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Button>
        </div>
        <div>
          <Button>
            <svg
              width='14'
              height='14'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7 1.36109C8.83667 1.36109 10.6367 1.51575 12.3887 1.81309C12.744 1.87309 13 2.18375 13 2.54375V3.23975C13 3.43674 12.9612 3.63179 12.8858 3.81378C12.8104 3.99577 12.7 4.16113 12.5607 4.30042L8.93933 7.92175C8.80005 8.06104 8.68956 8.2264 8.61418 8.40839C8.5388 8.59038 8.5 8.78544 8.5 8.98242V10.9338C8.50005 11.2124 8.42249 11.4855 8.27601 11.7226C8.12952 11.9596 7.91991 12.1512 7.67067 12.2758L5.5 13.3611V8.98242C5.5 8.78544 5.4612 8.59038 5.38582 8.40839C5.31044 8.2264 5.19995 8.06104 5.06067 7.92175L1.43933 4.30042C1.30005 4.16113 1.18956 3.99577 1.11418 3.81378C1.0388 3.63179 0.999998 3.43674 1 3.23975V2.54375C1 2.18375 1.256 1.87309 1.61133 1.81309C3.39171 1.51165 5.19428 1.36046 7 1.36109Z'
                stroke='#667085'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            Filters
          </Button>
        </div>
      </div>
    </section>
  );
}

function Button({
  children,
  selected = false,
  callbackClick,
}: Readonly<{
  children: React.ReactNode;
  selected?: boolean;
  callbackClick?: () => void;
}>) {
  return (
    <button
      className={`flex h-[41px] items-center gap-2 rounded-lg border px-4 py-[10px] md:h-[44px] ${selected ? 'border-[#EDF2F5] bg-[#EDF2F5]' : 'border-[#EAECF0] bg-white'}`}
      onClick={callbackClick}
    >
      {children}
    </button>
  );
}
