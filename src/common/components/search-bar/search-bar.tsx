import { SearchBarProps } from "./search-bar.types";
import { Container } from "./search-bar.styles";

export function SearchBar({ placeholder, onChange }: SearchBarProps) {
  return (
    <Container style={{ display: "flex", alignItems: "center" }}>
      <input
        placeholder="Search brand"
        onChange={onChange}
        />
    </Container>
  );
}
