import { ActivityEventsQuery } from "@/generated/graphql";

export type ActivityEvent =
  ActivityEventsQuery["activityEvents"]["items"][number];
