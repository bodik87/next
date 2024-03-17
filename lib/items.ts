import prisma from "@/lib/prisma";
import { Color } from "@prisma/client";

export async function getItems() {
  try {
    const items = await prisma.item.findMany();
    return { items };
  } catch (error) {
    return { error };
  }
}

export async function createItem(title: string, body: string, color: Color) {
  try {
    const item = await prisma.item.create({
      data: { title, body, color },
    });
    console.log(item);

    return { success: true, item }; // Возвращаем флаг успешной операции и созданный элемент
  } catch (error) {
    console.error("Ошибка при создании элемента:", error);
    // throw new Error("Не удалось создать элемент");
  }
}

// export async function getItemById(id: string) {
//   try {
//     const item = await prisma.item.findUnique({ where: { id } });
//     return { item };
//   } catch (error) {
//     return { error };
//   }
// }

export async function updateItem(
  id: number,
  title: string,
  body: string,
  color: Color
) {
  try {
    const item = await prisma.item.update({
      where: { id },
      data: { title, body, color },
    });
    return { item };
  } catch (error) {
    console.error(error);
  }
}

// export async function deleteItem(id: string) {
//   try {
//     await prisma.item.delete({
//       where: { id },
//     });
//   } catch (error) {
//     return { error };
//   }
// }
