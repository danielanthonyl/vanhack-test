import * as React from 'react';
import AssemblyLine from './AssemblyLine';

export default function App() {
  return (
    <div className="App">
      <AssemblyLine stages={['Idea', 'Development', 'Testing', 'Deployment']} />
    </div>
  );
}
