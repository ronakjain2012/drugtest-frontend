import React from "react";
import { Link,withRouter } from "react-router-dom";
import T from "../Utils/T";
import { Card, CardDeck } from "react-bootstrap";

const PublicFormListing = (props) => {
	return (
		<div className="PublicFormListing">
					<CardDeck>
						{props.forms.map((item) =>
								<Link to={item.url} key={item.form_id} onClick={()=>{props.setNext(item.form_id)}}>
									<Card
										className="public-form-cards shadow-md shadow-md-hover btn-gradient-hover btn-gradient-primary rounded-sm"
										key={item.form_id} 
										style={{ width: '25rem' }}
									>
										<Card.Body>
											<Card.Text>
												<T t={item.title} />
											</Card.Text>
										</Card.Body>
									</Card>
								</Link>
						)}
					</CardDeck>
		</div>
	);
};

export default withRouter(PublicFormListing);
