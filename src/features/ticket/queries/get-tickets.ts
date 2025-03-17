import { initialTickets } from "@/data";
import { Ticket } from "@/features/ticket/types";

export const getTickets = async (): Promise<Ticket[]> => {
  //return initial tickets
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return new Promise((resolve) => {
    resolve(initialTickets);
  });
};
