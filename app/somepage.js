// some-page.js
import { useRouter } from "next/router";

export default function SomePage() {
  const router = useRouter();
  const query = router.query;
  const id = query.id;

  return (
    <div style={{ padding: 40 }}>
      <h1>SomePage</h1>
      <h2>
        Name: <span style={{ color: "red" }}>{id}</span>
      </h2>
    </div>
  );
}