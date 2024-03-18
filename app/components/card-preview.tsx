"use client"

import { cn } from "@/lib/utils"
import { Color } from "@prisma/client"
import ContentEditable from "react-contenteditable"
import { motion } from "framer-motion";

type Props = {
 id: number,
 title: string,
 body: string
 color: Color
 onClick: () => void
}

export default function CardPreview({ id, title, body, color, onClick }: Props) {
 return (
  <>
   <motion.article
    onClick={onClick}
    layoutId={String(id)}
    className={cn(
     "p-4 pb-5 w-full rounded-md text-black flex flex-col",
     color === "RED" && "bg-[#F96246]",
     color === "GREEN" && "bg-[#1ECB8B]",
     color === "BLUE" && "bg-[#0078D4]",
     color === "YELLOW" && "bg-[#FEF9C3]"
    )}>
    <p className="text-lg outline-none font-semibold whitespace-nowrap">{title}</p>
    <ContentEditable
     html={body}
     onChange={() => { }}
     className="mt-2 outline-none"
     data-placeholder="New note..."
    />
   </motion.article>
  </>
 )
}

