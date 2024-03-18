"use client"

import { useEffect, useState } from "react";
import ContentEditable from "react-contenteditable";
import { cn } from "../../lib/utils";
import { updateItemAction } from "../actions";
import { motion } from "framer-motion";
import DeleteButton from "./delete-button";

export type Color = "RED" | "GREEN" | "BLUE" | "YELLOW";

type Props = {
 id: number,
 oldTitle: string,
 oldBody: string,
 oldColor: Color,
 activeId: string
 createdAt: Date
}

export default function Card({ id, oldTitle, oldBody, oldColor, activeId, createdAt }: Props) {
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
  <motion.article
   layoutId={activeId}
   onClick={(e) => e.stopPropagation()}
   className={cn(
    "p-4 max-w-md w-full h-auto rounded-md text-black",
    color === "RED" && "bg-[#F96246]",
    color === "GREEN" && "bg-[#1ECB8B]",
    color === "BLUE" && "bg-[#0078D4]",
    color === "YELLOW" && "bg-[#FEF9C3]"
   )}
   onBlur={async () => {
    updateItemAction(id, title, body, color)
   }}
  >
   <ContentEditable
    html={title}
    onChange={handleTitleChange}
    className="text-lg outline-none font-semibold whitespace-nowrap"
    data-placeholder="Title"
   />
   <ContentEditable
    html={body}
    onChange={handleBodyChange}
    className="mt-2 outline-none"
    data-placeholder="New note..."
   />

   <div className="flex justify-between">

    <p className="text-xs mt-4 outline-none">{new Date(createdAt).toJSON().slice(0, 10).replace(/-/g, '.')}</p>

    <DeleteButton id={id} />
   </div>
  </motion.article>

 )
}