import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
  } from "lucide-react"
  
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { IconDotsVertical, IconEdit, IconTrash } from "@tabler/icons-react"
  
  export default function ToolsTransaction() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <IconDotsVertical size={24} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
        <DropdownMenuItem className="flex gap-2">
            <IconEdit size={16} />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-2">
            <IconTrash size={16} />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  