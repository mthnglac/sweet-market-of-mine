import { useTypedSelector, useTypedDispatch } from "../../../../hooks";
import { incrementPage, decrementPage } from "../../../site/slices/siteSlice";
import { Container } from "./pagination.styles";

export function Pagination() {
  const dispatch = useTypedDispatch();
  const page = useTypedSelector((state) => state.site.page);

  const handleIncrementPage = () => dispatch(incrementPage());
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
