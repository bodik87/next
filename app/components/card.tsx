"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ContentEditable from "react-contenteditable";
import { cn } from "../../lib/utils";
import { updateItemAction } from "../actions";

export type Color = "RED" | "GREEN" | "BLUE" | "YELLOW";

type Props = {
 id: number,
 oldTitle: string,
 oldBody: string,
 oldColor: Color,
 setOpenedCard: Dispatch<SetStateAction<boolean>>
}

export default function Card({ id, oldTitle, oldBody, oldColor, setOpenedCard }: Props) {
 const [title, setTitle] = useState<string>("");
 const [body, setBody] = useState<string>("");
 const [color, setColor] = useState<Color>("YELLOW");

 const handleTitleChange = (event: any) => {
  setTitle(event.currentTarget.innerHTML);
 };
 const handleBodyChange = (event: any) => {
  setBody(event.currentTarget.innerHTML);
 };

 useEffect(() => {
  setTitle(oldTitle)
  setBody(oldBody)
  setColor(oldColor)
 }, [oldBody, oldColor, oldTitle])

 return (
  <div
   onClick={async () => {
    updateItemAction(id, title, body, color)
    setOpenedCard(false)
   }}
   className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
   <article
    onClick={(e) => e.stopPropagation()}
    className={cn(
     "p-4 pb-5 max-w-md w-full rounded-md text-black",
     color === "RED" && "bg-[#F96246]",
     color === "GREEN" && "bg-[#1ECB8B]",
     color === "BLUE" && "bg-[#0078D4]",
     color === "YELLOW" && "bg-[#FEF9C3]"
    )}>
    <ContentEditable
     html={title}
     onChange={handleTitleChange}
     className="text-lg outline-none font-semibold whitespace-nowrap"
     data-placeholder="Title"
    />
    <ContentEditable
     html={body}
     onChange={handleBodyChange}
     className="mt-4 outline-none"
     data-placeholder="New note..."
    />
   </article>
  </div>

 )
}