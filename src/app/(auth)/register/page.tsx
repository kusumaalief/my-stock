"use client";

import React from "react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

type Props = {};

const RegisterFormSchema = z
  .object({
    username: z.string().min(5).max(15),
    email: z.string().email(),
    password: z.string().min(3),
    confirmPassword: z.string().min(3),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: "Password doesnt match",
      path: ["confirmPassword"],
    }
  );

const RegisterPage = (props: Props) => {
  const { push } = useRouter();
  const { toast } = useToast();

  const registerForm = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof RegisterFormSchema>) => {
    let data: IFResponse;
    const res = await fetch("api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    data = await res.json();

    console.log("res", data);

    if (data.statusCode == 200) {
      toast({
        variant: "success",
        title: "You've been registered !",
        description: "You can login now.",
      });
      setTimeout(() => (push("/login"), 5000));
    } else {
      toast({
        variant: "destructive",
        title: "Something went wrong !",
        description: "Try again later.",
      });
    }
  };

  return (
    <div>
      <Card>
        <CardHeader className={`text-zinc-900}`}>
          <CardTitle>Register</CardTitle>
        </CardHeader>
        <CardContent className="">
          <Form {...registerForm}>
            <form
              onSubmit={registerForm.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <FormField
                control={registerForm.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={registerForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={registerForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={registerForm.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="confirm password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
