import { useTypedSelector, useTypedDispatch } from "../../../../common/hooks";
import { incrementPage, decrementPage } from "../../../site/slices/siteSlice";
import { Container } from "./pagination.styles";
import { Button } from "../../../../common/components";

export function Pagination() {
  const dispatch = useTypedDispatch();
  const { page, limit } = useTypedSelector((state) => state.site);
  const filteredValueTotalCount = useTypedSelector(
    (state) => state.items.filteredValueTotalCount
  );

  const calculatePageCount = (totalCount: number, limit: number) => {
    return Math.floor(totalCount / limit);
  };

  const handleIncrementPage = () => {
    if (page < calculatePageCount(filteredValueTotalCount, limit)) {
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
      <Button
        active={true}
        height={30}
        text="Prev"
        onClick={handleDecrementPage}
      />
      <Button
        active={true}
        height={30}
        text="Next"
        onClick={handleIncrementPage}
      />
    </Container>
  );
}
