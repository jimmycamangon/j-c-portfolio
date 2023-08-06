// ItemDetailPage.tsx
import React from 'react';
import { useRouter } from 'next/router';
import ItemDetail from './components/ItemDetail'; // Import your ItemDetail component

export default function ItemDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  // Implement your data fetching logic based on the provided code examples

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl overflow-x-hidden">
      <ItemDetail item={id}  />
    </main>
  );
}
