import React from 'react'
import Video from '../images/herbal5.3gpp';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import '../styles/About.css';

function About() {
    return (
        <div className = "about">

          <video className = "about__video" width="1400" height="540" controls>
            <source src = {Video} type="video/ogg" />
               Your browser does not support the video tag.
               </video>

        <Row className = "about__row">
      <Col sm="4">
        <Card body>
          <CardTitle tag="h5">Arthica Herbal Massage Oil</CardTitle>
          <CardText>

This remedy is widely used for curing all the Joint and Muscular Pains.Massage with this oil gives lasting relief from Joint Pains , Backache , Headache , Cold , Burns , Injury , Neck Pain , Muscle Pain , Bone Pains , Heel Pains , Swelling , Arthritis , Sprain And Pain in the Ribs.</CardText>
        
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardTitle tag="h5">ऑर्थिका हर्बल मसाज ऑयल</CardTitle>
          <CardText>

यह उपाय व्यापक रूप से सभी संयुक्त और मांसपेशियों के दर्द को ठीक करने के लिए उपयोग किया जाता है। इस तेल के साथ मालिश करने से जोड़ों के दर्द, पीठ दर्द, सिरदर्द, जुकाम, जलन, गर्दन में दर्द, मांसपेशियों में दर्द, अस्थि दर्द, हील दर्द, सूजन, गठिया , पसलियों में मोच और दर्द।.</CardText>
          
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardTitle tag="h5">आर्थिका हर्बल मालिश तेल</CardTitle>
          <CardText>

हा उपाय सर्व सांधे व स्नायूंच्या वेदना दूर करण्यासाठी मोठ्या प्रमाणात केला जातो. या तेलाने मालिश केल्याने सांधेदुखी, पाठदुखी, डोकेदुखी, सर्दी, बर्न्स, दुखापत, मान, दुखणे, स्नायू दुखणे, हाड दुखणे, सूज येणे, संधिवात पासून चिरस्थायी आराम मिळतो. , पाश्यामध्ये मोच आणि वेदना..</CardText>
         
        </Card>
      </Col>
    </Row>
        
        </div>
    )
}

export default About;
