import React from "react"
import { useState, useRef, useEffect } from "react"

import "./Signup.css"

const eye = (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.8792 9.13046C18.7095 8.89826 14.6652 3.44507 9.49991 3.44507C4.33461 3.44507 0.290122 8.89827 0.120569 9.13024C-0.0401895 9.35052 -0.0401895 9.64929 0.120569 9.86957C0.290122 10.1018 4.33461 15.555 9.49991 15.555C14.6652 15.555 18.7095 10.1017 18.8792 9.86975C19.0402 9.64951 19.0402 9.35052 18.8792 9.13046ZM9.49991 14.3022C5.69511 14.3022 2.39976 10.6828 1.42426 9.49959C2.39849 8.31531 5.68695 4.69781 9.49991 4.69781C13.3045 4.69781 16.5996 8.31657 17.5756 9.50044C16.6013 10.6847 13.3129 14.3022 9.49991 14.3022Z" fill="#ABABAB" />
    <path d="M9.4999 5.7417C7.42763 5.7417 5.74164 7.42769 5.74164 9.49996C5.74164 11.5722 7.42763 13.2582 9.4999 13.2582C11.5722 13.2582 13.2582 11.5722 13.2582 9.49996C13.2582 7.42769 11.5722 5.7417 9.4999 5.7417ZM9.4999 12.0054C8.11831 12.0054 6.99442 10.8815 6.99442 9.49996C6.99442 8.11841 8.11835 6.99448 9.4999 6.99448C10.8814 6.99448 12.0054 8.11841 12.0054 9.49996C12.0054 10.8815 10.8815 12.0054 9.4999 12.0054Z" fill="#ABABAB" />
  </svg>
)
const eyeSlash = (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.8792 9.13046C18.7095 8.89826 14.6652 3.44507 9.49991 3.44507C4.33461 3.44507 0.290122 8.89827 0.120569 9.13024C-0.0401895 9.35052 -0.0401895 9.64929 0.120569 9.86957C0.290122 10.1018 4.33461 15.555 9.49991 15.555C14.6652 15.555 18.7095 10.1017 18.8792 9.86975C19.0402 9.64951 19.0402 9.35052 18.8792 9.13046ZM9.49991 14.3022C5.69511 14.3022 2.39976 10.6828 1.42426 9.49959C2.39849 8.31531 5.68695 4.69781 9.49991 4.69781C13.3045 4.69781 16.5996 8.31657 17.5756 9.50044C16.6013 10.6847 13.3129 14.3022 9.49991 14.3022Z" fill="#3C71FF" />
    <path d="M9.4999 5.7417C7.42763 5.7417 5.74164 7.42769 5.74164 9.49996C5.74164 11.5722 7.42763 13.2582 9.4999 13.2582C11.5722 13.2582 13.2582 11.5722 13.2582 9.49996C13.2582 7.42769 11.5722 5.7417 9.4999 5.7417ZM9.4999 12.0054C8.11831 12.0054 6.99442 10.8815 6.99442 9.49996C6.99442 8.11841 8.11835 6.99448 9.4999 6.99448C10.8814 6.99448 12.0054 8.11841 12.0054 9.49996C12.0054 10.8815 10.8815 12.0054 9.4999 12.0054Z" fill="#3C71FF" />
  </svg>
)

const Signup = () => {
  const [isGHovered, setIsGHovered] = useState(true)
  const [isFHovered, setIsFHovered] = useState(true)

  const [firstName, setFirstName] = useState("")
  const inputRef = useRef(null)
  const [lastName, setLastName] = useState("")
  const lastRef = useRef(null)
  const [email, setEmail] = useState("")
  const emailRef = useRef(null)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const [passwordLength, setPasswordLength] = useState(false)
  const [passwordNumber, setPasswordNumber] = useState(false)

  const [showPassword, setShowPassword] = useState(false)

  const [checkTrigger, setCheckTrigger] = useState(false)
  const [alertTrigger, setAlertTrigger] = useState(false)

  const containsNumber = (str) => {
    const regex = /\d/
    return regex.test(str)
  }

  const togglePasswordVisibility = () => {
    setCheckTrigger(true)
    if (password.length >= 8) {
      setPasswordLength(true)
    } else if (containsNumber(password)) {
      setPasswordNumber(true)
    } else {
      setPasswordLength(false)
      setPasswordNumber(false)
    }
    setShowPassword(!showPassword)
  }

  const handleMouseOver = () => {
    setIsGHovered(false)
  }

  const handleMouseOut = () => {
    setIsGHovered(true)
  }

  const handleFMouseOver = () => {
    setIsFHovered(false)
  }

  const handleFMouseOut = () => {
    setIsFHovered(true)
  }

  function handleChangeFirst(e) {
    setFirstName(e.target.value)
  }

  function handleChangeLast(e) {
    setLastName(e.target.value)
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }

  function handleChangePassword(e) {
    setPassword(e.target.value)
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [firstName])

  useEffect(() => {
    lastRef.current.focus()
  }, [lastName])

  useEffect(() => {
    emailRef.current.focus()
  }, [email])

  const checkRule = (pass) => {
    if (pass.length > 8) {
      setPasswordLength(true)
    } else if (containsNumber(pass)) {
      setPasswordNumber(true)
    } else {
      setPasswordLength(false)
      setPasswordNumber(false)
    }
  }

  useEffect(() => {
    checkRule(password)
    passwordRef.current.focus()
    if (password.length == 0) {
      setCheckTrigger(false)
    }
  }, [password])

  const Content = () => {
    const [checked, setChecked] = useState(false)

    const handlecheckChange = () => {
      setChecked(!checked)
    }

    const submitForm = () => {
      if (firstName.length == 0 || lastName.length == 0 || email.length == 0 || password.length == 0) {
        alert("can not be null")
        setAlertTrigger(true)
      } else if (passwordLength == false || passwordNumber == false) {
        alert("password not right")
        setAlertTrigger(true)
      } else if (checked == false) {
        setAlertTrigger(true)
      } else {
        setAlertTrigger(false)
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
      }
    }

    return (
      <div>
        <div>
          <div className="headerThird">
            <h3>Start from free</h3>
            <h2>Create an account</h2>
          </div>
          {alertTrigger ? (
            <div className="alert">
              <div>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 6.4775 18.0225 2 12.5 2ZM13.75 18.25H11.25V15.75H13.75V18.25ZM13.75 14.5H11.25V7H13.75V14.5Z" fill="#D71920" />
                </svg>
              </div>

              <p>Please complete all the required fields to proceed</p>
            </div>
          ) : (
            <div></div>
          )}
          <div className="loginThird">
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              {isGHovered ? (
                <svg width="191" height="48" viewBox="0 0 191 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="0.5" width="189" height="47" rx="3.5" fill="white" />
                  <rect x="1" y="0.5" width="189" height="47" rx="3.5" stroke="#3C71FF" />
                  <path d="M20.5 22.4V25.6H25.0264C24.3656 27.4624 22.5864 28.8 20.5 28.8C17.8536 28.8 15.7 26.6464 15.7 24C15.7 21.3536 17.8536 19.2 20.5 19.2C21.6472 19.2 22.7512 19.6112 23.6088 20.3584L25.7112 17.9456C24.2712 16.6912 22.4216 16 20.5 16C16.0888 16 12.5 19.5888 12.5 24C12.5 28.4112 16.0888 32 20.5 32C24.9112 32 28.5 28.4112 28.5 24V22.4H20.5Z" fill="#3C71FF" />
                  <path d="M47.78 25.387C47.78 27.025 46.74 28.143 44.413 28.143C43.087 28.143 41.943 27.571 41.176 26.674L42.151 25.725C42.762 26.388 43.659 26.804 44.517 26.804C45.791 26.804 46.402 26.362 46.402 25.478C46.402 24.776 45.869 24.425 44.348 23.97C42.424 23.398 41.501 22.917 41.501 21.292C41.501 19.719 42.827 18.757 44.504 18.757C45.739 18.757 46.675 19.212 47.481 19.992L46.519 20.967C45.947 20.382 45.297 20.096 44.4 20.096C43.334 20.096 42.879 20.616 42.879 21.227C42.879 21.864 43.295 22.176 44.868 22.644C46.662 23.19 47.78 23.762 47.78 25.387ZM51.2247 19.433C51.2247 19.901 50.8347 20.291 50.3667 20.291C49.8857 20.291 49.4957 19.901 49.4957 19.433C49.4957 18.952 49.8857 18.562 50.3667 18.562C50.8347 18.562 51.2247 18.952 51.2247 19.433ZM51.0297 28H49.6907V21.175H51.0297V28ZM58.5001 27.35C58.5001 29.43 57.7461 30.431 55.2761 30.509L54.8211 29.495C56.7451 29.404 57.1611 28.884 57.1611 27.467V27.35C56.6671 27.805 56.1081 28.143 55.3931 28.143C53.9371 28.143 52.7671 27.077 52.7671 24.477C52.7671 22.137 54.0541 21.032 55.4581 21.032C56.1471 21.032 56.7971 21.396 57.1611 21.812V21.175H58.5001V27.35ZM57.1871 26.037V23.164C56.8881 22.761 56.2641 22.267 55.5881 22.267C54.6261 22.267 54.1061 22.995 54.1061 24.438C54.1061 26.154 54.6521 26.908 55.6401 26.908C56.2771 26.908 56.8361 26.479 57.1871 26.037ZM65.9662 28H64.6272V24.139C64.6272 22.761 64.1072 22.267 63.2232 22.267C62.3262 22.267 61.8192 22.904 61.8192 24.009V28H60.4802V21.175H61.8192V21.825C62.1572 21.331 62.8332 21.032 63.5352 21.032C65.1212 21.032 65.9662 22.072 65.9662 24.087V28ZM76.8322 28H75.4932V27.35C75.1552 27.844 74.4792 28.143 73.7772 28.143C72.1912 28.143 71.3462 27.103 71.3462 25.088V21.175H72.6852V25.036C72.6852 26.414 73.2052 26.908 74.0892 26.908C74.9862 26.908 75.4932 26.271 75.4932 25.166V21.175H76.8322V28ZM84.5452 24.698C84.5452 27.038 83.2712 28.143 81.8542 28.143C81.1652 28.143 80.5152 27.779 80.1382 27.363V29.82L78.8122 30.509V21.175H80.1382V21.825C80.6322 21.37 81.2042 21.032 81.9192 21.032C83.3882 21.032 84.5452 22.098 84.5452 24.698ZM83.2062 24.737C83.2062 23.021 82.6602 22.267 81.6722 22.267C81.0352 22.267 80.4762 22.696 80.1252 23.138V26.011C80.4242 26.414 81.0482 26.908 81.7242 26.908C82.6862 26.908 83.2062 26.18 83.2062 24.737ZM97.8552 21.175L95.9572 28H94.8132L93.8902 24.555C93.7472 24.035 93.6042 23.424 93.5392 23.099C93.4742 23.424 93.3312 24.048 93.1882 24.568L92.2782 28H91.1342L89.2622 21.175H90.5882L91.3942 24.49C91.5242 25.01 91.6672 25.66 91.7322 25.985C91.8102 25.647 91.9662 25.023 92.1092 24.49L93.0192 21.175H94.0982L95.0212 24.503C95.1642 25.036 95.3072 25.647 95.3852 25.985C95.4632 25.647 95.5932 25.01 95.7232 24.49L96.5292 21.175H97.8552ZM100.965 19.433C100.965 19.901 100.575 20.291 100.107 20.291C99.6259 20.291 99.2359 19.901 99.2359 19.433C99.2359 18.952 99.6259 18.562 100.107 18.562C100.575 18.562 100.965 18.952 100.965 19.433ZM100.77 28H99.4309V21.175H100.77V28ZM106.225 26.648L106.069 27.831C105.744 28.013 105.289 28.143 104.756 28.143C103.807 28.143 103.222 27.558 103.222 26.336V22.397H102.247V21.175H103.222V19.225L104.535 18.523V21.175H106.225V22.397H104.535V26.102C104.535 26.739 104.743 26.921 105.237 26.921C105.588 26.921 105.978 26.791 106.225 26.648ZM113.536 28H112.197V24.139C112.197 22.761 111.677 22.267 110.793 22.267C109.896 22.267 109.389 22.904 109.389 24.009V28H108.05V19.225L109.389 18.523V21.825C109.727 21.331 110.403 21.032 111.105 21.032C112.691 21.032 113.536 22.072 113.536 24.087V28ZM126.039 24.438C126.039 26.778 124.609 28.143 122.581 28.143C120.228 28.143 118.733 26.206 118.733 23.45C118.733 20.694 120.228 18.757 122.581 18.757C124.063 18.757 125.051 19.355 125.675 20.46L124.479 21.201C124.011 20.46 123.517 20.122 122.581 20.122C120.995 20.122 120.124 21.409 120.124 23.45C120.124 25.491 120.995 26.778 122.581 26.778C124.063 26.778 124.648 25.803 124.648 24.737V24.698H123.166V23.385H126.039V24.438ZM133.537 24.555C133.537 26.817 132.211 28.143 130.456 28.143C128.74 28.143 127.453 26.726 127.453 24.594C127.453 22.358 128.779 21.032 130.495 21.032C132.237 21.032 133.537 22.423 133.537 24.555ZM132.185 24.594C132.185 23.203 131.522 22.306 130.443 22.306C129.429 22.306 128.805 23.203 128.805 24.555C128.805 26.05 129.494 26.869 130.508 26.869C131.522 26.869 132.185 25.842 132.185 24.594ZM140.951 24.555C140.951 26.817 139.625 28.143 137.87 28.143C136.154 28.143 134.867 26.726 134.867 24.594C134.867 22.358 136.193 21.032 137.909 21.032C139.651 21.032 140.951 22.423 140.951 24.555ZM139.599 24.594C139.599 23.203 138.936 22.306 137.857 22.306C136.843 22.306 136.219 23.203 136.219 24.555C136.219 26.05 136.908 26.869 137.922 26.869C138.936 26.869 139.599 25.842 139.599 24.594ZM148.04 27.35C148.04 29.43 147.286 30.431 144.816 30.509L144.361 29.495C146.285 29.404 146.701 28.884 146.701 27.467V27.35C146.207 27.805 145.648 28.143 144.933 28.143C143.477 28.143 142.307 27.077 142.307 24.477C142.307 22.137 143.594 21.032 144.998 21.032C145.687 21.032 146.337 21.396 146.701 21.812V21.175H148.04V27.35ZM146.727 26.037V23.164C146.428 22.761 145.804 22.267 145.128 22.267C144.166 22.267 143.646 22.995 143.646 24.438C143.646 26.154 144.192 26.908 145.18 26.908C145.817 26.908 146.376 26.479 146.727 26.037ZM151.424 28H150.085V19.225L151.424 18.523V28ZM158.999 24.451C158.999 24.698 158.973 24.919 158.96 25.062H154.449C154.592 26.375 155.333 26.934 156.165 26.934C156.737 26.934 157.192 26.726 157.647 26.388L158.44 27.246C157.842 27.818 157.127 28.143 156.087 28.143C154.488 28.143 153.136 26.856 153.136 24.594C153.136 22.28 154.358 21.032 156.126 21.032C158.063 21.032 158.999 22.605 158.999 24.451ZM157.647 23.957C157.582 23.021 157.14 22.241 156.035 22.241C155.138 22.241 154.592 22.865 154.475 23.957H157.647Z" fill="black" />
                </svg>
              ) : (
                <svg width="191" height="48" viewBox="0 0 191 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="189" height="47" rx="3.5" fill="#3C71FF" />
                  <rect x="0.5" y="0.5" width="189" height="47" rx="3.5" stroke="#3C71FF" />
                  <path d="M20.5 22.4V25.6H25.0264C24.3656 27.4624 22.5864 28.8 20.5 28.8C17.8536 28.8 15.7 26.6464 15.7 24C15.7 21.3536 17.8536 19.2 20.5 19.2C21.6472 19.2 22.7512 19.6112 23.6088 20.3584L25.7112 17.9456C24.2712 16.6912 22.4216 16 20.5 16C16.0888 16 12.5 19.5888 12.5 24C12.5 28.4112 16.0888 32 20.5 32C24.9112 32 28.5 28.4112 28.5 24V22.4H20.5Z" fill="white" />
                  <path d="M47.78 25.387C47.78 27.025 46.74 28.143 44.413 28.143C43.087 28.143 41.943 27.571 41.176 26.674L42.151 25.725C42.762 26.388 43.659 26.804 44.517 26.804C45.791 26.804 46.402 26.362 46.402 25.478C46.402 24.776 45.869 24.425 44.348 23.97C42.424 23.398 41.501 22.917 41.501 21.292C41.501 19.719 42.827 18.757 44.504 18.757C45.739 18.757 46.675 19.212 47.481 19.992L46.519 20.967C45.947 20.382 45.297 20.096 44.4 20.096C43.334 20.096 42.879 20.616 42.879 21.227C42.879 21.864 43.295 22.176 44.868 22.644C46.662 23.19 47.78 23.762 47.78 25.387ZM51.2247 19.433C51.2247 19.901 50.8347 20.291 50.3667 20.291C49.8857 20.291 49.4957 19.901 49.4957 19.433C49.4957 18.952 49.8857 18.562 50.3667 18.562C50.8347 18.562 51.2247 18.952 51.2247 19.433ZM51.0297 28H49.6907V21.175H51.0297V28ZM58.5001 27.35C58.5001 29.43 57.7461 30.431 55.2761 30.509L54.8211 29.495C56.7451 29.404 57.1611 28.884 57.1611 27.467V27.35C56.6671 27.805 56.1081 28.143 55.3931 28.143C53.9371 28.143 52.7671 27.077 52.7671 24.477C52.7671 22.137 54.0541 21.032 55.4581 21.032C56.1471 21.032 56.7971 21.396 57.1611 21.812V21.175H58.5001V27.35ZM57.1871 26.037V23.164C56.8881 22.761 56.2641 22.267 55.5881 22.267C54.6261 22.267 54.1061 22.995 54.1061 24.438C54.1061 26.154 54.6521 26.908 55.6401 26.908C56.2771 26.908 56.8361 26.479 57.1871 26.037ZM65.9662 28H64.6272V24.139C64.6272 22.761 64.1072 22.267 63.2232 22.267C62.3262 22.267 61.8192 22.904 61.8192 24.009V28H60.4802V21.175H61.8192V21.825C62.1572 21.331 62.8332 21.032 63.5352 21.032C65.1212 21.032 65.9662 22.072 65.9662 24.087V28ZM76.8322 28H75.4932V27.35C75.1552 27.844 74.4792 28.143 73.7772 28.143C72.1912 28.143 71.3462 27.103 71.3462 25.088V21.175H72.6852V25.036C72.6852 26.414 73.2052 26.908 74.0892 26.908C74.9862 26.908 75.4932 26.271 75.4932 25.166V21.175H76.8322V28ZM84.5452 24.698C84.5452 27.038 83.2712 28.143 81.8542 28.143C81.1652 28.143 80.5152 27.779 80.1382 27.363V29.82L78.8122 30.509V21.175H80.1382V21.825C80.6322 21.37 81.2042 21.032 81.9192 21.032C83.3882 21.032 84.5452 22.098 84.5452 24.698ZM83.2062 24.737C83.2062 23.021 82.6602 22.267 81.6722 22.267C81.0352 22.267 80.4762 22.696 80.1252 23.138V26.011C80.4242 26.414 81.0482 26.908 81.7242 26.908C82.6862 26.908 83.2062 26.18 83.2062 24.737ZM97.8552 21.175L95.9572 28H94.8132L93.8902 24.555C93.7472 24.035 93.6042 23.424 93.5392 23.099C93.4742 23.424 93.3312 24.048 93.1882 24.568L92.2782 28H91.1342L89.2622 21.175H90.5882L91.3942 24.49C91.5242 25.01 91.6672 25.66 91.7322 25.985C91.8102 25.647 91.9662 25.023 92.1092 24.49L93.0192 21.175H94.0982L95.0212 24.503C95.1642 25.036 95.3072 25.647 95.3852 25.985C95.4632 25.647 95.5932 25.01 95.7232 24.49L96.5292 21.175H97.8552ZM100.965 19.433C100.965 19.901 100.575 20.291 100.107 20.291C99.6259 20.291 99.2359 19.901 99.2359 19.433C99.2359 18.952 99.6259 18.562 100.107 18.562C100.575 18.562 100.965 18.952 100.965 19.433ZM100.77 28H99.4309V21.175H100.77V28ZM106.225 26.648L106.069 27.831C105.744 28.013 105.289 28.143 104.756 28.143C103.807 28.143 103.222 27.558 103.222 26.336V22.397H102.247V21.175H103.222V19.225L104.535 18.523V21.175H106.225V22.397H104.535V26.102C104.535 26.739 104.743 26.921 105.237 26.921C105.588 26.921 105.978 26.791 106.225 26.648ZM113.536 28H112.197V24.139C112.197 22.761 111.677 22.267 110.793 22.267C109.896 22.267 109.389 22.904 109.389 24.009V28H108.05V19.225L109.389 18.523V21.825C109.727 21.331 110.403 21.032 111.105 21.032C112.691 21.032 113.536 22.072 113.536 24.087V28ZM126.039 24.438C126.039 26.778 124.609 28.143 122.581 28.143C120.228 28.143 118.733 26.206 118.733 23.45C118.733 20.694 120.228 18.757 122.581 18.757C124.063 18.757 125.051 19.355 125.675 20.46L124.479 21.201C124.011 20.46 123.517 20.122 122.581 20.122C120.995 20.122 120.124 21.409 120.124 23.45C120.124 25.491 120.995 26.778 122.581 26.778C124.063 26.778 124.648 25.803 124.648 24.737V24.698H123.166V23.385H126.039V24.438ZM133.537 24.555C133.537 26.817 132.211 28.143 130.456 28.143C128.74 28.143 127.453 26.726 127.453 24.594C127.453 22.358 128.779 21.032 130.495 21.032C132.237 21.032 133.537 22.423 133.537 24.555ZM132.185 24.594C132.185 23.203 131.522 22.306 130.443 22.306C129.429 22.306 128.805 23.203 128.805 24.555C128.805 26.05 129.494 26.869 130.508 26.869C131.522 26.869 132.185 25.842 132.185 24.594ZM140.951 24.555C140.951 26.817 139.625 28.143 137.87 28.143C136.154 28.143 134.867 26.726 134.867 24.594C134.867 22.358 136.193 21.032 137.909 21.032C139.651 21.032 140.951 22.423 140.951 24.555ZM139.599 24.594C139.599 23.203 138.936 22.306 137.857 22.306C136.843 22.306 136.219 23.203 136.219 24.555C136.219 26.05 136.908 26.869 137.922 26.869C138.936 26.869 139.599 25.842 139.599 24.594ZM148.04 27.35C148.04 29.43 147.286 30.431 144.816 30.509L144.361 29.495C146.285 29.404 146.701 28.884 146.701 27.467V27.35C146.207 27.805 145.648 28.143 144.933 28.143C143.477 28.143 142.307 27.077 142.307 24.477C142.307 22.137 143.594 21.032 144.998 21.032C145.687 21.032 146.337 21.396 146.701 21.812V21.175H148.04V27.35ZM146.727 26.037V23.164C146.428 22.761 145.804 22.267 145.128 22.267C144.166 22.267 143.646 22.995 143.646 24.438C143.646 26.154 144.192 26.908 145.18 26.908C145.817 26.908 146.376 26.479 146.727 26.037ZM151.424 28H150.085V19.225L151.424 18.523V28ZM158.999 24.451C158.999 24.698 158.973 24.919 158.96 25.062H154.449C154.592 26.375 155.333 26.934 156.165 26.934C156.737 26.934 157.192 26.726 157.647 26.388L158.44 27.246C157.842 27.818 157.127 28.143 156.087 28.143C154.488 28.143 153.136 26.856 153.136 24.594C153.136 22.28 154.358 21.032 156.126 21.032C158.063 21.032 158.999 22.605 158.999 24.451ZM157.647 23.957C157.582 23.021 157.14 22.241 156.035 22.241C155.138 22.241 154.592 22.865 154.475 23.957H157.647Z" fill="black" />
                </svg>
              )}
            </div>
            <div onMouseOver={handleFMouseOver} onMouseOut={handleFMouseOut}>
              {isFHovered ? (
                <svg width="192" height="48" viewBox="0 0 192 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="0.5" width="190" height="47" rx="3.5" fill="white" />
                  <rect x="1" y="0.5" width="190" height="47" rx="3.5" stroke="#3C71FF" />
                  <g clipPath="url(#clip0_5256_171)">
                    <path d="M23.1647 18.6567H24.6253V16.1127C24.3733 16.078 23.5067 16 22.4973 16C20.3913 16 18.9487 17.3247 18.9487 19.7593V22H16.6247V24.844H18.9487V32H21.798V24.8447H24.028L24.382 22.0007H21.7973V20.0413C21.798 19.2193 22.0193 18.6567 23.1647 18.6567Z" fill="#3C71FF" />
                  </g>
                  <path d="M47.78 25.387C47.78 27.025 46.74 28.143 44.413 28.143C43.087 28.143 41.943 27.571 41.176 26.674L42.151 25.725C42.762 26.388 43.659 26.804 44.517 26.804C45.791 26.804 46.402 26.362 46.402 25.478C46.402 24.776 45.869 24.425 44.348 23.97C42.424 23.398 41.501 22.917 41.501 21.292C41.501 19.719 42.827 18.757 44.504 18.757C45.739 18.757 46.675 19.212 47.481 19.992L46.519 20.967C45.947 20.382 45.297 20.096 44.4 20.096C43.334 20.096 42.879 20.616 42.879 21.227C42.879 21.864 43.295 22.176 44.868 22.644C46.662 23.19 47.78 23.762 47.78 25.387ZM51.2247 19.433C51.2247 19.901 50.8347 20.291 50.3667 20.291C49.8857 20.291 49.4957 19.901 49.4957 19.433C49.4957 18.952 49.8857 18.562 50.3667 18.562C50.8347 18.562 51.2247 18.952 51.2247 19.433ZM51.0297 28H49.6907V21.175H51.0297V28ZM58.5001 27.35C58.5001 29.43 57.7461 30.431 55.2761 30.509L54.8211 29.495C56.7451 29.404 57.1611 28.884 57.1611 27.467V27.35C56.6671 27.805 56.1081 28.143 55.3931 28.143C53.9371 28.143 52.7671 27.077 52.7671 24.477C52.7671 22.137 54.0541 21.032 55.4581 21.032C56.1471 21.032 56.7971 21.396 57.1611 21.812V21.175H58.5001V27.35ZM57.1871 26.037V23.164C56.8881 22.761 56.2641 22.267 55.5881 22.267C54.6261 22.267 54.1061 22.995 54.1061 24.438C54.1061 26.154 54.6521 26.908 55.6401 26.908C56.2771 26.908 56.8361 26.479 57.1871 26.037ZM65.9662 28H64.6272V24.139C64.6272 22.761 64.1072 22.267 63.2232 22.267C62.3262 22.267 61.8192 22.904 61.8192 24.009V28H60.4802V21.175H61.8192V21.825C62.1572 21.331 62.8332 21.032 63.5352 21.032C65.1212 21.032 65.9662 22.072 65.9662 24.087V28ZM76.8322 28H75.4932V27.35C75.1552 27.844 74.4792 28.143 73.7772 28.143C72.1912 28.143 71.3462 27.103 71.3462 25.088V21.175H72.6852V25.036C72.6852 26.414 73.2052 26.908 74.0892 26.908C74.9862 26.908 75.4932 26.271 75.4932 25.166V21.175H76.8322V28ZM84.5452 24.698C84.5452 27.038 83.2712 28.143 81.8542 28.143C81.1652 28.143 80.5152 27.779 80.1382 27.363V29.82L78.8122 30.509V21.175H80.1382V21.825C80.6322 21.37 81.2042 21.032 81.9192 21.032C83.3882 21.032 84.5452 22.098 84.5452 24.698ZM83.2062 24.737C83.2062 23.021 82.6602 22.267 81.6722 22.267C81.0352 22.267 80.4762 22.696 80.1252 23.138V26.011C80.4242 26.414 81.0482 26.908 81.7242 26.908C82.6862 26.908 83.2062 26.18 83.2062 24.737ZM97.8552 21.175L95.9572 28H94.8132L93.8902 24.555C93.7472 24.035 93.6042 23.424 93.5392 23.099C93.4742 23.424 93.3312 24.048 93.1882 24.568L92.2782 28H91.1342L89.2622 21.175H90.5882L91.3942 24.49C91.5242 25.01 91.6672 25.66 91.7322 25.985C91.8102 25.647 91.9662 25.023 92.1092 24.49L93.0192 21.175H94.0982L95.0212 24.503C95.1642 25.036 95.3072 25.647 95.3852 25.985C95.4632 25.647 95.5932 25.01 95.7232 24.49L96.5292 21.175H97.8552ZM100.965 19.433C100.965 19.901 100.575 20.291 100.107 20.291C99.6259 20.291 99.2359 19.901 99.2359 19.433C99.2359 18.952 99.6259 18.562 100.107 18.562C100.575 18.562 100.965 18.952 100.965 19.433ZM100.77 28H99.4309V21.175H100.77V28ZM106.225 26.648L106.069 27.831C105.744 28.013 105.289 28.143 104.756 28.143C103.807 28.143 103.222 27.558 103.222 26.336V22.397H102.247V21.175H103.222V19.225L104.535 18.523V21.175H106.225V22.397H104.535V26.102C104.535 26.739 104.743 26.921 105.237 26.921C105.588 26.921 105.978 26.791 106.225 26.648ZM113.536 28H112.197V24.139C112.197 22.761 111.677 22.267 110.793 22.267C109.896 22.267 109.389 22.904 109.389 24.009V28H108.05V19.225L109.389 18.523V21.825C109.727 21.331 110.403 21.032 111.105 21.032C112.691 21.032 113.536 22.072 113.536 24.087V28ZM125.025 20.239H120.527V22.618H123.14V23.957H120.527V28H119.162V18.9H125.025V20.239ZM130.389 28H129.076V27.324C128.608 27.792 127.945 28.143 127.204 28.143C126.099 28.143 124.838 27.519 124.838 25.842C124.838 24.321 126.008 23.632 127.555 23.632C128.192 23.632 128.699 23.723 129.076 23.892V23.385C129.076 22.644 128.621 22.228 127.789 22.228C127.087 22.228 126.541 22.358 126.008 22.657L125.488 21.643C126.138 21.24 126.866 21.032 127.828 21.032C129.349 21.032 130.389 21.773 130.389 23.32V28ZM129.076 26.063V25.088C128.712 24.906 128.244 24.789 127.516 24.789C126.658 24.789 126.112 25.179 126.112 25.803C126.112 26.479 126.541 26.934 127.425 26.934C128.14 26.934 128.764 26.492 129.076 26.063ZM137.393 22.189L136.6 23.138C136.041 22.566 135.547 22.306 134.936 22.306C133.961 22.306 133.337 23.177 133.337 24.568C133.337 25.907 133.909 26.869 134.975 26.869C135.612 26.869 135.989 26.583 136.522 26.024L137.38 26.869C136.847 27.545 136.171 28.143 134.936 28.143C133.272 28.143 131.985 26.739 131.985 24.607C131.985 22.345 133.311 21.032 134.975 21.032C135.976 21.032 136.756 21.435 137.393 22.189ZM144.424 24.451C144.424 24.698 144.398 24.919 144.385 25.062H139.874C140.017 26.375 140.758 26.934 141.59 26.934C142.162 26.934 142.617 26.726 143.072 26.388L143.865 27.246C143.267 27.818 142.552 28.143 141.512 28.143C139.913 28.143 138.561 26.856 138.561 24.594C138.561 22.28 139.783 21.032 141.551 21.032C143.488 21.032 144.424 22.605 144.424 24.451ZM143.072 23.957C143.007 23.021 142.565 22.241 141.46 22.241C140.563 22.241 140.017 22.865 139.9 23.957H143.072ZM151.818 24.698C151.818 27.038 150.544 28.143 149.127 28.143C148.438 28.143 147.788 27.779 147.411 27.363V28H146.085V19.212L147.411 18.523V21.825C147.905 21.37 148.477 21.032 149.192 21.032C150.661 21.032 151.818 22.098 151.818 24.698ZM150.479 24.737C150.479 23.021 149.933 22.267 148.945 22.267C148.308 22.267 147.749 22.696 147.398 23.138V26.011C147.697 26.414 148.321 26.908 148.997 26.908C149.959 26.908 150.479 26.18 150.479 24.737ZM159.258 24.555C159.258 26.817 157.932 28.143 156.177 28.143C154.461 28.143 153.174 26.726 153.174 24.594C153.174 22.358 154.5 21.032 156.216 21.032C157.958 21.032 159.258 22.423 159.258 24.555ZM157.906 24.594C157.906 23.203 157.243 22.306 156.164 22.306C155.15 22.306 154.526 23.203 154.526 24.555C154.526 26.05 155.215 26.869 156.229 26.869C157.243 26.869 157.906 25.842 157.906 24.594ZM166.672 24.555C166.672 26.817 165.346 28.143 163.591 28.143C161.875 28.143 160.588 26.726 160.588 24.594C160.588 22.358 161.914 21.032 163.63 21.032C165.372 21.032 166.672 22.423 166.672 24.555ZM165.32 24.594C165.32 23.203 164.657 22.306 163.578 22.306C162.564 22.306 161.94 23.203 161.94 24.555C161.94 26.05 162.629 26.869 163.643 26.869C164.657 26.869 165.32 25.842 165.32 24.594ZM173.67 28H172.214L170.706 24.607L169.666 25.985V28H168.327V19.225L169.666 18.523V22.826C169.666 23.242 169.653 23.944 169.653 24.282C169.835 24.009 170.186 23.489 170.407 23.164L171.824 21.175H173.345L171.616 23.463L173.67 28Z" fill="black" />
                  <defs>
                    <clipPath id="clip0_5256_171">
                      <rect width="16" height="16" fill="white" transform="translate(12.5 16)" />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg width="192" height="48" viewBox="0 0 192 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="0.5" width="190" height="47" rx="3.5" fill="#3C71FF" />
                  <rect x="1" y="0.5" width="190" height="47" rx="3.5" stroke="#3C71FF" />
                  <g clipPath="url(#clip0_5256_171)">
                    <path d="M23.1647 18.6567H24.6253V16.1127C24.3733 16.078 23.5067 16 22.4973 16C20.3913 16 18.9487 17.3247 18.9487 19.7593V22H16.6247V24.844H18.9487V32H21.798V24.8447H24.028L24.382 22.0007H21.7973V20.0413C21.798 19.2193 22.0193 18.6567 23.1647 18.6567Z" fill="white" />
                  </g>
                  <path d="M47.78 25.387C47.78 27.025 46.74 28.143 44.413 28.143C43.087 28.143 41.943 27.571 41.176 26.674L42.151 25.725C42.762 26.388 43.659 26.804 44.517 26.804C45.791 26.804 46.402 26.362 46.402 25.478C46.402 24.776 45.869 24.425 44.348 23.97C42.424 23.398 41.501 22.917 41.501 21.292C41.501 19.719 42.827 18.757 44.504 18.757C45.739 18.757 46.675 19.212 47.481 19.992L46.519 20.967C45.947 20.382 45.297 20.096 44.4 20.096C43.334 20.096 42.879 20.616 42.879 21.227C42.879 21.864 43.295 22.176 44.868 22.644C46.662 23.19 47.78 23.762 47.78 25.387ZM51.2247 19.433C51.2247 19.901 50.8347 20.291 50.3667 20.291C49.8857 20.291 49.4957 19.901 49.4957 19.433C49.4957 18.952 49.8857 18.562 50.3667 18.562C50.8347 18.562 51.2247 18.952 51.2247 19.433ZM51.0297 28H49.6907V21.175H51.0297V28ZM58.5001 27.35C58.5001 29.43 57.7461 30.431 55.2761 30.509L54.8211 29.495C56.7451 29.404 57.1611 28.884 57.1611 27.467V27.35C56.6671 27.805 56.1081 28.143 55.3931 28.143C53.9371 28.143 52.7671 27.077 52.7671 24.477C52.7671 22.137 54.0541 21.032 55.4581 21.032C56.1471 21.032 56.7971 21.396 57.1611 21.812V21.175H58.5001V27.35ZM57.1871 26.037V23.164C56.8881 22.761 56.2641 22.267 55.5881 22.267C54.6261 22.267 54.1061 22.995 54.1061 24.438C54.1061 26.154 54.6521 26.908 55.6401 26.908C56.2771 26.908 56.8361 26.479 57.1871 26.037ZM65.9662 28H64.6272V24.139C64.6272 22.761 64.1072 22.267 63.2232 22.267C62.3262 22.267 61.8192 22.904 61.8192 24.009V28H60.4802V21.175H61.8192V21.825C62.1572 21.331 62.8332 21.032 63.5352 21.032C65.1212 21.032 65.9662 22.072 65.9662 24.087V28ZM76.8322 28H75.4932V27.35C75.1552 27.844 74.4792 28.143 73.7772 28.143C72.1912 28.143 71.3462 27.103 71.3462 25.088V21.175H72.6852V25.036C72.6852 26.414 73.2052 26.908 74.0892 26.908C74.9862 26.908 75.4932 26.271 75.4932 25.166V21.175H76.8322V28ZM84.5452 24.698C84.5452 27.038 83.2712 28.143 81.8542 28.143C81.1652 28.143 80.5152 27.779 80.1382 27.363V29.82L78.8122 30.509V21.175H80.1382V21.825C80.6322 21.37 81.2042 21.032 81.9192 21.032C83.3882 21.032 84.5452 22.098 84.5452 24.698ZM83.2062 24.737C83.2062 23.021 82.6602 22.267 81.6722 22.267C81.0352 22.267 80.4762 22.696 80.1252 23.138V26.011C80.4242 26.414 81.0482 26.908 81.7242 26.908C82.6862 26.908 83.2062 26.18 83.2062 24.737ZM97.8552 21.175L95.9572 28H94.8132L93.8902 24.555C93.7472 24.035 93.6042 23.424 93.5392 23.099C93.4742 23.424 93.3312 24.048 93.1882 24.568L92.2782 28H91.1342L89.2622 21.175H90.5882L91.3942 24.49C91.5242 25.01 91.6672 25.66 91.7322 25.985C91.8102 25.647 91.9662 25.023 92.1092 24.49L93.0192 21.175H94.0982L95.0212 24.503C95.1642 25.036 95.3072 25.647 95.3852 25.985C95.4632 25.647 95.5932 25.01 95.7232 24.49L96.5292 21.175H97.8552ZM100.965 19.433C100.965 19.901 100.575 20.291 100.107 20.291C99.6259 20.291 99.2359 19.901 99.2359 19.433C99.2359 18.952 99.6259 18.562 100.107 18.562C100.575 18.562 100.965 18.952 100.965 19.433ZM100.77 28H99.4309V21.175H100.77V28ZM106.225 26.648L106.069 27.831C105.744 28.013 105.289 28.143 104.756 28.143C103.807 28.143 103.222 27.558 103.222 26.336V22.397H102.247V21.175H103.222V19.225L104.535 18.523V21.175H106.225V22.397H104.535V26.102C104.535 26.739 104.743 26.921 105.237 26.921C105.588 26.921 105.978 26.791 106.225 26.648ZM113.536 28H112.197V24.139C112.197 22.761 111.677 22.267 110.793 22.267C109.896 22.267 109.389 22.904 109.389 24.009V28H108.05V19.225L109.389 18.523V21.825C109.727 21.331 110.403 21.032 111.105 21.032C112.691 21.032 113.536 22.072 113.536 24.087V28ZM125.025 20.239H120.527V22.618H123.14V23.957H120.527V28H119.162V18.9H125.025V20.239ZM130.389 28H129.076V27.324C128.608 27.792 127.945 28.143 127.204 28.143C126.099 28.143 124.838 27.519 124.838 25.842C124.838 24.321 126.008 23.632 127.555 23.632C128.192 23.632 128.699 23.723 129.076 23.892V23.385C129.076 22.644 128.621 22.228 127.789 22.228C127.087 22.228 126.541 22.358 126.008 22.657L125.488 21.643C126.138 21.24 126.866 21.032 127.828 21.032C129.349 21.032 130.389 21.773 130.389 23.32V28ZM129.076 26.063V25.088C128.712 24.906 128.244 24.789 127.516 24.789C126.658 24.789 126.112 25.179 126.112 25.803C126.112 26.479 126.541 26.934 127.425 26.934C128.14 26.934 128.764 26.492 129.076 26.063ZM137.393 22.189L136.6 23.138C136.041 22.566 135.547 22.306 134.936 22.306C133.961 22.306 133.337 23.177 133.337 24.568C133.337 25.907 133.909 26.869 134.975 26.869C135.612 26.869 135.989 26.583 136.522 26.024L137.38 26.869C136.847 27.545 136.171 28.143 134.936 28.143C133.272 28.143 131.985 26.739 131.985 24.607C131.985 22.345 133.311 21.032 134.975 21.032C135.976 21.032 136.756 21.435 137.393 22.189ZM144.424 24.451C144.424 24.698 144.398 24.919 144.385 25.062H139.874C140.017 26.375 140.758 26.934 141.59 26.934C142.162 26.934 142.617 26.726 143.072 26.388L143.865 27.246C143.267 27.818 142.552 28.143 141.512 28.143C139.913 28.143 138.561 26.856 138.561 24.594C138.561 22.28 139.783 21.032 141.551 21.032C143.488 21.032 144.424 22.605 144.424 24.451ZM143.072 23.957C143.007 23.021 142.565 22.241 141.46 22.241C140.563 22.241 140.017 22.865 139.9 23.957H143.072ZM151.818 24.698C151.818 27.038 150.544 28.143 149.127 28.143C148.438 28.143 147.788 27.779 147.411 27.363V28H146.085V19.212L147.411 18.523V21.825C147.905 21.37 148.477 21.032 149.192 21.032C150.661 21.032 151.818 22.098 151.818 24.698ZM150.479 24.737C150.479 23.021 149.933 22.267 148.945 22.267C148.308 22.267 147.749 22.696 147.398 23.138V26.011C147.697 26.414 148.321 26.908 148.997 26.908C149.959 26.908 150.479 26.18 150.479 24.737ZM159.258 24.555C159.258 26.817 157.932 28.143 156.177 28.143C154.461 28.143 153.174 26.726 153.174 24.594C153.174 22.358 154.5 21.032 156.216 21.032C157.958 21.032 159.258 22.423 159.258 24.555ZM157.906 24.594C157.906 23.203 157.243 22.306 156.164 22.306C155.15 22.306 154.526 23.203 154.526 24.555C154.526 26.05 155.215 26.869 156.229 26.869C157.243 26.869 157.906 25.842 157.906 24.594ZM166.672 24.555C166.672 26.817 165.346 28.143 163.591 28.143C161.875 28.143 160.588 26.726 160.588 24.594C160.588 22.358 161.914 21.032 163.63 21.032C165.372 21.032 166.672 22.423 166.672 24.555ZM165.32 24.594C165.32 23.203 164.657 22.306 163.578 22.306C162.564 22.306 161.94 23.203 161.94 24.555C161.94 26.05 162.629 26.869 163.643 26.869C164.657 26.869 165.32 25.842 165.32 24.594ZM173.67 28H172.214L170.706 24.607L169.666 25.985V28H168.327V19.225L169.666 18.523V22.826C169.666 23.242 169.653 23.944 169.653 24.282C169.835 24.009 170.186 23.489 170.407 23.164L171.824 21.175H173.345L171.616 23.463L173.67 28Z" fill="black" />
                  <defs>
                    <clipPath id="clip0_5256_171">
                      <rect width="16" height="16" fill="white" transform="translate(12.5 16)" />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </div>
          </div>

          <div className="footerThird">
            <p>Or use your email for registration</p>
          </div>
        </div>

        <div>
          InputValue
          <div className="nameInputs">
            <div className="container">
              <input type="text" ref={inputRef} value={firstName} onChange={handleChangeFirst} required /> <label className={firstName ? "active" : ""}>First Name</label> <div className="bar"></div>
            </div>
            <div className="container">
              <input type="text" ref={lastRef} value={lastName} onChange={handleChangeLast} required /> <label className={lastName && "shrink"}>Last Name</label> <div className="bar"></div>
            </div>
          </div>
          <div className="email">
            <div className="containerEmail">
              {" "}
              <input type="text" ref={emailRef} value={email} onChange={handleChangeEmail} required /> <label className={email && "shrink"}>Email</label> <div className="bar"></div>{" "}
            </div>
          </div>
          <div className="password">
            <div className="containerPassword">
              {" "}
              <div className="passwordInput">
                <div>
                  <input ref={passwordRef} className="contentPassword" type={showPassword ? "text" : "password"} value={password} onChange={handleChangePassword} required /> <label className={password && "shrink"}>password</label>
                </div>
                <div>
                  <button onClick={togglePasswordVisibility}>{showPassword ? eyeSlash : eye}</button>
                </div>
              </div>
              <div className="bar"></div>{" "}
            </div>
            {checkTrigger ? (
              <div className="ruleGroup">
                {passwordLength ? (
                  <div className="rules">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5.5" cy="5.5" r="5.5" fill="#4AE7A5" />
                      <path d="M3 6.18182L5.08333 8L8 4" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className="rule">8 Characcters min</p>
                  </div>
                ) : (
                  <div className="rulesFalse">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5.5" cy="5.5" r="5.5" fill="#ABABAB" />
                      <path d="M3 6.18182L5.08333 8L8 4" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className="rule">8 Characcters min</p>
                  </div>
                )}
                {passwordNumber ? (
                  <div className="rules">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5.5" cy="5.5" r="5.5" fill="#4AE7A5" />
                      <path d="M3 6.18182L5.08333 8L8 4" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className="rule">One number</p>
                  </div>
                ) : (
                  <div className="rulesFalse">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5.5" cy="5.5" r="5.5" fill="#ABABAB" />
                      <path d="M3 6.18182L5.08333 8L8 4" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className="rule">One number</p>
                  </div>
                )}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="checkGroup">
          <input className="checkBox" type="checkbox" checked={checked} onChange={handlecheckChange} /> <p className="checkContent">By creating account, you agree to accept our Privacy Policy, Terms of Service and Notification settings.</p>
        </div>
        <div className="submitButton" onClick={submitForm}>
          <p>Create a Free Acount!</p>
        </div>

        <div className="notice">
          <p>
            Already have an account? <a>Log in</a>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="signupPage">
      <div className="signupDialog">
        <div className="backArea">
          <h3 className="backAreaText">&larr;Back</h3>
        </div>
        <Content />
      </div>
    </div>
  )
}

export default Signup
