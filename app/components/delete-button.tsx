"use client"

import React from 'react'
import { deleteItemAction } from '../actions';

export default function DeleteButton({ id }: { id: number }) {
 return (
  <button
   onClick={async (e) => {
    e.stopPropagation()
    deleteItemAction(id)
   }}
   className='bg-red-600 text-white px-2 py-px text-sm rounded-md mt-2'
  >
   Delete
  </button>
 )
}