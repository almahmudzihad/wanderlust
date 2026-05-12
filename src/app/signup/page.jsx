"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const SignupPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    
    const { data, error } = await authClient.signUp.email({
        email: user.email, 
        password: user.password, 
        name: user.name, 
        image: user.imageUrl, 
    }
    );
    if(data){
        redirect('/login')
    }
    if(error){
        alert(error.message)
    }
  };
  const handelGoogleSignIn = async () => {
   await authClient.signIn.social({
    provider: "google",
  });
};
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h1 className="text-4xl font-bold text-center mt-5">Create an account</h1>
        <p className="text-center mb-5">Start your adventure with Wanderlust</p>
      </div>
      <Card className="border max-w-96 mx-auto rounded-sm">
        <Form className="flex  flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="name"
            type="text"
            
          >
            <Label>Name</Label>
            <Input placeholder="Your name" />
            <FieldError />
          </TextField>
          <TextField
            
            name="imageUrl"
            type="url"
          >
            <Label>Image</Label>
            <Input placeholder="Image url" />
            <FieldError />
          </TextField>
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
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button type="submit" className="w-full ">
              <Check />
              Create Account
            </Button>
          </div>
        </Form>
        <div className="flex items-center  justify-center gap-3" >
          <Separator />
          <div className="whitespace-nowrap">Or sign up with</div>
          <Separator />
        </div>
        <div>
          <Button onClick={handelGoogleSignIn} className="w-full" variant="outline"><FcGoogle />Login with Github</Button>
        </div>
        
      </Card>
    </div>
  );
};

export default SignupPage;
