"use client"

// import Lottie from "lottie-react";
// import profileAnimation from "../../../public/profileAnimation.json"
// import { UpdateUserModal } from "@/component/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";


const ProfilePage = () => {

const userData = authClient.useSession();
const user = userData.data?.user;
// console.log(user);
    return (
        
<div className="">
<div className="flex flex-col items-center">
    {/* <div className="w-48 h-48 -mb-2">
        <Lottie animationData={profileAnimation} loop={true}/>
    </div> */}
</div>

    <Card className="max-w-96 mx-auto items-center justify-center border mt-[90]">
         <Avatar className=" h-20 w-20 flex flex-col " >
                <Avatar.Image alt="John Doe" 
                src={user?.image}
                referrerPolicy="no-referrer" />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
        </Avatar>
        <h1 className="font-bold text-2xl">{user?.name}</h1>
        <p className="text-muted">{user?.email}</p>

{/* <UpdateUserModal></UpdateUserModal> */}
    </Card>
</div>
    );
};

export default ProfilePage;