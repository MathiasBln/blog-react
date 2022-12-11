import React, {ChangeEvent, Dispatch, FormEvent, SetStateAction, useState} from "react"

export interface formDataInterface {
    name: string,
    post: string
}

export default function Form(setPosts:Dispatch<SetStateAction<object[]>>
    ) {

    const [formData, setFormData] = useState<formDataInterface>(
        {
            post:"", 
            name:""
        })

    const handleChange = (e: ChangeEvent) => {
        setFormData(prevState => {
            return {
                ...prevState,
                //pour cancel l'erreur rouge du target.name et target.value à cause du changeEvent
                //@ts-ignore
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        //cancel le reload de la page
        e.preventDefault()
       setPosts(prevState => {
        return {
            ...prevState, formData
        }
       })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="username" onChange={handleChange}/><br/>
            <textarea name="post" onChange={handleChange}/><br/>
            <button type="submit">Submit</button>
        </form>
    )
}