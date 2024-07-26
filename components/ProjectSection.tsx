import Image from 'next/image';
import Link from 'next/link';

type ProjectTagType = {
  icon?: string;
  name: string;
};

type ProjectType = {
  image: string;
  description: string;
  tags: ProjectTagType[];
};

export default function ProjectSection() {
  const projects: ProjectType[] = [
    {
      image: '/projects/project1.png',
      description:
        'Case Study Template: FlipX, an Investment Attraction Startup',
      tags: [
        {
          icon: '/link.svg',
          name: 'Design file',
        },
      ],
    },
    {
      image: '/projects/project2.png',
      description: 'Designing Impression: The Power of First Impressions',
      tags: [
        {
          icon: '/code.svg',
          name: 'Github Resource',
        },
      ],
    },
    {
      image: '/projects/project3.png',
      description: 'Fluid Card Animation in After Effects',
      tags: [
        {
          name: 'Design',
        },
        {
          name: 'UI UX',
        },
        {
          name: 'Branding',
        },
      ],
    },
    {
      image: '/projects/project4.png',
      description: 'Designing Impression: The Power of First Impressions',
      tags: [
        {
          name: 'Design',
        },
        {
          name: 'UI UX',
        },
        {
          name: 'Branding',
        },
      ],
    },
    {
      image: '/projects/project5.png',
      description: 'Designing Impression: The Power of First Impressions',
      tags: [
        {
          name: 'Design',
        },
      ],
    },
    {
      image: '/projects/project6.png',
      description: 'OpenCore Customer Acquisition Strategy',
      tags: [
        {
          icon: '/paper.svg',
          name: 'Marketing PDF',
        },
      ],
    },
  ];
  return (
    <section className='mt-8 w-full md:mt-16'>
      <div className='grid gap-y-10 md:grid-cols-3 md:gap-8 md:gap-y-20'>
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </section>
  );
}

function Project({ project }: { project: Readonly<ProjectType> }) {
  return (
    <div className='flex w-full flex-col gap-4 md:gap-8'>
      <Image
        src={project.image}
        alt={project.description}
        width={6000}
        height={6000}
        className='w-full object-cover'
      />
      <Link href='#' className='text-xl font-medium text-[#344054] md:text-2xl'>
        {project.description}
      </Link>
      <div className='flex gap-2'>
        {project.tags.map((tag, index) => (
          <div
            className='flex cursor-pointer gap-1 rounded bg-[#F9FAFB] px-2 py-1 text-sm font-medium text-[#667085]'
            key={index}
          >
            {tag.icon && (
              <Image src={tag.icon} alt={tag.name} width={16} height={16} />
            )}
            {tag.name}
          </div>
        ))}
      </div>
    </div>
  );
}
