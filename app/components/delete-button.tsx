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
   className='bg-red-300 px-2 rounded-md mt-2'
  >
   Delete
  </button>
 )
}