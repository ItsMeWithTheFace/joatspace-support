import React, { Component } from 'react';
import { Card, Button, Form, FormGroup, Label, Input } from 'reactstrap';

// this manages the state of the contact form separately 
// from the support page
class SupportForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      text: '',
      success: false
    }
  }

  handleChange = async (event) => {
    const { name, value } = event.target;
    console.log(process.env.emailjs);
    await this.setState({
      [ name ]: value
    });
  }

  handleSubmit = (event) => {

    console.log(event);
  }

  render = () => {
    const formStyle = {
      padding: '3rem',
      textAlign: 'justify'
    }

    return (
      <Card>
        <Form style={formStyle}>
          <FormGroup>
            <Label for="fullName">Full Name</Label>
            <Input type="text" name="name" id="fullName" onChange={this.handleChange} placeholder="Enter your name here"/>
          </FormGroup>
          <FormGroup>
            <Label for="fromEmail">Email</Label>
            <Input type="email" name="email" id="fromEmail" onChange={this.handleChange} placeholder="Enter your e-mail here"/>
          </FormGroup>
          <FormGroup>
            <Label for="inquiryText">Inquiry</Label>
            <Input type="textarea" name="text" id="inquiryText" onChange={this.handleChange} placeholder="Enter your issue..."/>
          </FormGroup>
          <Button type="submit" onSubmit={this.handleSubmit}>
            Submit
          </Button>          
        </Form>
      </Card>

    )
  }
}

export default SupportForm;
