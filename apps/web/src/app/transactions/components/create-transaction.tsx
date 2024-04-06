import * as React from "react"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { IconPlus } from "@tabler/icons-react"
import Image from "next/image"

const CreateTransaction = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
                    size="sm"
                    variant="outline"
                    className="h-12 w-12 rounded-full bg-green-700 hover:bg-green-800 gap-1 text-sm"
                  >
                    <IconPlus size={32} color="#fff"/>
                  </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-4xl w-full">
      <DialogHeader />


    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="wallet">Wallet</TabsTrigger>
        <TabsTrigger value="card">Card</TabsTrigger>
      </TabsList>
      <TabsContent value="wallet">
        <Card>
          <CardHeader>
          <Select defaultValue="itau">
            <SelectTrigger className="w-full border-none h-[unset]">
              <SelectValue placeholder="Select a wallet" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="itau" className="py-2">
                  <div className="w-full flex items-center justify-center gap-4">
                    <div><Image 
                      src="/banks/itau.svg"
                      alt="Itaú Unibanco"
                      width={36}
                      height={36}
                      className="rounded-md"
                    /></div>
                    <span className="text-2xl">
                  Itaú Unibanco
                    </span>
                  </div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="description">Description</Label>
              <Input id="description" placeholder="Describe your transaction" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Category</Label>
              <Select defaultValue="itau">
            <SelectTrigger className="w-full border-none h-[unset]">
              <SelectValue placeholder="Select a wallet" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="itau" className="py-2">Education
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild className="w-full">
            <button type="button" className="bg-green-700 p-2 rounded-md text-white">
              Save
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CreateTransaction



  
