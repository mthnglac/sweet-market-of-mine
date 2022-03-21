import { useTypedDispatch, useTypedSelector } from "../../../../hooks";
import { setItemTypeToggle } from "../../slices/itemsSlice";
import { Container, Title } from './item-type-toggle.styles'
import { Button } from '../../../../common/components'

export function ItemTypeToggle() {
  const typeToggle = useTypedSelector((state) => state.items.typeToggle);
  const dispatch = useTypedDispatch();

  const handleClick = (toggleType: "mug" | "shirt") => () => {
    dispatch(setItemTypeToggle(toggleType))
  }

  return (
    <Container>
      <Title>Item Type</Title>

      <div style={{ display: "flex", alignItems: "center" }}>
        <Button active={ typeToggle === "mug" } onClick={handleClick("mug")} text="Mug" width={90} height={35} />
        <Button active={ typeToggle === "shirt" } onClick={handleClick("shirt")} text="Shirt" width={90} height={35} />
      </div>
    </Container>
  );
}
