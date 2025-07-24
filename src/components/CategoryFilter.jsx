import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'Clothing series', label: 'Clothing series' },//服饰系列
  { value: 'Household goods', label: 'Household goods' },//家居用品
  { value: 'Accessories and daily necessities', label: 'Accessories and daily necessities' },// 配饰与日用
  { value: 'Stationery series', label: 'Stationery series' },//文具系列
  { value: 'Creative stationery', label: 'Creative stationery' },//创意文具
  { value: 'Digital peripheral', label: 'Digital peripheral' },//数码周边
  { value: 'Handicrafts', label: 'Handicrafts' },//手工艺品
  { value: 'Performance and event supplies', label: 'Performance and event supplies' },//演出与活动用品
];

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <Select value={selectedCategory} onValueChange={onCategoryChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.map(category => (
          <SelectItem key={category.value} value={category.value}>
            {category.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CategoryFilter;
