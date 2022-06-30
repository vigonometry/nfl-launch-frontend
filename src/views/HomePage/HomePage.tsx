import { useRef } from "react";
import { EventsHighlight } from "./EventsHighlight";
import { Hero } from "./Hero";

export function HomePage() {
  return (
    <div>
      <Hero />
      <EventsHighlight />
    </div>
  );
}
