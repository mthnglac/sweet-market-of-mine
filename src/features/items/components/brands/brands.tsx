import { useEffect, useState } from "react";
import { setBrands } from "../../../site/slices/siteSlice";
import { useTypedSelector, useTypedDispatch } from "../../../../hooks";
import { pushSelection, removeSelection, resetSelections } from "./brandsSlice";
import type { Item } from "../../types/items.types";
import _ from "lodash";

export function Brands() {
  const selections = useTypedSelector((state) => state.brands.selections);
  const items = useTypedSelector((state) => state.items.allValue);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(setBrands(selections));
  }, [dispatch, selections]);

  const manufacturers: string[] = items.map((item: Item) => item.manufacturer);
  const manufacturersByUsageCount = _.countBy(manufacturers);

  const searchBar = () => {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          placeholder="Search brand"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    );
  };

  const handleCheckboxChange = (manufacturer: string) => {
    const foundManufacturer = selections.indexOf(manufacturer);

    if (foundManufacturer > -1) {
      dispatch(removeSelection(foundManufacturer));
    } else {
      dispatch(pushSelection(manufacturer));
    }
  };

  const checkboxItems = () => {
    return (
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            checked={!selections.length}
            onChange={() => {
              if (!!selections.length) {
                dispatch(resetSelections());
              }
            }}
          ></input>
          <p style={{ margin: 0 }}>
            All <span>{manufacturers.length}</span>
          </p>
        </div>
        {Object.entries(manufacturersByUsageCount)
          .filter(
            ([manufacturer, usage]: [manufacturer: string, usage: number]) =>
              manufacturer.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map(([manufacturer, usage]) => (
            <div
              key={manufacturer}
              style={{ display: "flex", alignItems: "center" }}
            >
              <input
                type="checkbox"
                checked={selections.includes(manufacturer)}
                onChange={() => handleCheckboxChange(manufacturer)}
              ></input>
              <p style={{ margin: 0 }}>
                {manufacturer} <span>{usage}</span>
              </p>
            </div>
          ))}
      </div>
    );
  };

  return (
    <div>
      {searchBar()}
      {checkboxItems()}
    </div>
  );
}
