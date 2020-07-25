import React, { Component } from "react";
import Looto from "./images/lotoImages.png";
import Looto2 from "./images/loto2.jpg";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container" id="about">
          <div className="row">
            <div className="col-9 mt-5">
              <h1>About Us</h1>
              <br />
              <p>
                We are Bangkok Weekly Lottery outlet in Bangkok with a internet
                group that help each other to get rich by luck. We are operating
                as a group of people sharing our analysis and predictions.
                "Bangkok Weekly Lottery Website" is the name of our internet
                branch and has a lot of members local and international. Our
                location is North Bangkok and the surrounding districts where we
                mostly operate from, which is only about 25 minutes drive to
                Bangkok International Airport and Future Park-Rangsit shopping
                complex, one of the very big, clean shopping malls in Thailand.
                Our services are fairly wide and varied but we do offer a free,
                reliable, helpful, and honest, service to our local and
                international clients who are always happy to refer our services
                to others. Our staffs are fluent in both the English and Thai
                languages. We have been engaged in this line of business for
                over 7 years. Primarily our main task sharing tips and letting
                the players know the latest results of the current game as early
                as possible. We also share our tips and predictions to our
                members and guests. We welcome viewers with tips and predictions
                for the next game, send them in English with your name or nick
                name, and any track record, qualifications, or achievements you
                have gained in giving previous accurate tips via dreams,
                precognition, rabbit footprints, studying the moon & stars etc.
                and we will publish them.
              </p>
              <br />
              <p>
                Latest submission of tips and predictions would be two days
                before the coming draw. So if you want to submit your
                predictions please send them as early as possible so we can
                publish them and let others to see. Please ensure that your tips
                are sent in two days before the draw. Study your crystal balls,
                charts, dreams, analysis and other devices before sending in
                your tips. The Lucky tipsters in future will get recognized &
                mentioned in our Hall of Fame page.
              </p>
              <br />
              <h1>Disclaimer</h1>
              <br />
              <p>
                This is an unofficial site and is not associated with the
                Bangkok Weekly Lottery Commission. Although we have taken
                extreme care, no warranty as to the accuracy of any of the
                presented information is implied. Please check with official
                sources to confirm any winning (or losing) numbers. The Bangkok
                Weekly Lottery Page is located at http://www.lotto-tahi.com/ and
                has been online since January 1999.
              </p>
            </div>
            <div
              className="col-3 justify-content-center "
              style={{ marginTop: "150px" }}
            >
              <img src={Looto} className="d-block w-100" alt="..." />
              <br />
              <br />
              <br />
              <img src={Looto2} className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
