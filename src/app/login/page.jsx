"use client";
import { authClient } from '@/lib/auth-client';
import { Card, Separator } from '@heroui/react';

import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
// import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';


const LoginPage = () => {
const router = useRouter();

const onSubmit =async (e)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries())

const { data, error } = await authClient.signIn.email({
// name:user.name,
email:user.email,
password:user.password,
// image:user.image
});

// console.log(data);
// console.log(error);

if(data){
    // redirect("/");
    toast.success("Login Successfully")
    router.push("/");
    
console.log("User created successfully",data);
}

if(error){
console.error("Sign up error",error.message)
toast.error(error.message || "something wrong");
return
}
};

const handleGoogleSignup = async()=>{
 await authClient.signIn.social({
provider:"google"
 });
}


    return (
        <div className="flex  flex-col w-full items-center justify-center p-4">
            <div className="text-center my-3">
                <h1 className="text-2xl font-bold ">Login Account </h1>
                <p>Start your vault ideas</p>
            </div>
          <Card className="w-full max-w-md p-6 shadow-lg">
            <Form onSubmit={onSubmit} className="flex  flex-col gap-4">


      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
        //   if (!/[A-Z]/.test(value)) {
        //     return "Password must contain at least one uppercase letter";
        //   }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button className={'w-full bg-cyan-500'} type="submit">
        
          Login
        </Button>
        
      </div>
    </Form>
     <div className="flex items-center justify-center">
              <Separator></Separator>
              <div className="whitespace-nowrap">Or sign up with</div>
              <Separator></Separator>
            </div>
    
        <div>
          <Button onClick={handleGoogleSignup} variant='outline' className={'w-full '}> <FcGoogle />Login with google</Button>
        </div>
          </Card>
        </div>
    );
};

export default LoginPage;