import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Input } from 'reactstrap'
import baseURL from '../../../../baseURL/baseURL'

function EditableText({ text }) {
    const [isEditing, setIsEditing] = useState(false)
    const [value, setValue] = useState(text)

    const handleDoubleClick = () => {
        setIsEditing(true)
    }

    const handleChange = (e) => {
        setValue(e.target.value)
        console.log('wow', e.target.value)
        const DATA = {
            _id: Cookies.get("id"),
            first_name: e.target.value
        }
        axios.put(`${baseURL}/users/updateUserDetails`, DATA)
            .then(res => {
                console.log('....', res.data)
                if (res.data.status === "ok") {

                    // toast(res.data.message)
                    Cookies.set("name", e.target.value)
                } else {
                    toast("Somthing went Wrong - Error")
                }
            })
            .catch(err => {
                toast(err)
            })
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setIsEditing(false)
        }
    }

    const handleBlur = () => {
        setIsEditing(false)
    }

    return (
        <div onDoubleClick={handleDoubleClick}>
            {isEditing ? (
                <Input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    onBlur={handleBlur}
                />
            ) : (
                <span>{text}</span>
            )}
        </div>
    )
}

export default EditableText
