import React, { useState } from "react";
import PublicFormListing from "../components/FormComponents/PublicFormListing";
import FormsData from "./../config/PublicForms.json";
import { Card,Row,Col } from "react-bootstrap";
import { IoMdArrowRoundBack } from "react-icons/io";
import { withRouter } from "react-router-dom";

const PublicForms = (props) => {
	const [parentId, setParentId] = useState(props.parentId || null);
	const [formListing, setFormListing] = useState(
		Object.values(FormsData).filter((i) => i.parent_id === parentId)
	);

	function goBack(item) {
		var formId = Object.values(FormsData).find((e) => e.form_id === item);
		const redirecTo = formId.parent_id === null ? "/" : formId.parent_id;
		props.history.push(redirecTo);
		setNext(formId.parent_id);
	}
	function setNext(formId) {
		setParentId(formId || null);
		setFormListing(
			Object.values(FormsData).filter((i) => i.parent_id === formId)
		);
	}

	return (
		<div className="PublicForms self-center">
			<Card className="shadow-md rounded-sm justify-content-center align-self-center align-content-center" style={{'max-width':'90rem'}}>
				{parentId ? (
					<Card.Header className="text-left bg-transparent">
						<h3 onClick={() => goBack(parentId)}>
							<IoMdArrowRoundBack /> Back
						</h3>
					</Card.Header>
				) : (
					""
				)}
				<Card.Body>
                    <Row>
                        <Col className="text-center">
                            <img src="/logo/logo.jpg" alt={'React'} style={{'margin-bottom':'70px'}}/>
                        </Col>
                    </Row>
					<PublicFormListing
						parentId={parentId}
						forms={formListing}
						goBack={goBack}
						setNext={setNext}
					/>
				</Card.Body>
			</Card>
		</div>
	);
};

export default withRouter(PublicForms);
