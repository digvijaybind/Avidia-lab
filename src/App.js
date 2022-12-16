
import "./App.css";
import { Image } from "./component/left";
import { Aboutme } from "./component/left";
import { Contactus } from "./component/left";
import { Skill } from "./component/left";
import { Education } from "./component/right";
import { Experience } from "./component/right";
import { Language } from "./component/right";
import { Col, Row } from "antd";
import Profiledata from "./profile.json";

function App() {
  console.log("data", Profiledata);
  return (
    <Row gutter={24} className="Container">
      <Col xs={24} lg={12} className="Leftside">
        <Image />
        <Aboutme />
        {Profiledata.map((data, index) => {
          console.log("skilldata", data.skillSet);
          return data.skillSet.map((dataskill, index) => {
            console.log(" dataskill.skillName=", dataskill.skillName);
            console.log(" dataskill.percentage=", dataskill.percentage);

            return (
              <Skill
                key={index}
                title={dataskill.skillName}
                percentage={dataskill.percentage}
              />
            );
          });
        })}

        <Contactus
          email={Profiledata[0].contacts.email}
          mobile={Profiledata[0].contacts.mobile}
        />
      </Col>
      <Col xs={24} lg={12} className="Rightside">
        <Education />
        <Language />
        <Experience />
      </Col>
    </Row>
  );
}

export default App;
