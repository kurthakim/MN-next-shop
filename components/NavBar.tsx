import Link from 'next/link';
import { useSignOut, useUser } from '../hooks/user';

const NavBar: React.FC = () => {
  const user = useUser();
  console.log('🚀 ~ file: NavBar.tsx ~ line 6 ~ user', user);
  const signOut = useSignOut();

  return (
    <nav className="px-2 py-1 text-sm">
      <ul className="flex gap-2">
        <li className="text-lg font-extrabold">
          <Link href="/">
            <a>Next Shop</a>
          </Link>
        </li>
        <li role="separator" className="flex-1" />
        <>
          {user ? (
            <>
              <li>{user.name}</li>
              <li>
                <button onClick={signOut}>Sign Out</button>
              </li>
            </>
          ) : (
            <li>
              <Link href="/sign-in">
                <a>Sign In</a>
              </Link>
            </li>
          )}
        </>
      </ul>
    </nav>
  );
};

export default NavBar;
