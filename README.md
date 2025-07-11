# REALITi Mobile Scenario Controller

A mobile-first React application for controlling medical simulation scenarios. This prototype allows facilitators to navigate through scenario events with an intuitive, touch-optimized interface.

## Features

- **Scenario Overview**: Display scenario name and description
- **Event Navigation**: Sequential navigation through scenario events
- **Active Event Indication**: Clear visual indication of current active event
- **Direct Event Access**: Tap any event to jump directly to it
- **Mobile-Optimized**: Responsive design for phones and tablets
- **Touch-Friendly**: Large buttons and touch targets for easy interaction

## Setup Instructions

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   The local development server will run at `http://localhost:5173` by default, or as specified in the terminal output.

3. **Build for production**:
   ```bash
   npm run build
   ```

## Component Structure

- `App.tsx` - Main application component with state management
- `Header.tsx` - Scenario name display
- `ScenarioInfo.tsx` - Scenario overview card
- `EventList.tsx` - Container for event cards
- `EventCard.tsx` - Individual event display with vital signs
- `Controls.tsx` - Navigation controls

## Data Structure

The application consumes `src/json/exampleScenario.json` which includes:
- Scenario metadata (name, overview, etc.)
- Array of scenario events with vital signs parameters
- Each event contains description and vital signs (HR, BP, SpO2, RR, Temp)

## Key Features Implementation

### State Management
- `activeEventIndex` tracks current active event (starts at 0)
- Event navigation updates this index
- First event is active by default

### Navigation
- **Next Event Button**: Advances to next event sequentially
- **Direct Event Access**: Tap any event card to activate it
- **Boundary Handling**: Button becomes disabled/changes text at final event

### Mobile Optimization
- Responsive grid layout for vital signs
- Touch-friendly button sizing (minimum 44px)
- Smooth scrolling with momentum on iOS
- Optimized font sizes for different screen sizes

## Browser Support

- Modern browsers with ES6+ support
- iOS Safari 12+
- Android Chrome 70+
- Responsive design works on devices from 320px to 1200px width

## Development Notes

Built with:
- React 18 + TypeScript
- Vite build tool
- CSS custom properties for theming
- Mobile-first responsive design
- Accessibility considerations (focus states, reduced motion support)

## AI Development Process

This project was developed with the assistance of AI tools:

### AI Tool Usage
- **Gemini 2.5 Pro**: Used to Evaluate the Requirements:
   - I used this mainly to evaluate the requirements, come up with design ideas, and double-check if my approach matched the expectations and branding guidelines. It also helped provide some initial visual direction.


- **Claude Sonnet 4**: Primary development assistant for:
  - This was my main assistant throughout the actual development. I used it to structure component architecture, implement React logic, handle responsive CSS styling, and resolve TypeScript errors. It also helped with optimizing the code and sticking to best practices.

### Design Decisions
- I went with a stacked layout because it’s much easier to follow and navigate between different sections without losing context. When navigating between events, the view automatically scrolls down to bring the currently active event into focus, which makes the user experience a bit smoother.
- In the header section, I included an expand icon that shows more details on click. It’s hidden by default to keep the interface clean and distraction-free.
- The overall layout was built with a mobile-first approach in mind. While it’s fully functional on smaller screens, it can also be extended easily to support tablets and larger displays.