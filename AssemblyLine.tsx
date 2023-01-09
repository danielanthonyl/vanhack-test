import React, { useState } from 'react';
import './style.scss';

const AssemblyLine = ({ stages = [] }) => {
  const [text, setText] = useState('');

  const [assemblyLineList, setAssemblyLineList] = useState(() =>
    stages.map(() => [])
  );

  const changeHandler = ({ target: { value } }) => {
    setText(value);
  };

  const onAddItem = ({ key }) => {
    if (key === 'Enter' && text) {
      const assemblyLineListCopy = [...assemblyLineList];
      assemblyLineListCopy[0].unshift(text);
      setAssemblyLineList(assemblyLineListCopy);
      setText('');
    }
  };

  const onMoveItem = (assemblyIndex, assemblyItemIndex, isRightClick) => {
    const shouldDeleteItem = isRightClick
      ? stages.length - 1 === assemblyIndex
      : assemblyIndex === 0;

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

    isRightClick
      ? assemblyLineListCopy[assemblyIndex + 1].unshift(removedItem)
      : assemblyLineListCopy[assemblyIndex - 1].push(removedItem);

    setAssemblyLineList(assemblyLineListCopy);
  };

  return (
    <div className="assembly">
      <p className="assembly-add-item-paragraph">Add an item: &nbsp;</p>
      <input
        onKeyPress={onAddItem}
        className="assembly-add-item"
        value={text}
        onChange={changeHandler}
      />
      <hr />

      <div className="assembly-stage-container">
        {assemblyLineList.map((_, assemblyIndex) => (
          <div>
            <h3>{stages[assemblyIndex]}</h3>

            <div className="assembly-stage" key={Date.now() * Math.random()}>
              {assemblyLineList[assemblyIndex].map(
                (item, assemblyItemIndex) => (
                  <button
                    className="assembly-item"
                    key={Date.now() * Math.random()}
                    onClick={(event) =>
                      onMoveItem(assemblyIndex, assemblyItemIndex, true)
                    }
                    onContextMenu={(event) =>
                      onMoveItem(assemblyIndex, assemblyItemIndex, false)
                    }
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssemblyLine;
