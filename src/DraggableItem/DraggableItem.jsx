import { useDrag } from "react-dnd";
import { COMPONENT_MAP } from "../utility/Registry";

export default function DraggableItem({ widthLen,dataComponent,item }) {
  const [{ isDragging }, dragRef] = useDrag({
    type: "ITEM",
    item: item, // pass whole object
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const Component = COMPONENT_MAP[item.type];
  console.log("Hi i am a component inside draggable",item)
  return (
    <div
      ref={dragRef}
      style={{
        opacity: isDragging ? 0.4 : 1,
        padding: 10,
        marginBottom: 5,
        border: `${widthLen==100?0:0.5}px solid #ccc`,
      }}
    >
      <Component dataComponent={dataComponent} />
    </div>
  );
}
