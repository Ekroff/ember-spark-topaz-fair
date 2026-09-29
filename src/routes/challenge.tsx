import { createFileRoute } from "@tanstack/react-router";
import { ChallengePage } from "@/pages/ChallengePage";

export const Route = createFileRoute("/challenge")({ component: ChallengePage });
