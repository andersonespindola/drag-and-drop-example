import React, { useState } from 'react'

import './App.css'

function App() {
  /**
   * Actual box.
   */
  const [actualBox, setActualBox] = useState<string>()

  /**
   * Not reload page.
   */
  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  /**
   * Drag component.
   */
  const drag = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', event.currentTarget.id)
  }

  /**
   * Drop component.
   */
  const drop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const elementId = event.dataTransfer.getData('text')

    const element = document.getElementById(elementId)

    if (element) {
      setActualBox(event.currentTarget.id)
      event.currentTarget.appendChild(element)
    }
  }

  /**
   * JSX.
   */
  return (
    <>
      <span id="drag" draggable="true" onDragStart={drag}>
        Me arraste para uma caixa
      </span>

      <div id="box1" onDrop={drop} onDragOver={allowDrop}></div>
      <div id="box2" onDrop={drop} onDragOver={allowDrop}></div>
      <div id="box3" onDrop={drop} onDragOver={allowDrop}></div>
      <div id="box4" onDrop={drop} onDragOver={allowDrop}></div>

      <span>Caixa selecionada: {actualBox || 'Nenhuma'}</span>
    </>
  )
}

export default App
