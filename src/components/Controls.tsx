interface ControlsProps {
  onNextEvent: () => void;
  isLastEvent: boolean;
}

const Controls = ({ onNextEvent, isLastEvent }: ControlsProps) => {
  return (
    <div className="controls">
      <button 
        className="next-event-btn"
        onClick={onNextEvent}
        disabled={isLastEvent}
      >
        {isLastEvent ? 'Final Event' : 'Next Event'}
      </button>
    </div>
  );
};

export default Controls;