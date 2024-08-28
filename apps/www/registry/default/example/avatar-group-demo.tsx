import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"
import { AvatarGroup } from "@/registry/default/ui/avatar-group"

export default function AvatarGroupDemo() {
  return (
    <AvatarGroup orientation="horizontal">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/dpaulos6.png" />
        <AvatarFallback>DP</AvatarFallback>
      </Avatar>
      <span className="bg-secondary">Tx</span>
    </AvatarGroup>
  )
}
