import React from 'react';
import { Avatar, Card, Skeleton } from 'antd';
import styled from 'styled-components';

export function DefaultCard({ loading, title, avatarUrl, description, date }) {
  return (
    <DefaultCard.Container padding={0}>
      <Skeleton loading={loading} avatar>
        <Card.Meta
          avatar={<DefaultCard.Avatar src={avatarUrl} />}
          title={title}
          description={description}
        />

        <DefaultCard.Date>{date}</DefaultCard.Date>
      </Skeleton>
    </DefaultCard.Container>
  );
}

DefaultCard.Container = styled(Card)`
  position: relative;
  width: 400px;
  height: 160px;

  padding: 20px;

  border: 1px solid lightgray;
  border-radius: 10px;

  .ant-card-body {
    padding: 0;
  }
`;

DefaultCard.Avatar = styled(Avatar)`
  width: 50px;
  height: 50px;
  border: 1px solid gray;
`;

DefaultCard.Date = styled.time`
  position: absolute;
  bottom: 20px;
  right: 20px;

  color: gray;
`;
