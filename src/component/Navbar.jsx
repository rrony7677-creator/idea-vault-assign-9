"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { usePathname } from 'next/navigation';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
    const pathname = usePathname();

        const { data: session, } = authClient.useSession() 
        const user = session?.user;
        // console.log(user);

const handleSignOut = async()=>{
await authClient.signOut();
}
    
return (
<nav className="flex items-center justify-between p-5 bg-white shadow-sm">
    <div className="md:hidden text-2xl cursor-pointer " onClick={()=>setIsOpen(!isOpen)}>
{isOpen ?<GiHamburgerMenu /> : <RxHamburgerMenu />}
</div>
    <div>
       <h1 className="font-bold text-2xl cursor-pointer"> 
        <span className="text-pink-400">Idea</span><span className="text-amber-400">-Vault</span></h1>
    </div>

        <ul className=" gap-3 md:flex hidden">
                <li><Link href={"/"}  className={pathname==="/"? "bg-green-400 font-bold px-2 py-1 rounded-xl" : ""}>Home </Link></li>
                <li><Link href={"/ideas"}  className={pathname==="/ideas"? "bg-green-400 font-bold px-2 py-1 rounded-xl" : ""}>Idea </Link></li>
                <li><Link href={"/my-idea"}  className={pathname==="/my-idea"? "bg-green-400 font-bold px-2 py-1 rounded-xl" : ""}>My Idea</Link></li>
                <li><Link href={"/add-idea"}  className={pathname==="/add-idea"? "bg-green-400 font-bold px-2 py-1 rounded-xl" : ""}>Add Ideas </Link></li>
                <li><Link href={"/my-interactions"}  className={pathname==="/my-interactions"? "bg-green-400 font-bold px-2 py-1 rounded-xl" : ""}>My Interactions  </Link></li>
            </ul>

           { isOpen && (
      <ul className="flex flex-col gap-3 w-full mt-4 md:hidden bg-gray-50 dark:bg-zinc-900 p-4 rounded-lg shadow-inner absolute top-16 left-0 z-50">
        <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link href="/ideas" onClick={() => setIsOpen(false)}>Idea</Link></li>
        <li><Link href="/my-idea" onClick={() => setIsOpen(false)}>My Idea</Link></li>
        <li><Link href="/add-idea" onClick={() => setIsOpen(false)}>Add Idea</Link></li>
        <li><Link href="/my-interactions" onClick={() => setIsOpen(false)}>My Interactions</Link></li>
      </ul>
    )}

             <ul className="flex items-center gap-3">
                <li><ThemeToggle></ThemeToggle></li>
                <li><Link href={"/profile"}> Profile </Link></li>
             {
            user?<>
            <li>
                <Avatar>
        <Avatar.Image
          referrerPolicy="no-referrer"
        alt="Kabir" src={user?.imageUrl} />
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar></li>
      
                <li>
                <Button onClick ={handleSignOut} variant="danger" className={'rounded-none'}>Logout</Button> </li>
            </>:      
            <>
               <li><Link href={"/login"}> Login </Link></li>
                <li><Link href={"/register"}>Register</Link></li>
            </>
             }
            </ul>

</nav>
    );
};

export default Navbar;