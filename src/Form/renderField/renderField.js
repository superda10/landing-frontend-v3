/* eslint-disable react/display-name */
import React from "react"
import classNames from "classnames"
import Fade from "react-reveal/Fade"
import classes from "./renderField.module.scss"

export default function renderField(Component) {
  return ({
    containerStyle = "",
    meta: { touched, error } = {},
    label = "",
    smallLabel = "",
    note = "",
    required = false,
    hideError = false,
    labelStyle = "",
    subLabel = "",
    ...rest
  }) => (
    <div
      className={classNames(
        classes.container,
        containerStyle,
        label && classes.mb20
      )}
    >
      <div className={classes.labelWrapper}>
        {label && (
          <span className={classNames(classes.label, labelStyle)}>
            {label}
            {required && <span className={classes.required}> *</span>}
          </span>
        )}
        {subLabel && (
          <span className={classNames(classes.subLabel)}>{subLabel}</span>
        )}
      </div>

      {smallLabel && <span className={classes.smallLabel}>{smallLabel}</span>}
      <Component {...rest} hasError={touched && error} errorMessage={error} />
      {touched && error && !hideError && (
        <Fade bottom>
          <span className={classes.errorMessage}>{error}</span>
        </Fade>
      )}
      {note && (
        <p
          className={classes.note}
          dangerouslySetInnerHTML={{ __html: note }}
        ></p>
      )}
    </div>
  )
}
