import React  from "react";
import { Form ,Row,Col,Button} from "react-bootstrap";
import "./style.css"
import PropTypes from 'prop-types';

export const Addticketform=({handleOnSubmit,handleOnChange,frmDt, frmDataerror})=>{
    console.log(frmDt)
    return(
        <div className='mt -3 jumbotron bg-light' >
            <h1 className="text-info text-center"> Add new ticket</h1>
            <hr />
             <Form autoComplete="off" onSubmit={handleOnSubmit}>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Subject</Form.Label>
                                <Col sm={10}>
                                <Form.Control
                                  
                                    name="subject"
                                     value={frmDt.subject}
                                    onChange={handleOnChange}
                                    placeholder='Subject'
                                    required

                                />
                                <Form.Text className="text-danger">{frmDataerror.subject &&"subject is required!!"}   </Form.Text>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                Issue Found</Form.Label>
                                <Col sm={10}>
                                <Form.Control
                                    type="date"
                                    name="issueDate"
                                    value={frmDt.issueDate}
                                     onChange={handleOnChange}
                                 
                                /></Col>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                as="textarea"
                                    name="detail"
                                    value={frmDt.detail }
                                    rows="5"
                                     onChange={handleOnChange}
                                 
                                />
                            </Form.Group>
                            <Button type="submit" varieant="info" block>Login</Button>
                        </Form>
            </div>

    );
};
Addticketform.prototype={
    handleOnSubmit:PropTypes.func.isRequired
    ,handleOnChange:PropTypes.func.isRequired
    ,frmDt:PropTypes.func.isRequired,
    frmDataerror:PropTypes.func.isRequired

}