import Link from "next/link";
import designs, { Design } from "@/lib/designs";
import DesignCard from "@/components/DesignCard";

export default function DesignPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const design: Design = designs.find((d: { id: string }) => d.id === id)!;

  return (
    <section className="py-24">
      <div className="container">
        <div>
          <Link
            href="/designs"
            className="font-semibold italic text-sky-600 underline"
          >
            Back to designs
          </Link>
        </div>

        <div className="mt-10 w-1/3">
          <DesignCard design={design} />
        </div>
      </div>
    </section>
  );
}
