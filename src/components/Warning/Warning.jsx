import React from 'react'
import { Alert, Space } from 'antd'
const Warning = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Alert
      message="Внимание!"
      description="Фильмов по указанному поиску не нашлось."
      type="warning"
      showIcon
      closable
    />
  </Space>
)
export default Warning
