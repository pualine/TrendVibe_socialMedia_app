import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useSignOutAccount } from '@/lib/react-query/queriesAndMutations'
import { useEffect } from 'react';
import { useUserContext } from '@/context/AuthContext';
import { sidebarLinks } from '@/constants';
import { INavLink } from '@/types';
import { Button } from '../ui/button';


const LeftSidebar = () => {
    const { pathname } = useLocation();
    const { mutate: signOut, isSuccess } = useSignOutAccount();
    const navigate = useNavigate();
    const { user } = useUserContext()

    useEffect(() => {
        if (isSuccess) navigate(0)

    }, [isSuccess])

    return (
        <nav className='leftsidebar'>
            <div className='flex flex-col gap-4'>
                <Link to="/" className='flex gap-3 items-center'>
                    <h2 className='h1-bold md:h3-bold small:h4-bold text-10'>TrendVibe</h2>
                    {/* <img 
                    src='/assets/images/logo.svg'
                    alt='logo'
                    width={130}
                    height={325}
                    /> */}
                </Link>

                <Link to={`/profile/${user.id}`}
                    className='flex gap-3 items-center'>
                    <img
                        src={user.imageUrl || '/assets/icons/profile-placeholder.svg'}
                        alt='profile'
                        className='h-14 w-14 rounded-full'
                    />

                    <div className='flex flex-col'>
                        <p className='small-regular'>{user.name}</p>
                        <p className='small-regular text-light-3'>
                            @{user.username}
                        </p>
                    </div>
                </Link>

                <ul className='flex flex-col gap-4'>
                    {sidebarLinks.map((link: INavLink) => {
                        const isActive = pathname === link.route;


                        return (
                            <li key={link.label}  
                                className={`leftsidebar-link group ${isActive && 'bg-primary-500'
                                    }`}>
                                <NavLink
                                    to={link.route}
                                    className="flex gap-3 items-center p-4"
                                >
                                    <img
                                        src={link.imgURL}
                                        alt={link.label}
                                        className={`group-hover:invert-white 
                                        ${isActive && 'invert-white' }`}  
                                    />
                                    {link.label}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <Button variant="ghost" className='shad-button_ghost'
                onClick={() => signOut()} >
                <img
                    src='/assets/icons/logout.svg' />
                <span className='small-medium lg:base-medium'>Log out</span>
            </Button>
        </nav>
    )
}

export default LeftSidebar