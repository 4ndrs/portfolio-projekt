const ChevronSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" strokeWidth={10} viewBox="0 0 300 100" {...props}>
    <title>Chevron pointing below</title>
    <path d="M0 0 L150 70 L300 0" />
    <path d="M0 30 l150 70 L300 30" />
  </svg>
);

export default ChevronSVG;
