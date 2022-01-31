import React, { useEffect, useState }  from "react";
import { Container,Row,Col,Button } from "react-bootstrap";
import { Addticketform } from "../../components/addticketform/Addticketform.comp";
import { PageBreadcrumb } from "../../components/breadcromb/Breadcromb.comp";
import { shortText } from "../../utils/validation";
const initialFrmDt={
    subject :'',
    issueDate:" ",
    detail:'',

}
const initialFrmerror={
    subject :'false',
    issueDate:" false",
    detail:'false',

}
export const Addticket=()=>{
 
    const [frmData,setFrmData]=useState(initialFrmDt)
    const [frmDataerror,setFrmDataerror]=useState(initialFrmerror)
    useEffect(()=>{}, [frmData,frmDataerror]);
    const handleOnChange= (e)=>{
     

        const {name, value }=e.target;
        setFrmData({
            ...frmData,
            [name]:value,

        })
      //  console.log(name,value)

    };
    const handleOnSubmit = async(e)=>{
        e.preventDefault()
        setFrmDataerror(initialFrmerror)
        const isSubjectvalid= await shortText(frmData.subject)
        setFrmDataerror({
            ...initialFrmerror,
            subject:!isSubjectvalid
        }
            
        );
        console.log('Form submit request recieved',frmData)
    };
    return(
       <Container>
           <Row>
               <Col>
               <PageBreadcrumb page ="New ticket"/>
               </Col>
           </Row>
           <Row>
               <Col>
             <Addticketform 
             handleOnChange={handleOnChange}
             handleOnSubmit={handleOnSubmit}
              frmDt={frmData}
              frmDataerror={frmDataerror}/>
           
               </Col>
           </Row>
       </Container>
    );
};