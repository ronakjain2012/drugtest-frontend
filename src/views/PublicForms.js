import React,{useState} from 'react';
import T from '../components/Utils/T'
import PublicFormListing from '../components/FormComponents/PublicFormListing'
import FormsData from './../config/PublicForms.json'
import { withRouter } from "react-router-dom";

const PublicForms = (props) => {


    const [parentId,setParentId] = useState(props.parentId||null);
    const [formListing,setFormListing] = useState(Object.values(FormsData).filter((i)=>i.parent_id === parentId));
    
	function goBack(item) {
		var formId = Object.values(FormsData).find((e) => e.form_id === item);	
		const redirecTo = formId.parent_id===null?'/':formId.url
		setParentId(formId.parent_id||null)
		setFormListing(Object.values(FormsData).filter((i)=>i.parent_id === formId.parent_id));
		props.history.push(redirecTo);
	}
	function setNext(formId) {
		setParentId(formId||null)
		setFormListing(Object.values(FormsData).filter((i)=>i.parent_id === formId));
	}


    return (
        <div className="PublicForms">
            <p> <T t="Public Forms Listing"/> {parentId} </p>
            <PublicFormListing parentId={parentId} forms={formListing} goBack={goBack} setNext={setNext}/>
        </div>
    )
}

export default withRouter(PublicForms)