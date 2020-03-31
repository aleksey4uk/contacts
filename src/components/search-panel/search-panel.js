import React from 'react';
import { Input } from 'antd';


const { Search } = Input;

const SearchPanel = (props) => {
  const { search } = props;
  return (
    <div>
      <Search
        placeholder="Поиск контакта.."
        enterButton="Search"
        size="large"
        onSearch={value => search(value)}
        onChange={(e) => search(e.target.value)}
      />
    </div>
  )
}
export default SearchPanel;
