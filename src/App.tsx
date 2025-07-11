import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ScenarioInfo from './components/ScenarioInfo'
import EventList from './components/EventList'
import Controls from './components/Controls'
import scenarioData from './json/exampleScenario.json'

function App() {
  const [activeEventIndex, setActiveEventIndex] = useState(0)
  const [scenario] = useState(scenarioData)

  const handleNextEvent = () => {
    if (activeEventIndex < scenario.scenarioEvents.length - 1) {
      setActiveEventIndex(activeEventIndex + 1)
    }
  }

  const handleEventClick = (index: number) => {
    setActiveEventIndex(index)
  }

  const isLastEvent = activeEventIndex === scenario.scenarioEvents.length - 1

  return (
    <div className="app">
      <Header 
        scenarioName={scenario.scenarioName} 
        scenarioData={{
          scenarioType: scenario.scenarioType,
          scenarioTime: scenario.scenarioTime,
          purpose: scenario.purpose,
          learning_objectives: scenario.learning_objectives,
          required_simulation_tools: scenario.required_simulation_tools,
          intended_participants: scenario.intended_participants
        }}
      />
      <ScenarioInfo scenarioOverview={scenario.scenario_overview} />
      <EventList 
        events={scenario.scenarioEvents}
        activeEventIndex={activeEventIndex}
        onEventClick={handleEventClick}
      />
      <Controls 
        onNextEvent={handleNextEvent}
        isLastEvent={isLastEvent}
      />
    </div>
  )
}

export default App
