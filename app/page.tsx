import { Button } from '@/components/ui/button';

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h3 className='text-2xl font-semibold mb-5 pb-4 border-b text-gray-600'>
        {title}
      </h3>
      <div className='grid items-center'>
        <div>{children}</div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className='max-w-6xl mx-auto py-10'>
      <h1 className='text-4xl font-semibold mb-10'>POC Shadcn</h1>
      <div className='grid grid-cols-3 grid-flow-col gap-12'>
        <Section title='Button'>
          <Button>Button</Button>
        </Section>
        <Section title='Button'>
          <Button>Default</Button>
        </Section>
        <Section title='Button'>
          <Button>Default</Button>
        </Section>
      </div>
    </main>
  );
}
