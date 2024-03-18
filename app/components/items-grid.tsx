"use client"

import { Item } from "@prisma/client"
import CardPreview from "./card-preview"
import CreateButton from "./create-button"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Props = {
 items: Item[]
}

const overlay = {
 hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
 visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
 exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

export default function ItemsGrid({ items }: Props) {
 const [activeId, setActiveId] = useState<string | null>();

 return (
  <section className="fixed inset-0 p-5 flex items-center justify-around">
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
    {items.sort((a, b) => (a.id as any > b.id as any) - (a.id as any < b.id as any)).map(item => (
     <motion.div key={item.id} layoutId={String(item.id)} onClick={() => setActiveId(String(item.id))}>
      <CardPreview id={item.id} title={item.title} body={item.body} color={item.color} createdAt={item.createdAt} />
     </motion.div>
    ))}
    <CreateButton />
   </div>

   <AnimatePresence>
    {activeId ? (
     <motion.div
      variants={overlay}
      onClick={() => setActiveId(null)}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full h-full absolute flex items-center justify-center"
     >
      <motion.div
       className="bg-red-400 rounded-xl w-[400px] h-[250px]"
       layoutId={activeId}
      />
     </motion.div>
    ) : null}
   </AnimatePresence>
  </section>
 )
}