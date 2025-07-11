interface EventCardProps {
  event: {
    description: string;
    parameters: {
      hr: number;
      bpSys: number;
      bpDia: number;
      spo2: number;
      respRate: number;
      temp?: number;
    };
  };
  isActive: boolean;
  onClick: () => void;
  stepNumber: number;
}

const EventCard = ({ event, isActive, onClick, stepNumber }: EventCardProps) => {
  const { description, parameters } = event;
  
  return (
    <div 
      className={`event-card ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="event-header">
        <div className="step-number">{stepNumber}</div>
        <h3 className="event-title">{description}</h3>
      </div>
      <div className="vital-signs">
        <div className="vital-sign">
          <span className="vital-label">HR:</span>
          <span className="vital-value">{parameters.hr}</span>
        </div>
        <div className="vital-sign">
          <span className="vital-label">BP:</span>
          <span className="vital-value">{parameters.bpSys}/{parameters.bpDia}</span>
        </div>
        <div className="vital-sign">
          <span className="vital-label">SpO2:</span>
          <span className="vital-value">{parameters.spo2}%</span>
        </div>
        <div className="vital-sign">
          <span className="vital-label">RR:</span>
          <span className="vital-value">{parameters.respRate}</span>
        </div>
        {parameters.temp && (
          <div className="vital-sign">
            <span className="vital-label">Temp:</span>
            <span className="vital-value">{parameters.temp}°C</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;