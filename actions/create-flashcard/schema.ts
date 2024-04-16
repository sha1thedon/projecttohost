import { z } from "zod";

export const CreateFlashcard = z.object({
  content: z.string({
    required_error: "Content is required",
    invalid_type_error: "Content is required",
  }).min(3, {
    message: "Title is too short",
  }),
  flashcardSetId: z.string(),
});