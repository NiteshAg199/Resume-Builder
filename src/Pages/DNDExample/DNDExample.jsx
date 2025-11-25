// dnd-kit React sortable list example
// Save as e.g. SortableList.jsx and import into your app.
// Install: npm install @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities

import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function SortableItem({ id, children }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    touchAction: 'none', // helps on mobile
    opacity: isDragging ? 0.8 : 1,
    boxShadow: isDragging ? '0 8px 20px rgba(0,0,0,0.12)' : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="p-3 bg-white rounded-md border cursor-move select-none"
    >
      {children}
    </div>
  );
}

export default function SortableList() {
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']);

  const sensors = useSensors(useSensor(PointerSensor));

  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setItems((items) => {
      const oldIndex = items.indexOf(active.id);
      const newIndex = items.indexOf(over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">dnd-kit — Sortable list</h2>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <div className="space-y-2">
            {items.map((id) => (
              <SortableItem key={id} id={id}>
                <div className="flex items-center justify-between">
                  <span>{id}</span>
                  <span className="text-sm text-gray-400">≡</span>
                </div>
              </SortableItem>
            ))}
          </div>
        </SortableContext>
      </DndContext>

      <div className="mt-6 text-sm text-gray-600">
        <strong>Tip:</strong> add keyboard/accessibility support by including the KeyboardSensor
        from <code>@dnd-kit/core</code> and handling sensors accordingly.
      </div>
    </div>
  );
}
