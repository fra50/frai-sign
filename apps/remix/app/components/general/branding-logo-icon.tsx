import type { SVGAttributes } from 'react';

export type LogoProps = SVGAttributes<SVGSVGElement>;

export const BrandingLogoIcon = ({ ...props }: LogoProps) => {
  return (
    <svg aria-label="FRAI Sign" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.26 160.25" {...props}>
      <polygon
        fill="currentColor"
        points="0 160.25 54.03 160.25 54.03 108.97 120.88 108.97 120.88 68.22 54.03 68.22 54.03 40.75 130.26 40.75 130.26 0 0 0 0 160.25"
      />
    </svg>
  );
};
