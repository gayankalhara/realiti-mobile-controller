import { useEffect, useRef } from 'react';
import EventCard from './EventCard';

interface EventListProps {
  events: Array<{
    description: string;
    parameters: {
      hr: number;
      bpSys: number;
      bpDia: number;
      spo2: number;
      respRate: number;
      temp?: number;
    };
  }>;
  activeEventIndex: number;
  onEventClick: (index: number) => void;
}

const EventList = ({ events, activeEventIndex, onEventClick }: EventListProps) => {
  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to active event when activeEventIndex changes
    if (eventRefs.current[activeEventIndex]) {
      const activeElement = eventRefs.current[activeEventIndex];
      
      console.log('Scrolling to event:', activeEventIndex);
      console.log('Active element:', activeElement);
      
      // Small delay to ensure DOM is fully rendered
      setTimeout(() => {
        activeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest'
        });
      }, 100);
    }
  }, [activeEventIndex]);

  return (
    <div className="event-list" ref={containerRef}>
      {events.map((event, index) => (
        <div
          key={index}
          ref={el => {
            eventRefs.current[index] = el;
          }}
        >
          <EventCard
            event={event}
            isActive={index === activeEventIndex}
            onClick={() => onEventClick(index)}
            stepNumber={index + 1}
          />
        </div>
      ))}
    </div>
  );
};

export default EventList;