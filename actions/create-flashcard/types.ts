import { z } from "zod";
import { Flashcard } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { CreateFlashcard } from "./schema";

export type InputType = z.infer<typeof CreateFlashcard>;
export type ReturnType = ActionState<InputType, Flashcard>;