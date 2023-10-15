'use client';

import styled from "styled-components"
import FormRightWrapper from "../Form/Components/FormRightWrapper"
import FormLeftWrapper from "../Form/Components/FormLeftWrapper"
import { createContext, useState } from "react"

const FormState = createContext();

const Form = () => {

    const [form, setForm] = useState({
        campignTitle:"",
        story:"",
        requiredAmount:"",
        category:"",
    });

    const FormHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const [image, setImage] = useState(null);

    const ImageHandler = (e) => {
        setImage(e.target.files[0]);
    }

  return (
    <FormState.Provider value={{form,setForm,FormHandler ,image,setImage,ImageHandler}}>
    <FormWrapper>
        <FormMain>
            {/* <FormTitle>
                createcampaign
            </FormTitle> */}
            <FormInputsWrapper>
                <FormLeftWrapper />
                <FormRightWrapper />
            </FormInputsWrapper>
        </FormMain>
    </FormWrapper>
    </FormState.Provider>
  )
}

const FormWrapper = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
`

const FormMain = styled.div`
    width: 80%;
`

// const FormTitle = styled.div`
//     width:100%;
//     display:flex;
//     justify-content:center;
//     align-items:center;
//     text-transform:capitalize;
//     font-weight:bold;
//     color : ${(props) => props.theme.color};
//     font-size:40px;
//     margin-top:20px;
//     font-family:playfair;
// `

const FormInputsWrapper = styled.div`
    display:flex;
    justify-content:space-between;  
    margin-top:45px;
`

export default Form;
export {FormState};