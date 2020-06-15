import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const LoginForms = (props) => {
	return (
		<div className="PublicForms self-center">
			<Card
				className="shadow-md rounded-sm justify-content-center align-self-center align-content-center"
				style={{ width: "30rem" }}
			>
				<Card.Header className="text-left bg-transparent text-center">
					<h3>Login</h3>
				</Card.Header>
				<Card.Body>
					<Row>
						<Col>
							<form id="login-form" className="form" action="" method="post">
								<div className="form-group">
									<label for="username" className="text-info">
										Email:
									</label>
									<br />
									<input
										type="text"
										name="username"
										id="username"
										className="form-control"
									/>
								</div>
								<div className="form-group">
									<label for="password" className="text-info">
										Password:
									</label>
									<br />
									<input
										type="text"
										name="password"
										id="password"
										className="form-control"
									/>
								</div>
								<div className="form-group">
									<label for="remember-me" className="text-info">
										<span>Remember me</span> 
										<span>
											<input
												id="remember-me"
												name="remember-me"
												type="checkbox"
											/>
										</span>
									</label>
									<input
										type="button"
										name="submit"
										className="btn btn-info btn-md float-right"
										value="submit"
									/>
								</div>
								<div id="register-link" className="text-right">
									<a href="#" className="text-info">
										Register here
									</a>
								</div>
							</form>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</div>
	);
};

export default withRouter(LoginForms);
