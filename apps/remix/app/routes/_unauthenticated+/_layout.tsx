import { Link, Outlet } from 'react-router';

import { BrandingLogo } from '~/components/general/branding-logo';

export default function Layout() {
  return (
    <main className="frai-auth-shell relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-12 md:p-12 lg:p-24">
      <Link
        to="/"
        aria-label="FRAI Sign"
        className="absolute top-6 left-6 z-20 rounded-full ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:top-8 md:left-[clamp(24px,4vw,72px)]"
      >
        <BrandingLogo className="h-6 w-auto" />
      </Link>

      <div className="relative z-10">
        <div className="relative w-full">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
