import React from 'react';
import T from '../components/Utils/T'
import PublicFormListing from '../components/FormComponents/PublicFormListing'
import FormsData from './../config/PublicForms.json'
const PublicForms = (props) => {
    return (
        <div className="PublicForms">
            <p> <T t="Public Forms Listing"/></p>
            <hr/>
            <PublicFormListing forms={FormsData}/>
        </div>
    )
}

export default PublicForms