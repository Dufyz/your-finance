"use client";

import useLogin from "@/app/login/hook/useLogin"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { IconLogout } from "@tabler/icons-react"
  
  export function Logout() {
    const {
        handleLogout
    } = useLogin();

    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
            <div className="flex items-center justify-center gap-2">
                <IconLogout size={20} color="#868e96"/>
          <button className="text-sm text-muted-foreground">Logout</button>
            </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action will log you out of your account. You will need to sign in to get back in.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => handleLogout()}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  