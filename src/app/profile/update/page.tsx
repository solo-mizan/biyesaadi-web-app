"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

const Page = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    router.push("/");
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="bg-slate-950 mt-2 p-4 rounded-md w-[340px]">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="bg-slate-100 grainy-dark">
      <section className="p-2 md:p-4 lg:p-10">
        <Form {...form}>
          <Card className="mx-auto lg:w-[350px]">
            <CardHeader>
              <CardTitle>Update your profile</CardTitle>
              <CardDescription>
                Update your profile to get matched with other people.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="items-center gap-4 grid w-full">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" placeholder="Mizan Rahman" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Gender</Label>
                    <Select required>
                      <SelectTrigger className="">
                        <SelectValue placeholder="Select your gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Gender</SelectLabel>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Phone number</Label>
                    <Input
                      required
                      id="name"
                      placeholder="Enter your phone number"
                      type="number"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Marital status</Label>
                    <Select required>
                      <SelectTrigger className="">
                        <SelectValue placeholder="Select your marital status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Marital status</SelectLabel>
                          <SelectItem value="male">Unmarried</SelectItem>
                          <SelectItem value="female">Married</SelectItem>
                          <SelectItem value="other">Widowed</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Religion</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your religion" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Religion</SelectLabel>
                          <SelectItem value="islam">Islam</SelectItem>
                          <SelectItem value="hinduism">Hinduism</SelectItem>
                          <SelectItem value="christianity">
                            Christianity
                          </SelectItem>
                          <SelectItem value="buddhism">Buddhism</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Height</Label>
                    <div className="flex justify-between">
                      <Select required>
                        <SelectTrigger className="w-[140px]">
                          <SelectValue placeholder="Feet" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Feet</SelectLabel>
                            <SelectItem value="3">3 feet</SelectItem>
                            <SelectItem value="4">4 feet</SelectItem>
                            <SelectItem value="5">5 feet</SelectItem>
                            <SelectItem value="6">6 feet</SelectItem>
                            <SelectItem value="7">7 feet</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Select required>
                        <SelectTrigger className="w-[140px]">
                          <SelectValue placeholder="Inch" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Inch</SelectLabel>
                            <SelectItem value="0">0 inch</SelectItem>
                            <SelectItem value="1">1 inch</SelectItem>
                            <SelectItem value="2">2 inch</SelectItem>
                            <SelectItem value="3">3 inch</SelectItem>
                            <SelectItem value="4">4 inch</SelectItem>
                            <SelectItem value="5">5 inch</SelectItem>
                            <SelectItem value="6">6 inch</SelectItem>
                            <SelectItem value="7">7 inch</SelectItem>
                            <SelectItem value="8">8 inch</SelectItem>
                            <SelectItem value="9">9 inch</SelectItem>
                            <SelectItem value="10">10 inch</SelectItem>
                            <SelectItem value="11">11 inch</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <FormField
                      control={form.control}
                      name="dob"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Date of birth</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="opacity-50 ml-auto w-4 h-4" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="p-0 w-auto"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date() ||
                                  date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormDescription>
                            Your date of birth is used to calculate your age.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Submit</Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </Form>
      </section>
    </div>
  );
};

export default Page;
