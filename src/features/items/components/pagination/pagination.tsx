import { useTypedSelector, useTypedDispatch } from "../../../../hooks";
import { incrementPage, decrementPage } from "../../../site/slices/siteSlice";
import { Container } from "./pagination.styles";

export function Pagination() {
  const dispatch = useTypedDispatch();
  const { page, limit } = useTypedSelector((state) => state.site);
  const filteredValueTotalCount = useTypedSelector(
    (state) => state.items.filteredValueTotalCount
  );

  const handleIncrementPage = () => {
    if (page < Math.floor(filteredValueTotalCount / limit)) {
      dispatch(incrementPage());
    }
  };
  const handleDecrementPage = () => {
    if (page > 1) {
      dispatch(decrementPage());
    }
  };

  return (
    <Container>
      <h2>Pagination</h2>
      <button onClick={handleDecrementPage}>prev page</button>
      <button onClick={handleIncrementPage}>next page</button>
    </Container>
  );
}
