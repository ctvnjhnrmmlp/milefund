import ViewProject from '@/components/views/project';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <main>
      <section>
        <ViewProject id={(await params).id} />
      </section>
    </main>
  );
}
