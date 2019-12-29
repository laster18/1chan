import React from 'react'
import styled from 'styled-components'
import { Divider, Header, Image } from 'semantic-ui-react'
import { Post } from '~/models'
import { formatDate } from '~/utils/format'

const PostComponent: React.FC<{ post: Post }> = ({ post }) => {
  const { id, userName, createdAt, message, image } = post

  return (
    <>
      <Header as="h5">
        {id}. {userName} の投稿
        <Time>{formatDate(createdAt)}</Time>
      </Header>
      <p>{message}</p>
      {image && <Image src={image} />}

      <Divider />
    </>
  )
}

const Time = styled.span`
  padding-left: 10px;
  font-size: 12px;
  font-weight: normal;
`

export default PostComponent
