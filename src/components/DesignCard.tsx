import Image from "next/image";
import { Design } from "@/lib/designs";

export default function DesignCard({ design }: { design: Design }) {
  return (
    <>
      <Image
        alt={design.name}
        src={design.imageSrc}
        height={600}
        width={600}
        className="col-span-1 aspect-square w-full object-cover"
      />

      <div className=" bg-white p-2 px-4">
        <h3 className="font-serif text-xl font-medium text-gray-900">
          {design.name}
        </h3>
        <p className="text-sm text-gray-500">Created by {design.username}</p>
      </div>
    </>
  );
}
