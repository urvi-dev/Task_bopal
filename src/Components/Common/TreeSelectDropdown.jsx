import React, { useMemo, useState } from 'react';
import { TreeSelect } from 'antd';
import { useTranslation } from "react-i18next";
const TreeSelectDropdown = ({ treeData, onChange, value }) => {
  const [searchValue, setSearchValue] = useState('');

  const filterTreeNode = (node) => {
    if (node.title?.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }
    if (node.children) {
      return node.children.some(filterTreeNode);
    }
    return false;
  };

  const filteredTreeData = useMemo(() => treeData.filter(filterTreeNode), [treeData, searchValue]);
const {t}= useTranslation()
  return (
    <TreeSelect
      showSearch
      style={{
        width: '100%',
      }}
      value={value || undefined}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      searchValue={searchValue}
      onSearch={(value) => setSearchValue(value)}
      placeholder={t("Please select Categories")}
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
      treeData={filteredTreeData}
      filterTreeNode={false}
      treeNodeFilterProp="title"
    />
  );
};

export default TreeSelectDropdown;