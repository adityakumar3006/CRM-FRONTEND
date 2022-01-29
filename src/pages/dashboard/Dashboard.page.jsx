import React from "react";
import { Container,Row,Col,Button } from "react-bootstrap";
import { Tickettable } from "../../components/tickettable/Tickettable.comp";
import tickets from "../../assets/data/dummy-tickets.json";
import { PageBreadcrumb}  from "../../components/breadcromb/Breadcromb.comp"
export const Dashboard=()=>{
    return(
        <Container>
            <Row>
                <Col>
              <PageBreadcrumb page="Dashboard"/>
                </Col>
            </Row>
            <Row>
                <Col className="text-center mt-5 mb-2">
                <Button variant="info" style={{fontSize:'2rem',padding: "10px 30px"}}>
                    Add new ticket
                </Button>
                </Col>
            </Row>
            <Row>
                <Col className="text-center  mb-2">
               <div>total tickets:50</div>
               <div>Pending tickets:5</div>
                </Col>
            </Row>
            <Row>
                <Col className=" mt-2">
              Recently Added Tickets
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col className=" recent-ticket">
              <Tickettable tickets={tickets} />
                </Col>
                </Row>


        </Container>
    )
}