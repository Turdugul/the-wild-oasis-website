import Link from "next/link";

export default function Navigation({ session }) {
  return (
    <nav className='hidden lg:flex items-center gap-6'>
      <Link
        href='/cabins'
        className='text-primary-100 hover:text-accent-400 transition-colors px-3 py-2 rounded-md hover:bg-primary-800'
      >
        Cabins
      </Link>
      <Link
        href='/about'
        className='text-primary-100 hover:text-accent-400 transition-colors px-3 py-2 rounded-md hover:bg-primary-800'
      >
        About
      </Link>
      {session?.user?.image ? (
        <Link
          href='/account'
          className='flex items-center gap-3 text-primary-100 hover:text-accent-400 transition-colors px-3 py-2 rounded-md hover:bg-primary-800'
        >
          <img
            className="h-8 rounded-full"
            src={session.user.image}
            alt={session.user.name}
            referrerPolicy="no-referrer"
          />
          Guest area
        </Link>
      ) : (
        <Link
          href='/account'
          className='text-primary-100 hover:text-accent-400 transition-colors px-3 py-2 rounded-md hover:bg-primary-800'
        >
          Guest area
        </Link>
      )}
    </nav>
  );
}
