import { PrismaClient, TicketStatus } from "@prisma/client";

const prisma = new PrismaClient();

const tickets = [
  {
    title: "Ticket 1",
    content: "First ticket from the database",
    status: TicketStatus.CLOSED,
  },
  {
    title: "Ticket 2",
    content: "Second ticket from the database",
    status: TicketStatus.OPEN,
  },
  {
    title: "Ticket 3",
    content: "Third ticket from the database",
    status: TicketStatus.IN_PROGRESS,
  },
];

const seed = async () => {
  await prisma.ticket.deleteMany();
  await prisma.ticket.createMany({
    data: tickets,
  });
};

seed();
