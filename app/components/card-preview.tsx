"use client"

import { cn } from "@/lib/utils"
import { Color } from "@prisma/client"
import { useState } from "react"
import Card from "./card"

type Props = {
 id: number,
 title: string,
 body: string
 color: Color
 createdAt: Date
}

export default function CardPreview({ id, title, body, color, createdAt }: Props) {
 const [openedCard, setOpenedCard] = useState(false)
 return (
  <>
   {openedCard && (
    <Card id={id} oldColor={color} oldTitle={title} oldBody={body} setOpenedCard={setOpenedCard} />
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
    <small className="mt-4 outline-none">{new Date(createdAt).toJSON().slice(0, 10).replace(/-/g, '.')}</small>
   </article>
  </>
 )
}