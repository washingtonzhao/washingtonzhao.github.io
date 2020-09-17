import React, { useImperativeHandle, useRef } from "react"

import { Link } from "gatsby"

import styles from "./menu.module.css"

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  render() {
    return (
      <div
        role="button"
        tabIndex="0"
        className={`${styles.menu} ${this.state.open ? `${styles.open}` : ""}`}
        onClick={() => this.close()}
        onKeyDown={() => this.close()}
      >
        <Link to="/">Home</Link>
        <Link to="/projects">Software</Link>
        <Link to="/product">Product Management</Link>
        <Link to="/teaching">Teaching</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/resume">Resume</Link>
      </div>
    )
  }

  close() {
    this.setState({ open: false })
  }

  open() {
    this.setState({ open: true })
  }
}

export default React.forwardRef((props, ref) => {
  const menuRef = useRef()

  useImperativeHandle(ref, () => ({
    open() {
      menuRef.current.open()
    },
  }))

  return <Menu ref={menuRef} {...props} />
})