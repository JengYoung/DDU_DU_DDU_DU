import { TDraggableEvent } from "./Draggable.types";

export type TReceiverProps = {
  width?: string;
  height?: string;
  reversed?: boolean;
  isActive?: boolean;
  onDragOver: TDraggableEvent;
  onDrop: TDraggableEvent;
} & React.PropsWithChildren