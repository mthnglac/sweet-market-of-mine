import { useEffect, useState } from "react";
import { setTags } from "../../../site/slices/siteSlice";
import { useTypedSelector, useTypedDispatch } from "../../../../hooks";
import { pushSelection, removeSelection, resetSelections } from "./tagsSlice";
import type { Item } from "../../types/items.types";
import { Card, CheckBox, SearchBar } from "../../../../common/components";
import { Container, Title } from "./tags.styles"
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

  const handleCheckboxChange = (tag: string) => () => {
    const foundTag = selections.indexOf(tag);

    if (foundTag === -1) {
      dispatch(pushSelection(tag));
    } else {
      dispatch(removeSelection(foundTag));
    }
  };

  const checkboxItems = () => {
    return (
      <div style={{ width: '100%', height: '142px', overflowY: 'scroll' }}>
        <CheckBox
          label="All"
          helperLabel={flattedTags.length.toString()}
          checked={!selections.length}
          onChange={() => {
            if (selections.length) {
              dispatch(resetSelections());
            }
          }}
        />
        {Object.entries(tagsByUsageCount)
          .filter(([tag, usage]: [tag: string, usage: number]) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map(([tag, usage]: [tag: string, usage: number], index: number) => (
            <CheckBox
              key={index}
              label={tag}
              helperLabel={usage.toString()}
              checked={selections.includes(tag)}
              onChange={handleCheckboxChange(tag)}
            />
          ))}
      </div>
    );
  };

  return (
    <Container>
      <Title>Tags</Title>

      <Card>
        <SearchBar placeholder="Search tag" onChange={(e) => setSearchQuery(e.target.value)} />
        {checkboxItems()}
      </Card>
    </Container>
  );
}
