import React from 'react';
import axios from 'axios';
import classnames from 'classnames';

export default class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        };
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onSubmit = event => {
        event.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        axios
            .post('/api/users/register', newUser)
            .then(res => console.log(res.data))
            .catch(err => this.setState({ errors: err.response.data }));
    };

    render() {
        const { errors } = this.state;

        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">
                                Create your DevConnector account
                            </p>
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames(
                                            'form-control form-control-lg',
                                            {
                                                'is-invalid': errors.name // only have this class when error exist
                                            }
                                        )}
                                        placeholder="Name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.onChange}
                                    />
                                    {errors.name ? (
                                        <div className="invalid-feedback">
                                            {errors.name}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        className={classnames(
                                            'form-control form-control-lg',
                                            {
                                                'is-invalid': errors.email // only have this class when error exist
                                            }
                                        )}
                                        placeholder="Email Address"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                    {errors.email ? (
                                        <div className="invalid-feedback">
                                            {errors.email}
                                        </div>
                                    ) : null}
                                    <small className="form-text text-muted">
                                        This site uses Gravatar so if you want a
                                        profile image, use a Gravatar email
                                    </small>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className={classnames(
                                            'form-control form-control-lg',
                                            {
                                                'is-invalid': errors.password // only have this class when error exist
                                            }
                                        )}
                                        placeholder="Password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
                                    {errors.password ? (
                                        <div className="invalid-feedback">
                                            {errors.password}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className={classnames(
                                            'form-control form-control-lg',
                                            {
                                                'is-invalid': errors.password2 // only have this class when error exist
                                            }
                                        )}
                                        placeholder="Confirm Password"
                                        name="password2"
                                        value={this.state.password2}
                                        onChange={this.onChange}
                                    />
                                    {errors.password2 ? (
                                        <div className="invalid-feedback">
                                            {errors.password2}
                                        </div>
                                    ) : null}
                                </div>
                                <input
                                    type="submit"
                                    className="btn btn-info btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
