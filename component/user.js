import React, { Fragment } from 'react'

export default function user({userdata}) {
  return (
    <Fragment>
        <p>{userdata.name}</p>
        <p>{userdata.email}</p>
    </Fragment>
  )
}
