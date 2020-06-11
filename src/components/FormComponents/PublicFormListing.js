import React from "react";
import { Link,withRouter } from "react-router-dom";
import T from "../Utils/T";
import { Card, CardColumns } from "react-bootstrap";
import { IoMdArrowRoundBack } from "react-icons/io";

const PublicFormListing = (props) => {
	return (
		<div className="PublicFormListing">
			<Card className="shadow-md rounded-sm">
				{props.parentId ? (
					<Card.Header className="text-left bg-transparent">
						<h3 onClick={() => props.goBack(props.parentId)}>
							<IoMdArrowRoundBack /> Back
						</h3>
					</Card.Header>
				) : (
					""
				)}
				<Card.Body>
					<CardColumns>
						{props.forms.map((item) =>
								<Link to={item.url} key={item.form_id} onClick={()=>{props.setNext(item.form_id)}}>
									<Card
										className="public-form-cards shadow-sm rounded-sm"
										key={item.form_id}
									>
										<Card.Body>
											<Card.Text>
												<T t={item.title} />
											</Card.Text>
										</Card.Body>
									</Card>
								</Link>
						)}
					</CardColumns>
				</Card.Body>
			</Card>
		</div>
	);
};

export default withRouter(PublicFormListing);
