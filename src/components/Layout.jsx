import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledLayout = styled.div``

function Layout({ children, ...props }) {
  return <StyledLayout {...props}>{children}</StyledLayout>
}

export default Layout

Layout.defaultProps = {}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
