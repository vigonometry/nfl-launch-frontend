import { useScrollIntoView } from "@mantine/hooks";
import { useRef } from "react";
import { EventsHighlight } from "./EventsHighlight";
import { Hero } from "./Hero";

export function HomePage() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>()
  return (
    <div>
      <Hero onClick={() => scrollIntoView()}/>
      <EventsHighlight targetRef={targetRef}/>
    </div>
  );
}
