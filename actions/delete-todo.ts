"use server"

import {db} from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function deleteToDo(id: string) {
    await db.toDo.delete({
        where: {
            id
        }
    })
    revalidatePath("/dashboard/" )
}