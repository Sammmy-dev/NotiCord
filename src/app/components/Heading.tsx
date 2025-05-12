import { cn } from "@/utils"
import { ReactNode } from "react"

interface HeadingProps{
    children: ReactNode
    className: string
}

const Heading = ({children, className, ...props}:HeadingProps) => {
  return (
    <div className={cn("hidden", className)}>{children}</div>
  )
}

export default Heading