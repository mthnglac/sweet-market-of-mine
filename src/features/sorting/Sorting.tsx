import { useTypedDispatch } from "../../common/hooks";
import { setPage, setSorting, setOrdering } from "../site/siteSlice";

function Sorting() {
  const dispatch = useTypedDispatch();

  const handleSortingPriceLowToHigh = () => {
    dispatch(setPage(1))
    dispatch(setSorting("price"))
    dispatch(setOrdering("asc"))
  }
  const handleSortingPriceHighToLow = () => {
    dispatch(setPage(1))
    dispatch(setSorting("price"))
    dispatch(setOrdering("desc"))
  }
  const handleSortingNewToOld = () => {
    dispatch(setPage(1))
    dispatch(setSorting("added"))
    dispatch(setOrdering("desc"))
  }
  const handleSortingOldToNew = () => {
    dispatch(setPage(1))
    dispatch(setSorting("added"))
    dispatch(setOrdering("asc"))
  }

  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <h2>Sorting</h2>
      <button onClick={handleSortingPriceLowToHigh}>Price low to high</button>
      <button onClick={handleSortingPriceHighToLow}>Price high to low</button>
      <button onClick={handleSortingNewToOld}>New to old</button>
      <button onClick={handleSortingOldToNew}>Old to new</button>
    </div>
  );
}

export default Sorting;
