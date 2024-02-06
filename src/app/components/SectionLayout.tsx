interface SectionLayoutProps {
  children: React.ReactNode;
  forwardedRef?: React.RefObject<HTMLDivElement>;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({
  children,
  forwardedRef,
}) => {
  return <section className="p-10">{children}</section>;
};

export default SectionLayout;
