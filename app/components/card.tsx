"use client"

import { useState } from "react";
import ContentEditable from "react-contenteditable";
import { cn } from "../lib/utils";

type Props = {
 // title: string,
 // body: string
 color: "red" | "green" | "blue" | "yellow"
}

export default function Card({ color }: Props) {
 const [title, setTitle] = useState<string>("");
 const [body, setBody] = useState<string>("");

 const handleTitleChange = (event: any) => {
  setTitle(event.currentTarget.innerHTML);
 };
 const handleBodyChange = (event: any) => {
  setBody(event.currentTarget.innerHTML);
 };
 return (
  <article className={cn(
   "p-4 pb-5 w-full rounded-md text-black",
   color === "red" && "bg-[#F96246]",
   color === "green" && "bg-[#1ECB8B]",
   color === "blue" && "bg-[#0078D4]",
   color === "yellow" && "bg-[#FEF9C3]"
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


 )
}