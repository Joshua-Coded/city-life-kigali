'use client'

import {AiOutlineMenu} from 'react-icons/ai';
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';
import LoginModal from '../modals/LoginModal';


interface UserMenuProps {
    currentUser: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
    }, [])

    // onrent conditional

    const onRent = useCallback(() => {
        if(!currentUser){
            return loginModal.onOpen();
        }

        // open rent modal

    }, [currentUser, loginModal]); 

    return (
        <div className="relative">
            <div className="
            flex flex-row items-center gap-3">
                <div 
                onClick={onRent}
                className="
                
                hidden
                md:block
                text-sm
                font-semibold
                py-3
                px-4
                rounded-full
                hover:bg-neutral-100
                transition
                cursor-pointer"
                >
                Afri Homes
                </div>
                <div 
                onClick={toggleOpen}
                className="
                p-4
                md:py-1
                md:px-2
                border-[1px] 
                border-neutral-200 
                flex 
                flex-row 
                items-center 
                gap-3 
                rounded-full 
                cursor-pointer 
                hover:shadow-md 
                transition
                "
                >
                    <AiOutlineMenu />
                        <div className="
                        hidden md:block
                        ">
                            
                            <Avatar src={currentUser?.image} />
                        </div>

                </div>
              </div>


              {isOpen && (
                <div className='
                absolute
                rounded-xl
                shadow-md
                w-[40vw]
                md:w-3/4
                bg-white
                overflow-hodden
                right-0
                top-12
                text0-sm
                '>
                    <div className='
                    flex
                    flex-col
                    cursor-pointer
                    '>

                {currentUser ?  (
                    <>
                    <MenuItem 
                    onclick={() => {}}
                    label='My deals' />
                    
                    
                    <MenuItem 
                    onclick={() => {}}
                    label='My Favourite' />

                    <MenuItem 
                    onclick={() => {}}
                    label='My Favourite' />

                    <MenuItem 
                    onclick={() => {}}
                    label='My Favourite' />
                    
                    <MenuItem 
                    onclick={() => {}}
                    label='My Favourite' />
                    
                    <MenuItem 
                    onclick={() => {}}
                    label='City Life My Home' />
                    <hr />
                    
                    <MenuItem 
                    onclick={() => signOut()}
                    label='LogOut' />
                    </>
                ) : (
   <>
                    <MenuItem 
onclick={loginModal.onOpen}
label='Login' />
<MenuItem 
onclick={registerModal.onOpen}
label='Sign Up' />
</>
                )}
                    </div>

                </div>
              )}
        </div>
    )
}

export default UserMenu;