import Navigation from '@/app/_components/Navigation';
import Logo from '@/app/_components/Logo';
import MobileMenu from '@/app/_components/MobileMenu';
import { auth } from "../_lib/auth";

async function Header() {
  const session = await auth();

  return (
    <header className='sticky top-0 z-50 border-b border-primary-900 bg-primary-950/95 backdrop-blur-sm'>
      <div className='flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5'>
        <div className="flex-shrink-0">
          <Logo />
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Navigation session={session} />
          <MobileMenu session={session} />
        </div>
      </div>
    </header>
  );
}

export default Header;
