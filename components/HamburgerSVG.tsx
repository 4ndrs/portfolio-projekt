type SVGProps = React.SVGProps<SVGSVGElement>;

type Props = {
  topClassName?: string;
  midClassName?: string;
  botClassName?: string;
  [id: string]: SVGProps[keyof SVGProps];
};

const HamburgerSVG = ({
  topClassName = "",
  midClassName = "",
  botClassName = "",
  ...otherProps
}: Props) => (
  <svg width="37" height="17" viewBox="0 0 37 17" fill="none" {...otherProps}>
    <path
      className={topClassName}
      d="M1 1H36"
      stroke="#43A0B1"
      strokeWidth="2"
      strokeLinecap="round"
    />

    <path
      className={midClassName}
      d="M1 7.95764H36"
      stroke="#43A0B1"
      strokeWidth="2"
      strokeLinecap="round"
    />

    <path
      className={botClassName}
      d="M1 15.1395H36"
      stroke="#43A0B1"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default HamburgerSVG;
