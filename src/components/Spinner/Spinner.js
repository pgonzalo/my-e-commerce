import React from 'react'
import { Loader, Image, Segment } from 'semantic-ui-react'

const Spinner = () => (
  <Segment>
    <Loader active />

    <Image src='/images/wireframe/short-paragraph.png' />
  </Segment>
)

export default Spinner