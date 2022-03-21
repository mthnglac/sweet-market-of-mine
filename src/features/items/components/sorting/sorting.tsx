import { useState } from 'react'
import { useTypedDispatch } from "../../../../hooks";
import {
  setPage,
  setSorting,
  setOrdering,
} from "../../../site/slices/siteSlice";
import { Container, RadioButtonContainer } from "./sorting.styles"
import type { SortingType } from "./sorting.types"

export function Sorting() {
  const dispatch = useTypedDispatch();
  const [sortingType, setSortingType] = useState<SortingType>("PLTH")

  const handleSortingPriceLowToHigh = () => {
    dispatch(setPage(1));
    dispatch(setSorting("price"));
    dispatch(setOrdering("asc"));
    setSortingType("PLTH")
  };
  const handleSortingPriceHighToLow = () => {
    dispatch(setPage(1));
    dispatch(setSorting("price"));
    dispatch(setOrdering("desc"));
    setSortingType("PHTL")
  };
  const handleSortingNewToOld = () => {
    dispatch(setPage(1));
    dispatch(setSorting("added"));
    dispatch(setOrdering("desc"));
    setSortingType("NTO")
  };
  const handleSortingOldToNew = () => {
    dispatch(setPage(1));
    dispatch(setSorting("added"));
    dispatch(setOrdering("asc"));
    setSortingType("OTN")
  };

  const RadioButton = ({ label, value, onChange }: any) => {
    return (
      <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <input style={{ margin: 0 }} type="radio" checked={value} onChange={onChange} />
        <span style={{ marginLeft: "10px" }}>{label}</span>
      </label>
    )
  }

  return (
    <Container>
      <h2>Sorting</h2>

      <RadioButtonContainer>
        <RadioButton label="Price low to high" value={sortingType === 'PLTH'} onChange={handleSortingPriceLowToHigh} />
        <RadioButton label="Price high to low" value={sortingType === 'PHTL'} onChange={handleSortingPriceHighToLow} />
        <RadioButton label="New to old" value={sortingType === 'NTO'} onChange={handleSortingNewToOld} />
        <RadioButton label="Old to new" value={sortingType === 'OTN'} onChange={handleSortingOldToNew} />
      </RadioButtonContainer>
    </Container>
  );
}
