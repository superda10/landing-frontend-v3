import React from "react"
import classNames from "classnames"
// import FloatingLabelInput from 'react-floating-label-input'
import {renderField} from "Form"
import classes from "./InputField.module.scss"

export class InputField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      focus: false,
      currentType: props.type,
      disabled: props.disabled,
    }
  }

  componentDidUpdate(prevProps) {
    const { disabled } = this.props
    if (disabled !== prevProps.disabled) {
      this.setState({
        disabled,
      })
    }
  }

  moveUpPlaceholder = () => {
    this.setState({
      focus: true,
    })
    const { input } = this.props
    if (input && input.onFocus) {
      input.onFocus()
    }
  }

  moveDownPlaceholder = () => {
    this.setState({
      focus: false,
    })
    const { input } = this.props
    if (input && input.onBlur) {
      input.onBlur()
    }
  }

  toggleShowPassword = () => {
    this.setState((prevState) => ({
      ...prevState,
      currentType: prevState.currentType === "password" ? "text" : "password",
    }))
  }

  handleEnableInput = () => {
    this.setState({
      disabled: false,
    })
  }

  onChange = (e) => {
    const { inputType, input } = this.props
    const value = e.target.value
    if (inputType === "phone") {
      if (!value || /^[0-9-+() ]*$/g.test(value)) {
        input.onChange(value)
      }
    } else if (inputType === "number") {
      if (!value || !isNaN(value)) {
        input.onChange(value)
      }
    } else {
      input.onChange(value)
    }
  }

  focus = () => {
    this.inputRef.focus()
    setTimeout(() => {
      if (this.inputRef) {
        this.inputRef.select()
      }
    }, 0)
  }

  render() {
    const {
      name,
      type,
      options,
      customClass,
      note,
      maxLength,
      hasError,
      placeholder,
      showEnableInput,
      input,
      customClassEye,
      h50,
      theme,
    } = this.props
    const { focus, currentType, disabled } = this.state
    return (
      <div>
        <div className={classes.inputWrapper}>
          <div
            className={classNames(
              classes.inputContainer,
              theme === "light" && classes.light
            )}
          >
            <input
              {...options}
              {...input}
              onChange={this.onChange}
              name={name}
              className={classNames(
                classes.input,
                customClass,
                hasError && classes.errorField,
                focus && classes.focus,
                disabled && classes.disabled,
                h50 && classes.h50,
                "inputField"
              )}
              type={currentType}
              disabled={disabled}
              onFocus={this.moveUpPlaceholder}
              onBlur={this.moveDownPlaceholder}
              maxLength={maxLength}
              placeholder={placeholder}
              ref={(ref) => (this.inputRef = ref)}
            />
            {type === "password" && (
              <a
                className={classNames(classes.btnEye, customClassEye)}
                onClick={this.toggleShowPassword}
              >
                {/* password field */}
              </a>
            )}
          </div>
          {showEnableInput && (
            <a
              className="btn btnSmall btnBlue ml20"
              onClick={this.handleEnableInput}
            >
            </a>
          )}
        </div>
        {note && <p className={classes.note}>{note}</p>}
      </div>
    )
  }
}

export default renderField(InputField)
