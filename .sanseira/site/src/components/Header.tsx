import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './widgets/Menu';
import logo from '../../public/logo.svg';

interface HeaderProps {
    path: string;
};
const Header: React.FC<HeaderProps> = ({ path }) => {
    return (
        <header className="text-white p-4 flex justify-between items-center border-b border-primary">
            <Link href="/">
                <div className="flex sm:flex-col items-center space-x-2 cursor-pointer">
                    <Image src={logo} alt="Sanseira Logo" className='w-8 h-8 sm:w-16 sm:h-16' />
                    <p className="text-2xl sm:text-[12px] sm:hidden sm:p-0 sm:m-0 font-bold text-primary">Sanseira</p>
                </div>
            </Link>

            <nav className="space-x-4 hidden sm:flex sm:items-center">
                <Link href="/" className={`text-primary ${path === '/' ? 'font-bold underline text-lg' : ''}`}>Home</Link>
                <Link href="/students" className={`text-primary ${path === '/students' ? 'font-bold underline text-lg' : ''}`}>Students</Link>
                <Link href="/companies" className={`text-primary ${path === '/companies' ? 'font-bold underline text-lg' : ''}`}>Companies</Link>
                <Link href="/schools" className={`text-primary ${path === '/schools' ? 'font-bold underline text-lg' : ''}`}>Schools</Link>
            </nav>

            <MobileMenu />

            <div className='hidden md:flex'>

            </div>
        </header>
    );
}

export default Header;
