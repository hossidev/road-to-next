import clsx from "clsx";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TICKET_ICONS } from "@/features/ticket/constants";
import { Ticket } from "@/features/ticket/types";
import { ticketPath } from "@/paths";
type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  const detailButton = (
    <Button variant="outline" size="icon" asChild>
      <Link href={ticketPath(ticket.id)}>
        <LucideSquareArrowOutUpRight className="w-4 h-4" />
      </Link>
    </Button>
  );
  return (
    <div
      className={clsx(
        "w-full flex gap-x-1",
        !isDetail && "max-w-[420px]",
        isDetail && "max-w-[580px]"
      )}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className="truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            className={clsx(
              "whitespace-break-spaces",
              !isDetail && "line-clamp-3"
            )}
          >
            {ticket.content}
          </span>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-y-2">
        {isDetail ? null : (
          <div className="flex flex-col gap-y-1">{detailButton}</div>
        )}
      </div>
    </div>
  );
};

export { TicketItem };
