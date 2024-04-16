"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { createSafeAction } from "@/lib/create-safe-action";
import { InputType, ReturnType } from "./types";
import { CreateFlashcard } from "./schema";




const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();

  if (!userId) {
    return {
      error: "Unauthorized",
    };
  }

  const { content, flashcardSetId } = data;
  let flashcard;

  try {
    const flashcardSet = await db.flashcardSet.findUnique({
      where: {
        id: flashcardSetId,
        userId
      },
    });

    if (!flashcardSet) {
      return {
        error: "flashcard not found",
      };
    }

    

    flashcard = await db.flashcard.create({
      data: {
        content,
        flashcardSetId,
        
      },
    });

  
  } catch (error) {
    return {
      error: "Failed to create."
    }
  }

  revalidatePath(`/flashcards/${flashcardSetId}`);
  return { data: flashcard };
};

export const createFlashcard = createSafeAction(CreateFlashcard, handler);