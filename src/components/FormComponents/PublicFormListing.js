import React from "react";
import { Link, withRouter } from "react-router-dom";
import T from "../Utils/T";
import { Card, CardDeck, Col, Row, Container } from "react-bootstrap";

const PublicFormListing = (props) => {
	return (
		<div className="PublicFormListing">
			<CardDeck>
				<Container>
				<Row>
					{props.forms.map((item, index) =>
						<Col key={`col${index}`} md={4} lg={4}>
							<Link to={item.url} onClick={() => { props.setNext(item.form_id) }}>
								<Card className="home-cardbox btn-gradient-hover btn-gradient-primary"
									key={item.form_id}>
									<Card.Body className="text-center">
										<Card.Text>
										{item.title} {' '}
										</Card.Text>
									</Card.Body>
								</Card>
							</Link>
						</Col>
					)}
				</Row>
				</Container>
			</CardDeck>
		</div>
	);
};

export default withRouter(PublicFormListing);
