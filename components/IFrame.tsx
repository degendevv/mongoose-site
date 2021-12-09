import React from 'react'

interface IFrameProps {
  src: string
  title: string
}

const IFrame: React.FC<IFrameProps> = ({ src, title }) => {
  return (
    <iframe src={src} title={title} width="100%" height="500" />
  )
}

export default IFrame;
