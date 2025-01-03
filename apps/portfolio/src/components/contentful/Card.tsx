import { Card as FlowbiteCard, Button } from 'flowbite-react';
import Link from 'next/link';

const Card = ({ data }) => {
  return (
    <FlowbiteCard
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={data.image.fields.file.url}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {data.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      {data.cta && (
        <Button as={Link} href={data.cta.fields.url}>
          {data.cta.fields.label}
          <svg
            className="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      )}
    </FlowbiteCard>
  );
};

export { Card };
