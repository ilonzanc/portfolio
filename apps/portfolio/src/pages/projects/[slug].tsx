import { useRouter } from 'next/router';
import { PageService } from '../../services';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export default function Page({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  return <p>Post: {router.query.slug}</p>;
}

type Repo = {
  name: string;
  stargazers_count: number;
};

export const getStaticProps = (async (context) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo = await res.json();
  return { props: { repo } };
}) satisfies GetStaticProps<{
  repo: Repo;
}>;

export async function getStaticPaths() {
  const pageService = new PageService();
  // Call an external API endpoint to get posts
  const response = await pageService.getPageSlugs();

  console.log(response);

  const posts = [
    { id: 123, slug: 'slug-1' },
    { id: 123, slug: 'slug-2' },
    { id: 123, slug: 'slug-3' },
  ];

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
}
