// import { useDrop } from "react-dnd";
// import DraggableItem from "../DraggableItem/DraggableItem";

// export default function DropContainer({ items, setItems, otherItems, setOtherItems, title }) {
//   const [, dropRef] = useDrop(() => ({
//     accept: "COMPONENT",
//     drop: (dragged) => {
//       // Avoid duplicates
//       if (!items.find((i) => i.id === dragged.id)) {
//         setOtherItems(otherItems.filter(i => i.id !== dragged.id));
//         setItems([...items, dragged]);
//       }
//     }
//   }));

//   return (
//     <div
//       ref={dropRef}
//       style={{
//         border: "2px dashed gray",
//         minHeight: 200,
//         width: "60vw",
//         padding: 15,
//       }}
//     >
//       <h3>{title}</h3>

//       {items.map((item) => (
//         <DraggableItem key={item.id} item={item} />
//       ))}
//     </div>
//   );
// }
import { useDrop } from "react-dnd";
import DraggableItem from "../DraggableItem/DraggableItem";

export default function DropContainer({ items, setItems, otherItems, setOtherItems, title ,widthLen}) {
  const [, dropRef] = useDrop({
    accept: "ITEM",
    drop: (dragged) => {
      if (!items.find((i) => i.id === dragged.id)) {
        setOtherItems(otherItems.filter(i => i.id !== dragged.id));
        setItems([...items, dragged]);
      }
    }
  });

  return (
    <div
      ref={dropRef}
      style={{
        width: `${widthLen}vw`,
        minHeight: 300,
        padding: 20,
        border: "2px dashed #aaa",
      }}
    >
      <h3>{title}</h3>

      {items.map((item) => (
        <DraggableItem key={item.id} item={item} />
      ))}
    </div>
  );
}
