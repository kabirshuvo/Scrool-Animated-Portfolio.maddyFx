import Link from "next/link";
import Image from "next/image";
import designs from "@/lib/designs";
// import degins from "@/lib/designs";

export default function Designs() {
  return (
    <section className="mt-12">
      <div className=" flex flex-col justify-center items-center">
        <h1 className="font-serif text-3xl font-bold text-gray-700">Designs</h1>

        <div className="flex justify-center items-center">
          <ul className="mt-10 grid auto-rows-max grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {designs.map(({ id, imageSrc }) => (
              <li key={id}>
                <Link href={`/designs/${id}`}>
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
        <div className="py-16">New Div</div>
      </div>
    </section>
  );
}
