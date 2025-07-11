interface ScenarioInfoProps {
  scenarioOverview: string;
}

const ScenarioInfo = ({ scenarioOverview }: ScenarioInfoProps) => {
  return (
    <div className="scenario-info">
      <p className="scenario-overview">{scenarioOverview}</p>
    </div>
  );
};

export default ScenarioInfo;