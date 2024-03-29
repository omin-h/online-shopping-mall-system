import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const searchBar: React.FC = () => (
  <Space direction="vertical">
    <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />

  </Space>
);

export default searchBar;