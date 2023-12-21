"use client";
import React from 'react';
import { styled } from 'styled-components';
import { useFilter } from '@/hooks/useFilter';

// imports de icons
import { AllFoodsIcon } from '@/assets/icons/filter-icons/AllFoodsIcon';
import { BeefIcon } from '@/assets/icons/filter-icons/BeefIcon';
import { BreakfastIcon } from '@/assets/icons/filter-icons/BreakfastIcon';
import { ChickenIcon } from '@/assets/icons/filter-icons/ChickenIcon';
import { DessertIcon } from '@/assets/icons/filter-icons/DessertIcon';
import { GoatIcon } from '@/assets/icons/filter-icons/GoatIcon';


const FilterListStyled = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  align-items: center;
  gap: 10px;
  list-style: none;
  width: 100%;
  max-width: 700px;

  @media (min-width: ${props => props.theme.desktopFiltersBreakpoint}) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
`

const FilterItemStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
  border-bottom: ${({ selected }) => selected ? '4px solid var(--selected-filter)' : 'none'};

  &:hover {
    transform: scale(1.10);
    transition: 0.5s;
    z-index: 1;
    cursor: pointer;
  }

  > svg {
    width: 100px;
    height: 100px;
  }
`;

function FilterByType() {
  const { filterType, setFilterType }= useFilter();

  const handleChangeType = (value) => {
    setFilterType(value);
  }

  return (
    <FilterListStyled>
        <FilterItemStyled selected={filterType === 'All'} onClick={ () => handleChangeType("All")}><AllFoodsIcon /></FilterItemStyled>
        <FilterItemStyled selected={filterType === 'Beef'} onClick={ () => handleChangeType('Beef')}><BeefIcon /></FilterItemStyled>
        <FilterItemStyled selected={filterType === 'Breakfast'} onClick={ () => handleChangeType('Breakfast')}><BreakfastIcon /></FilterItemStyled>
        <FilterItemStyled selected={filterType === 'Chicken'} onClick={ () => handleChangeType('Chicken')}><ChickenIcon /></FilterItemStyled>
        <FilterItemStyled selected={filterType === 'Dessert'} onClick={ () => handleChangeType('Dessert')}><DessertIcon /></FilterItemStyled>
        <FilterItemStyled selected={filterType === 'Goat'} onClick={ () => handleChangeType('Goat')}><GoatIcon /></FilterItemStyled>
    </FilterListStyled>
  );
}

export default FilterByType;