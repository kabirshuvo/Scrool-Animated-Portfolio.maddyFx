import Modal from "@/components/Modal";
import DesignCard from "@/components/DesignCard";
import designs, { Design } from "@/lib/designs";

export default function DesignModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const Design: Design = designs.find((d: { id: string }) => d.id === id)!;

  return (
    <Modal>
      <DesignCard Design={Design} />
    </Modal>
  );
}
