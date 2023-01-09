import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

/**


  const onMoveItem = (event, assemblyIndex, assemblyItemIndex) => {
    const leftButton = event.button === 0;
    const rightButton = event.button === 2;

    const shouldDeleteItem = leftButton
      ? stages.length - 1 === assemblyIndex
      : rightButton
      ? assemblyIndex === 0
      : null;

    const assemblyLineListCopy = [...assemblyLineList];
    const removedItem = assemblyLineListCopy[assemblyIndex].splice(
      assemblyItemIndex,
      1
    )[0];

    if (!removedItem) return;

    if (shouldDeleteItem) {
      assemblyLineListCopy[assemblyIndex].filter(
        (_, index) => index !== assemblyItemIndex
      );

      setAssemblyLineList(assemblyLineListCopy);

      return;
    }

    if (leftButton) {
      assemblyLineListCopy[assemblyIndex + 1].unshift(removedItem);
    } else if (rightButton) {
      assemblyLineListCopy[assemblyIndex - 1].push(removedItem);
    }

    setAssemblyLineList(assemblyLineListCopy);
  };

 */
