import React, { useState } from "react";
import { Link } from 'react-router-dom'
import T from "../Utils/T";
import { Card, CardColumns } from "react-bootstrap";
import { IoMdArrowRoundBack } from "react-icons/io";

const PublicFormListing = (props) => {
	const [parentId, setParentId] = useState(null);
	const [formListing, setFormListing] = useState(
		Object.values(props.forms).filter((item) => item.parent_id === parentId)
	);
	function goNext(item) {
		var items = Object.values(props.forms).filter((e) => e.parent_id === item);
		if (items.length) {
			setParentId(item);
			setFormListing(items);
		}
	}

	function goBack(item) {
		var formId = Object.values(props.forms).find((e) => e.form_id === item);
		goNext(formId.parent_id);
	}
	return (
		<div className="PublicFormListing">
			<Card className="shadow-md rounded-sm">
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
					<CardColumns>
						{formListing.map((item) => (
							<Link to={item.url} key={item.form_id}>
								<Card
									className="public-form-cards shadow-sm rounded-sm"
									onClick={() => goNext(item.form_id)}
									key={item.form_id}
								>
									<Card.Body>
										<Card.Text>
											<T t={item.title} />
										</Card.Text>
									</Card.Body>
								</Card>
							</Link>
						))}
					</CardColumns>
				</Card.Body>
			</Card>
		</div>
	);
};

export default PublicFormListing;
