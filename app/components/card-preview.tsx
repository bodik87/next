"use client"

import { cn } from "@/lib/utils"
import { Color } from "@prisma/client"
import { useState } from "react"
import Card from "./card"

type Props = {
 title: string,
 body: string
 color: Color
}

export default function CardPreview({ title, body, color }: Props) {
 const [openedCard, setOpenedCard] = useState(false)
 return (
  <>
   {openedCard && (
    <div onClick={() => {
     setOpenedCard(false)
    }} className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
     <Card oldColor={color} oldTitle={title} oldBody={body} />
    </div>
   )}

   <article onClick={() => setOpenedCard(true)
   } className={cn(
    "p-4 pb-5 w-full rounded-md text-black",
    color === "RED" && "bg-[#F96246]",
    color === "GREEN" && "bg-[#1ECB8B]",
    color === "BLUE" && "bg-[#0078D4]",
    color === "YELLOW" && "bg-[#FEF9C3]"
   )}>
    <p className="text-lg outline-none font-semibold whitespace-nowrap">{title}</p>
    <p className="mt-4 outline-none">{body}</p>
   </article>
  </>
 )
}