import { MutableRefObject } from "react";
import { EventsGrid } from "../../components/events/EventsGrid";

interface EventsHighlightProps {
  targetRef: MutableRefObject<HTMLDivElement>;
}

export function EventsHighlight(props: EventsHighlightProps) {
  return <div ref={props.targetRef}>{EventsGrid("All", "What's In Store")}</div>;
}
