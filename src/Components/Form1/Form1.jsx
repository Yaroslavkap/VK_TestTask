import React, { useState, useRef } from 'react'
import "./Form1.css"
import AppService from '../AppService'

const Form1 = () => {
    const inputRef = useRef(null)

    async function fetchData() {
        try {
            const data = await AppService.fetchData()
            if (inputRef.current) {
                inputRef.current.value = data.fact
                const firstSpaceIndex = data.fact.indexOf(' ')
                if (firstSpaceIndex !== -1) {
                    inputRef.current.setSelectionRange(firstSpaceIndex, firstSpaceIndex)
                }
                inputRef.current.focus()
            }
        } catch (error) {
            console.error(error)
            return null
        }
    }

    return (
        <div className='Form1'>
            <h1>Задание 1</h1>
            <div className='main'>
                <input type='text' ref={inputRef} placeholder='узнайте факт'/>
                <button className='form_button' type='button' onClick={fetchData}>Отправить</button>
            </div>
        </div>
    );
}

export default Form1;





