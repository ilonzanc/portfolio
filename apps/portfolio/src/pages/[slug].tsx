import { useRouter } from 'next/router';
import { PageService } from '../services';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export default function Page({
  pageData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  return <p>Post: {pageData.title}</p>;
}

type Repo = {
  name: string;
  stargazers_count: number;
};

export const getStaticProps = (async (context) => {
  console.log(context);
  const pageService = new PageService();
  const pageData = await pageService.getPageBySlug(context.params.slug);
  console.log(`pageData for ${context.params.slug}: `, pageData);

  return { props: { pageData } };
}) satisfies GetStaticProps<{
  pageData: Repo;
}>;

export async function getStaticPaths() {
  const pageService = new PageService();
  // Call an external API endpoint to get posts
  const slugs = await pageService.getPageSlugs();
  // const slugs = await response.json();

  console.log(slugs);
  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
}
