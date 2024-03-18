"use server";

import { createItem, deleteItem, updateItem } from "@/lib/items";
import { Color } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createItemAction(
  title: string,
  body: string,
  color: Color
) {
  try {
    await createItem(title, body, color);
  } catch (error: any) {
    return { error: error?.message || "Failed to add todo." };
  } finally {
    revalidatePath("/");
  }
}

export async function updateItemAction(
  id: number,
  title: string,
  body: string,
  color: Color
) {
  try {
    await updateItem(id, title, body, color);
  } catch (error: any) {
    return { error: error?.message || "Failed to update todo." };
  } finally {
    revalidatePath("/");
  }
}

export async function deleteItemAction(id: number) {
  try {
    await deleteItem(id);
  } catch (error: any) {
    return { error: error?.message || "Failed to update todo." };
  } finally {
    revalidatePath("/");
  }
}
