import { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
    // State to control the visibility of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={130} height={29} />
                </a>

                {/* Desktop Navigation Links */}
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {
                        navLinks.map((item) => (
                            <li key={item.label}>
                                <a href={item.href}
                                    className="font-montserrat leading-normal text-lg text-slate-gray">
                                    {item.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>

                {/* Desktop Action Links */}
                <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
                    <a href='/'>Sign in</a>
                    <span>/</span>
                    <a href='/'>Explore now</a>
                </div>

                {/* Hamburger Menu Icon (Mobile) */}
                <div className='hidden max-lg:block'>
                    <button onClick={toggleMenu}>
                        <img src={hamburger} alt="hamburger" width={25} height={25} />
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="max-lg:block absolute top-16 left-0 w-full bg-white shadow-md z-20">
                    <ul className="flex flex-col items-center py-4">
                        {
                            navLinks.map((item) => (
                                <li key={item.label} className="py-2">
                                    <a href={item.href}
                                        className="font-montserrat leading-normal text-lg text-slate-gray"
                                        onClick={() => setIsMenuOpen(false)} // Close the menu when a link is clicked
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="flex justify-center gap-2 py-4 border-t">
                        <a href='/' className="text-lg text-slate-gray" onClick={() => setIsMenuOpen(false)}>Sign in</a>
                        <span>/</span>
                        <a href='/' className="text-lg text-slate-gray" onClick={() => setIsMenuOpen(false)}>Explore now</a>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Nav;
