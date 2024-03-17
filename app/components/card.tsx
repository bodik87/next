"use client"

import { ChangeEvent, useState } from "react";
import ContentEditable from "react-contenteditable";

type Props = {}

export default function Card({ }: Props) {
 const [title, setTitle] = useState<string>("");
 const [body, setBody] = useState<string>("");

 const handleTitleChange = (event: any) => {
  setTitle(event.currentTarget.innerHTML);
 };
 const handleBodyChange = (event: any) => {
  setBody(event.currentTarget.innerHTML);
 };
 return (
  <article className="p-4 pb-5 w-full bg-green-100 rounded-md text-black">
   <ContentEditable
    html={title}
    onChange={handleTitleChange}
    className="outline-none font-semibold whitespace-nowrap"
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