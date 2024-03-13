import React, { useState, useEffect, useRef } from 'react'
import "./Form2.css"
import AppService from '../AppService'

const Form2 = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState(null)
    const [warning, setWarning] = useState("")
    const [previousName, setPreviousName] = useState("")
    const buttonClickedRef = useRef(false)
    const controllerRef = useRef(new AbortController())


    const fetchData = async () => {
        controllerRef.current.abort()
        controllerRef.current = new AbortController()
        const { signal } = controllerRef.current

        try {
            if (name === previousName || name === "") {
                console.log("Запрос с таким же именем уже был отправлен(или он пуст)")
                return
            }
            const data = await AppService.fetchAge(`https://api.agify.io/?name=${name}`, { signal })
            setAge(data.age)
            setPreviousName(name)
        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('Запрос был прерван')
            } else {
                console.error(error);
            }
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (name !== previousName && name !== "" && !buttonClickedRef.current) {
                fetchData()
            }
        }, 3000)

        return () => {
            clearTimeout(timer);
            controllerRef.current.abort()
        };
    }, [name]);

    const handleButtonClick = () => {
        buttonClickedRef.current = true;
        fetchData();
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value
        if (/^[a-zA-Z]*$/.test(inputValue)) {
            setName(inputValue)
            setWarning("")
        } else {
            setWarning("Имя может состоять только из латинских букв")
        }
        buttonClickedRef.current = false
    };

    return (
        <div className='Form2'>
            <h1>Задание 2</h1>
            <div className='main'>
                <input type='text' placeholder='введите свое имя' value={name} onChange={handleInputChange} />
                <button className='form_button' type='button' onClick={handleButtonClick}>Отправить</button>
                
            </div>
            
            {warning !== "" || age === null
                ? <p style={{color:"red"}}>{warning}</p>
                : <p>Ваш возраст: {age}</p>
            }
        </div>
    );
}

export default Form2;







