import React from 'react';
import { Select, Row, Col, Input } from 'antd';

const Option = Select.Option;

const component = ({ filter, labelList, statusList,
    getCommentList,
    setCommentFilterKeyword,
    setCommentFilterLabel,
    setCommentFilterStatus,
 }) => {
  let statusOptions = [];
  for (let i in statusList) {
      statusOptions.push(
          <Option
            key={statusList[i].id}
            value={statusList[i].id}
          >
              {statusList[i].name}
          </Option>
      );
  }
  let labels = labelList;
  let labelOptions = [];
  for (let i in labels) {
      labelOptions.push(
          <Option
            key={labels[i].id}
            value={labels[i].id}
          >
              {labels[i].name}
          </Option>
      );
  }
  return (
    <div>
        <Row>
            <Col>
                <span style={{marginLeft: 10, marginRight: 5}}>正负评价: </span>
                <Select
                    value={filter.label}
                    style={{minWidth: 200}}
                    onChange={(value)=>{
                        setCommentFilterLabel(value);
                        getCommentList();
                    }}
                >
                    {labelOptions}
                </Select>
                <span style={{marginLeft: 10, marginRight: 5}}>状态: </span>
                <Select
                    value={filter.status}
                    style={{minWidth: 200}}
                    onChange={(value)=>{
                        setCommentFilterStatus(value);
                        getCommentList();
                    }}
                >
                    {statusOptions}
                </Select>
                <span style={{marginLeft: 10, marginRight: 5}}>关键词: </span>
                <Input
                    allowClear
                    value={filter.keyword}
                    style={{width: 200}}
                    onChange={(e)=>{
                        setCommentFilterKeyword(e.target.value)
                        getCommentList();
                    }}
                ></Input>
            </Col>
        </Row>
    </div>
  )
}

export default component;