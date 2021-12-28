import React, { useEffect, useState } from 'react';
import Button from 'components/Button';
import * as Api from 'api/api';
import TextAreaField from 'components/TextAreaField';
import InputField from 'components/InputField';
import { toast } from "react-toastify"
import classes from './SupportForm.module.scss';
import { validateEmail } from 'utils/validator';
import { Modal } from 'react-bootstrap';

const Form = ({
  handleClose,
  type,
  show,
  reset
}) => {
  const [loadingSubmit, setLoadingSubmit] = useState(false)
  const [values, setValues] = useState({})
  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (show) {
      setValues({})
      setTouched({})
      validate({})
    }
  }, [show])

  const handleSubmit = async () => {
    try {
      const valid = validate(values)
      if (!valid) {
        handleTouchedAll()
        return
      }
      setLoadingSubmit(true)

      await Api.post({
        url: "/support/create",
        data: {
          ...values,
          type,
          source: 'SPORES_APP'
        },
      })

      toast(
        "Thank you for submitting your request. We will contact you shortly.",
        {
          type: "success",
          theme: "light",
        }
      )

      handleClose()

      setLoadingSubmit(false)
    } catch (e) {
      setLoadingSubmit(false)
    }
  }

  const handleChangeValue = (key, value) => {
    setValues((prev) => {
      const newValue = {
        ...prev,
        [key]: value,
      }
      validate(newValue)
      return newValue
    })
  }

  const handleTouchedAll = () => {
    setTouched({
      name: true,
      email: true,
      message: true,
    })
  }

  const handleTouched = (key) => {
    setTouched((prev) => ({
      ...prev,
      [key]: true,
    }))
  }

  const validate = (values) => {
    const errors = {}
    if (!values.name) {
      errors.name = "Please enter name"
    }
    if (!values.email || !values.email.trim()) {
      errors.firstName = "Please enter email"
    } else if(!validateEmail(values.email)) {
      errors.email = "Please enter valid email"
    }

    if (!values.message || !values.message.trim()) {
      errors.message = "Please enter message"
    }

    setErrors(errors)
    return Object.values(errors).length === 0
  }

  return (
    <Modal show={show} onHide={handleClose} size='lg' centered>
    <div
      className={classes.container}
    >
      <div className={classes.head}>
        <h2 className={classes.title}>
          {type === 'CUSTOMER_SUPPORT'
            ? 'Customer Support'
            : 'Partnership Proposal'}
        </h2>
        <a className={classes.btnClose} onClick={handleClose}>
          <img src={'/assets/images/close.svg'} className={classes.closeIcon} alt='closeIcon' />
        </a>
      </div>
      <div className={classes.content}>
          <InputField
            input={{
              value: values?.name || "",
              onChange: (value) => {
                handleChangeValue("name", value)
              },
              onBlur: () => {
                handleTouched("name")
              },
            }}
            meta={{
              touched: touched.name || false,
              error: errors.name,
            }}
            label='Full name'
            h50
          />

          <InputField
            input={{
              value: values?.email || "",
              onChange: (value) => {
                handleChangeValue("email", value)
              },
              onBlur: () => {
                handleTouched("email")
              },
            }}
            meta={{
              touched: touched.email || false,
              error: errors.email,
            }}
            h50
            label='Email'
          />

          <TextAreaField
            input={{
              value: values?.message || "",
              onChange: (value) => {
                handleChangeValue("message", value)
              },
              onBlur: () => {
                handleTouched("message")
              },
            }}
            meta={{
              touched: touched.message || false,
              error: errors.message,
            }}
            label='Message'
          />
      </div>
      <div className={classes.actions}>
        <Button
          className={classes.btn}
          loading={loadingSubmit}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
    </Modal>
  );
};

export default Form
