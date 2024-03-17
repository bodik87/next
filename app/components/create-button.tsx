"use client"

import React from 'react'
import { createItemAction } from "../actions";

export default function CreateButton() {
 return (
  <button
   onClick={async () => {
    createItemAction("New", "Text new", "YELLOW")
   }}
  >
   Create
  </button>
 )
}