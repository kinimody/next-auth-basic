"use client"
import React from 'react'
import { CardWrapper } from './card-wrapper'
import {useForm} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { LoginSchema } from '@/schemas'
import {Input} from "@/components/ui/input"



export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues:{
      email:"",
      password:""
    }
  })
  return (
    <CardWrapper headerLabel='Welcome Back' backButtonLabel="Don't have a accoount?" backBUttonHref='/auth/register' showSocial>
      <Form {...form}>
        <form className='space-y-6' onSubmit={form.handleSubmit(()=>{})}>
          <div className='space-y-4'>
            <FormField control={form.control} name="email" render={({field}) => (
              <FormItem>
                <FormLabel className=''>
                   Email
                </FormLabel>
                 <FormControl>
                   <Input  {...field} placeholder='john@gmail.com' type='email'/>
                 </FormControl>
                 <FormMessage/>
              </FormItem>
            )}/>
          </div>
        </form>
      </Form>

    </CardWrapper>
  )
}
