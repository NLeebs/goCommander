import { z } from "zod";

export const playerEditFormSchema = z.object({
  playerName: z.string().min(1),
});
