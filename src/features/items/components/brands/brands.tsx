import { useEffect, useState } from "react";
import { setBrands } from "../../../site/slices/siteSlice";
import { useTypedSelector, useTypedDispatch } from "../../../../hooks";
import { pushSelection, removeSelection, resetSelections } from "./brandsSlice";
import type { Item } from "../../types/items.types";
import _ from "lodash";
import { Card, CheckBox, SearchBar } from "../../../../common/components";
import { Container, Title } from "./brands.styles";

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

  const handleCheckboxChange = (manufacturer: string) => () => {
    const foundManufacturer = selections.indexOf(manufacturer);

    if (foundManufacturer === -1) {
      dispatch(pushSelection(manufacturer));
    } else {
      dispatch(removeSelection(foundManufacturer));
    }
  };

  const checkboxItems = () => {
    return (
      <div style={{ width: '100%', height: '142px', overflowY: 'scroll' }}>
        <CheckBox
          label="All"
          helperLabel={manufacturers.length.toString()}
          checked={!selections.length}
          onChange={() => {
            if (selections.length) {
              dispatch(resetSelections());
            }
          }}
        />
        {Object.entries(manufacturersByUsageCount)
          .filter(
            ([manufacturer, usage]: [manufacturer: string, usage: number]) =>
              manufacturer.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map(
            (
              [manufacturer, usage]: [manufacturer: string, usage: number],
              index: number
            ) => (
              <CheckBox
                key={index}
                label={manufacturer}
                helperLabel={usage.toString()}
                checked={selections.includes(manufacturer)}
                onChange={handleCheckboxChange(manufacturer)}
              />
            )
          )}
      </div>
    );
  };

  return (
    <Container>
      <Title>Brands</Title>

      <Card>
        <SearchBar placeholder="Search brand" onChange={(e) => setSearchQuery(e.target.value)} />
        {checkboxItems()}
      </Card>
    </Container>
  );
}
