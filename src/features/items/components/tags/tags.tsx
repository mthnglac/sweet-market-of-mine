import { useEffect, useState } from "react";
import { setTags } from "../../../site/slices/siteSlice";
import { useTypedSelector, useTypedDispatch } from "../../../../hooks";
import { pushSelection, removeSelection, resetSelections } from "./tagsSlice";
import type { Item } from "../../types/items.types";
import { Container } from "./tags.styles"
import _ from "lodash";

export function Tags() {
  const items = useTypedSelector((state) => state.items.allValue);
  const selections = useTypedSelector((state) => state.tags.selections);
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
          placeholder="Search tag"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    );
  };

  const handleCheckboxChange = (tag: string) => {
    const foundTag = selections.indexOf(tag);

    if (foundTag === -1) {
      dispatch(pushSelection(tag));
    } else {
      dispatch(removeSelection(foundTag));
    }
  };

  const checkboxItems = () => {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'red',}}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            checked={!selections.length}
            onChange={() => {
              if (selections.length) {
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
          .map(([tag, usage]: [tag: string, usage: number], index: number) => (
            <div key={index} style={{ display: "flex", alignItems: "center" }}>
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
    <Container>
      {searchBar()}
      {checkboxItems()}
    </Container>
  );
}
