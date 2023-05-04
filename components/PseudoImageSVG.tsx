type SVGProps = React.SVGProps<SVGSVGElement>;

type Props = {
  first: string;
  second: string;
  fontSize?: string;
  [id: string]: SVGProps[keyof SVGProps];
};

const PseudoImageSVG = ({ first, second, fontSize, ...otherProps }: Props) => (
  <svg fill="black" stroke="black" viewBox="0 0 295 190" {...otherProps}>
    <rect width="100%" height="100%" fill="white" stroke="white" />
    <text
      dominantBaseline="middle"
      x="50%"
      y="50%"
      textAnchor="middle"
      fontSize={fontSize || "36px"}
      fontWeight="700"
    >
      <tspan fill="#000" stroke="#000">
        {first}
      </tspan>
      <tspan fill="#14afbd" stroke="#14afbd">
        {second}
      </tspan>
    </text>
  </svg>
);

export default PseudoImageSVG;
