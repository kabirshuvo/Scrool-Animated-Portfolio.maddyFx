export default function DesignsLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const { children, modal } = props;
  return (
    <>
      {children}
      {modal}
    </>
  );
}
