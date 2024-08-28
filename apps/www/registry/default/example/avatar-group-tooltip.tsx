import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"
import { AvatarGroup } from "@/registry/default/ui/avatar-group"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip"

export default function AvatarGroupDemo() {
  return (
    <TooltipProvider delayDuration={0}>
      <AvatarGroup>
        <div>
          <Tooltip>
            <TooltipTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>shadcn</TooltipContent>
          </Tooltip>
        </div>
        <div>
          <Tooltip>
            <TooltipTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/dpaulos6.png" />
                <AvatarFallback>DP</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>dpaulos6</TooltipContent>
          </Tooltip>
        </div>
        <div>
          <Tooltip>
            <TooltipTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shuding.png" />
                <AvatarFallback>SD</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>Shu Ding</TooltipContent>
          </Tooltip>
        </div>
      </AvatarGroup>
    </TooltipProvider>
  )
}
