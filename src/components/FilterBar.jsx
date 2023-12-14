"use client";
import React from 'react';
import FilterByType from './FilterByType';
import styled from 'styled-components';

const FilterContainerStyled = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`
function FilterBar() {
  return (
    <FilterByType />
  )
}

export default FilterBar;