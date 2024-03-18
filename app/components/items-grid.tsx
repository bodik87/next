"use client"

import { Item } from "@prisma/client"
import CardPreview from "./card-preview"
import CreateButton from "./create-button"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Card from "./card";

type Props = {
  items: Item[]
}

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

export default function ItemsGrid({ items }: Props) {
  const [activeId, setActiveId] = useState<string | null>();
  const [activeCard, setActiveCard] = useState<Item>(items[0]);

  return (
    <section className="fixed inset-0 p-2 flex items-center justify-around">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {items
          .sort((a, b) => (a.id as any > b.id as any) - (a.id as any < b.id as any))
          .map(item => (
            <CardPreview
              onClick={() => {
                setActiveCard(item),
                  setActiveId(String(item.id))
              }}
              key={item.id}
              id={item.id}
              title={item.title}
              body={item.body}
              color={item.color} />
          ))}
        <CreateButton />
      </div>

      <AnimatePresence>
        {activeId ? (
          <motion.div
            variants={overlay}
            onClick={() => {
              setActiveId(null)
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 flex items-center justify-center p-4"
          >
            <Card
              id={activeCard.id}
              oldColor={activeCard.color}
              oldTitle={activeCard.title}
              oldBody={activeCard.body}
              activeId={activeId}
              createdAt={activeCard.createdAt}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}