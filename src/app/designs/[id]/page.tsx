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
    <section className="py-4">
      <div className="flex justify-center items-center flex-col">
        <div className="mt-10 w-1/3">
          <DesignCard design={design} />
          {/* Design Card will be here */}
        </div>
        <div className="flex justify-center items-center flex-col pt-4">
          <Link
            href="/designs"
            className="font-semibold italic text-sky-600 underline"
          >
            Back to designs
          </Link>
        </div>
      </div>
    </section>
  );
}
