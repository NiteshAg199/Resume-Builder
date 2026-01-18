// import { useDrag } from "react-dnd";
// import { COMPONENT_MAP } from "../utility/Registry";

// export default function DraggableItem({ item }) {
//   const [{ isDragging }, dragRef] = useDrag(() => ({
//     type: "COMPONENT",
//     item, // whole item object
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   }));

//   const Component = COMPONENT_MAP[item.type];

//   return (
//     <div
//       ref={dragRef}
//       style={{
//         opacity: isDragging ? 0.5 : 1,
//         padding: 10,
//         marginBottom: 10,
//         background: "#f1f1f1",
//       }}
//     >
//       <Component {...item.props} />
//     </div>
//   );
// }


import { useDrag } from "react-dnd";
import { COMPONENT_MAP } from "../utility/Registry";

export default function DraggableItem({ item }) {
  const [{ isDragging }, dragRef] = useDrag({
    type: "ITEM",
    item: item, // pass whole object
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const Component = COMPONENT_MAP[item.type];
  console.log(Component,"Hi i am a component")
  return (
    <div
      ref={dragRef}
      style={{
        opacity: isDragging ? 0.4 : 1,
        padding: 10,
        marginBottom: 5,
        // background: "#eee",
        border: "0.5px solid #ccc",
      }}
    >
      <Component {...item.props} />
    </div>
  );
}
