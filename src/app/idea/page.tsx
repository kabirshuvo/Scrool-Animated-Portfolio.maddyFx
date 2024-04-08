import Link from "next/link";
import Image from "next/image";

import ideas from "@/lib/idea";

export default function Ideas() {
  return (
    <section className="mt-12">
      <div className="container">
        <h1 className="font-serif text-3xl font-bold text-gray-700">Ideas</h1>

        <ul className="mt-10 grid auto-rows-max grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ideas.map(({ id, imageSrc }) => (
            <li key={id}>
              <Link href={`/idea/${id}`}>
                <Image
                  alt="Design Image"
                  src={imageSrc}
                  height={500}
                  width={500}
                  className="aspect-square w-full rounded-xl object-cover"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
