import React from "react"
import PropTypes from "prop-types"
import { RichText } from "prismic-reactjs"
import { linkResolver } from "utils/linkResolver"

function Content({ content }) {
  return <RichText render={content} linkResolver={linkResolver} />
}

export default Content

Content.propTypes = {
  content: PropTypes.array.isRequired,
}
