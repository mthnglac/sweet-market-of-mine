import { useTypedDispatch, useTypedSelector } from "../../../../hooks";
import { setItemTypeToggle } from "../../slices/itemsSlice";

export function ItemTypeToggle() {
  const typeToggle = useTypedSelector((state) => state.items.typeToggle);
  const dispatch = useTypedDispatch();

  return (
    <div>
      <h2>Item Type</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          style={{ backgroundColor: typeToggle === "mug" ? "red" : "white" }}
          onClick={() => dispatch(setItemTypeToggle("mug"))}
        >
          Mug
        </button>
        <button
          style={{ backgroundColor: typeToggle === "shirt" ? "red" : "white" }}
          onClick={() => dispatch(setItemTypeToggle("shirt"))}
        >
          Shirt
        </button>
      </div>
    </div>
  );
}
