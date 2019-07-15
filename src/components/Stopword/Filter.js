import React from 'react';
import { Select, Row, Col, Input } from 'antd';

const Option = Select.Option;

const component = ({ filter, statusList,
    getStopwordList,
    setStopwordFilterKeyword,
    setStopwordFilterStatus,
 }) => {
  let statuses = statusList;
  let statusOptions = [];
  for (let i in statuses) {
      statusOptions.push(
          <Option
            key={statuses[i].id}
            value={statuses[i].id}
          >
              {statuses[i].name}
          </Option>
      );
  }
  return (
    <div>
        <Row>
            <Col>
                <span style={{marginLeft: 10, marginRight: 5}}>状态: </span>
                <Select
                    value={filter.status}
                    style={{minWidth: 200}}
                    onChange={(value)=>{
                        setStopwordFilterStatus(value);
                        getStopwordList();
                    }}
                >
                    {statusOptions}
                </Select>
                <span style={{marginLeft: 10, marginRight: 5}}>关键词: </span>
                <Input
                    allowClear
                    style={{width: 200}}
                    value={filter.keyword}
                    onChange={(e)=>{
                        setStopwordFilterKeyword(e.target.value)
                        getStopwordList();
                    }}
                ></Input>
            </Col>
        </Row>
    </div>
  )
}

export default component;