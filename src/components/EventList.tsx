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
  return (
    <div className="event-list">
      {events.map((event, index) => (
        <EventCard
          key={index}
          event={event}
          isActive={index === activeEventIndex}
          onClick={() => onEventClick(index)}
        />
      ))}
    </div>
  );
};

export default EventList;