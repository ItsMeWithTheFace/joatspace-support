import React, { Component } from 'react';
import { Card, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import * as emailjs from 'emailjs-com';
import config from '../config';

/*
  this manages the state of the contact form separately 
  from the support page
*/
class SupportForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      text: '',
      formSubmitted: false
    }

    this.handleChange.bind(this)
    this.handleSubmit.bind(this)
  }

  // set the correct state value
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [ name ]: value
    });
  }

  // sends email using emailjs library
  handleSubmit = (event) => {
    event.preventDefault();

    // some parameters set in src/config.js
    const emailParams = {
      from_name: this.state.name,
      from_email: this.state.email,
      to_name: config.emailjs.REACT_APP_EMAILJS_RECEIVER_NAME,
      to_email: config.emailjs.REACT_APP_EMAILJS_RECEIVER,
      message_html: this.state.text
    }

    emailjs.init(config.emailjs.REACT_APP_EMAILJS_USERID);

    emailjs.send(config.emailjs.SERVICE_ID,
      config.emailjs.REACT_APP_EMAILJS_TEMPLATEID,
      emailParams)
    .then(() => {
      this.setState({ formSubmitted: true })
    })
    .catch(err => {
      console.error(err)
    })
    .finally(() => {
      this.resetFields()
    })
  }

  // resets the text fields after submission
  resetFields = () => {
    this.setState({
      name: '',
      email: '',
      text: ''
    })
  }

  render = () => {
    const cardStyle = {
      margin: '5%'
    }

    const contentStyle = {
      padding: '3rem',
      textAlign: 'justify'
    }

    return (
      <Card style={cardStyle}>
        <Form style={contentStyle} onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="fullName">Full Name</Label>
            <Input type="text" required name="name" id="fullName" value={this.state.name} onChange={this.handleChange} placeholder="Enter your name here"/>
          </FormGroup>
          <FormGroup>
            <Label for="fromEmail">Email</Label>
            <Input type="email" required name="email" id="fromEmail" value={this.state.email} onChange={this.handleChange} placeholder="Enter your e-mail here"/>
          </FormGroup>
          <FormGroup>
            <Label for="inquiryText">Inquiry</Label>
            <Input type="textarea" name="text" id="inquiryText" value={this.state.text} onChange={this.handleChange} placeholder="Enter your issue..."/>
          </FormGroup>
          <Button type="submit" value="Submit">
            Submit
          </Button>          
        </Form>
      </Card>
    )
  }
}

export default SupportForm;
