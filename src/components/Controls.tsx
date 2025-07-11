import {IoCheckmarkOutline, IoChevronForwardOutline} from 'react-icons/io5';

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
        {isLastEvent ? (
          <>
            Final Event
            <IoCheckmarkOutline className="btn-icon" />
          </>
        ) : (
          <>
            Next Event
            <IoChevronForwardOutline className="btn-icon" />
          </>
        )}
      </button>
    </div>
  );
};

export default Controls;