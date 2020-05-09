import React from "react";
function List(props) {
  const grocery = props.groceries
  const listItems = grocery.map((grocery) =>
    <li>{grocery.name}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

export default List;


// function List(props) {
//   return (
//     <ul className="list-group">
//       {props.groceries.map(item => (
//         <li className="list-group-item" key={item.id}>
//           {item.name}
//         </li>
//       ))}
//     </ul>
//   );
// }