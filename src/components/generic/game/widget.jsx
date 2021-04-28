import React, {useState} from 'react';
import {
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

export function WidgetContainer(props) {
  return (
    <div className="grid grid-cols-12 gap-6 mb-8 w-full items-stretch">
      <DndContext>
        <SortableContext>
          {props.children}
        </SortableContext>
      </DndContext>
    </div>
  );
}

export function Widget(props) {
  return (
    <div className={"p-2 xl:p-4 rounded-md shadow-md " + props.css}>
      {props.children}
    </div>
  );
}