"use server"

import {z} from 'zod';

import { revalidatePath } from 'next/cache';
const flashcardSchema = z.object({
    content: z.string(),
    flashcardSetId: z.string()
});

import { db } from "@/lib/db";

async function saveFlashcard(formData: FormData) {
    
    // const Content = formData.get('Content') as string; 

    const { content, flashcardSetId } = flashcardSchema.parse({
        content: formData.get('content'),
        flashcardSetId: formData.get("flashcardSetId")
    });

    // const course = { connect: { id: 'your_course_id' } }; // Replace 'your_course_id' with the actual course ID

    await db.flashcard.create({
        data: {
            content,
            flashcardSet: { connect: { id: flashcardSetId } }
        },
    });

    revalidatePath(`/flashcards/${flashcardSetId}`);

}

export default saveFlashcard
