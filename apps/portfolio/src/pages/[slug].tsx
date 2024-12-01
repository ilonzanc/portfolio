import { PageService } from '../services';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ContentComponentUtil } from '../utils';

export default function Page({
  pageData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
      <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <header className="mb-4 lg:mb-6 not-format">
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
            {pageData.title}
          </h1>
          <p>{pageData.intro}</p>
          {pageData.sections && ContentComponentUtil(pageData.sections)}
        </header>
      </article>
    </div>
  );
}

type Repo = {
  name: string;
};

export const getStaticProps = (async (context) => {
  const pageService = new PageService();
  const pageData = await pageService.getPageBySlug(context.params.slug);

  return { props: { pageData } };
}) satisfies GetStaticProps<{
  pageData: Repo;
}>;

export async function getStaticPaths() {
  const pageService = new PageService();
  // Call an external API endpoint to get posts
  const slugs = await pageService.getPageSlugs();

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
}
