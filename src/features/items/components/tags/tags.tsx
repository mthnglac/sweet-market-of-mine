import { useEffect, useState } from "react";
import { setTags } from "../../../site/slices/siteSlice";
import { useTypedDispatch } from "../../../../hooks";
import { pushSelection, removeSelection, resetSelections } from "./tagsSlice";
import type { TagsProps } from "./tags.types";
import type { Item } from "../../types/items.types";
import _ from "lodash";

export function Tags({ items, selections }: TagsProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(setTags(selections));
  }, [dispatch, selections]);

  const tags: string[][] = items.map((item: Item) => item.tags);
  const flattedTags = tags.flat();
  const tagsByUsageCount = _.countBy(flattedTags);

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

  const handleCheckboxChange = (tag: string) => {
    const foundTag = selections.indexOf(tag);

    if (foundTag > -1) {
      dispatch(removeSelection(foundTag));
    } else {
      dispatch(pushSelection(tag));
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
            All <span>{flattedTags.length}</span>
          </p>
        </div>
        {Object.entries(tagsByUsageCount)
          .filter(([tag, usage]: [tag: string, usage: number]) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map(([tag, usage]) => (
            <div key={tag} style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={selections.includes(tag)}
                onChange={() => handleCheckboxChange(tag)}
              ></input>
              <p style={{ margin: 0 }}>
                {tag} <span>{usage}</span>
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