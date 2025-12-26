import react from "react";
import { useState } from "react";
import Parse from "parse";
import SearchIcon from "../../assets/icons_app/search.svg?react";
import LocationIcon from "../../assets/icons_app/map-pin.svg?react";
import FilterIcon from "../../assets/icons_app/filter-icon.svg?react";
import {
  FilterWrapper,
  FilterHeader,
  Icon,
  FilterTitle,
  FilterBody,
  Section,
  Label,
  TextInput,
  Select,
  Buttons,
  ApplyButton,
  ResetButton,
} from "../styled/feed-style-comp/Filter.styled.jsx";
import { useCategories } from "../../hooks/useCategories";

export default function Filter({ onApply = () => {}, onReset = () => {} }) {
  const [query, setQuery] = react.useState("");
  const [category, setCategory] = useState("");
  const [priceType, setPriceType] = useState("");
  const [location, setLocation] = useState("");

  const { categories } = useCategories();

  function handleApply(e) {
    e.preventDefault();
    onApply({ query, category, priceType, location });
  }

  function handleReset(e) {
    e.preventDefault();
    setQuery("");
    setCategory("");
    setPriceType("");
    setLocation("");
    onReset();
  }

  return (
    <FilterWrapper>
      <FilterHeader>
        <Icon>
          <FilterIcon />
        </Icon>
        <FilterTitle>Filters</FilterTitle>
      </FilterHeader>

      <FilterBody as="form" onSubmit={handleApply}>
        <Section>
          <Label>Search</Label>
          <TextInput>
            <span className="left-icon">
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder="Search activities..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </TextInput>
        </Section>

        <Section>
          <Label>Category</Label>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </Select>
        </Section>

        <Section>
          <Label>Price</Label>
          <Select
            value={priceType}
            onChange={(e) => setPriceType(e.target.value)}
          >
            <option value="">All Prices</option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </Select>
        </Section>

        <Section>
          <Label>Location</Label>
          <TextInput>
            <span className="left-icon">
              <LocationIcon />
            </span>
            <input
              type="text"
              placeholder="Enter location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </TextInput>
        </Section>

        <Buttons>
          <ApplyButton type="submit">Apply Filters</ApplyButton>
          <ResetButton type="button" onClick={handleReset}>
            Reset Filters
          </ResetButton>
        </Buttons>
      </FilterBody>
    </FilterWrapper>
  );
}
