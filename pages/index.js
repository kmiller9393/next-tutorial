import Link from 'next/link';

const Index = () => (
  <section>
    <h1>Hello World from Next</h1>
    <Link href="/about">
      <a title="About NextJS">About this Next.js project</a>
    </Link>
  </section>
);

export default Index;
