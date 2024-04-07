import Link from "next/link";
import Image from "next/image";

import degins from "@/lib/designs";

export default function Designs() {
  return (
    <section className="mt-12">
      <div className="container">
        <h1 className="font-serif text-3xl font-bold text-gray-700">Designs</h1>

        <ul className="mt-10 grid auto-rows-max grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {degins.map(({ id, imageSrc }) => (
            <li key={id}>
              <Link href={`/degins/${id}`}>
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
