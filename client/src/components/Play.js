import React, { Component } from "react";
import Looto from "./images/lotoImages.png";
import Looto2 from "./images/loto2.jpg";
class Play extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container" id="about">
          <div className="row">
            <div className="col-9 mt-5">
              <h1>How to Play</h1>
              <br />
              <p>
                Bangkok weekly lottery hare the winning number is taken from the
                last three digits of the original six number first prize winner.
                Example first prize winner is 123456 then the winning number for
                the pick 3 lottery IS 456. The lowest number is 0 and the
                highest number is 9. if you get the winning number in the right
                order you will be Bt 500.00 for every Bt 1.00. if you get the
                last 3 digits but not in the right order then you will win
                Bt100.00 for every Bt 1.0 you played.
              </p>
              <p>
                The game is drawn every Thursday. The last day of entry is
                Wednesday at 6 p.m. Bangkok time. Result of the winning number
                are published on the internet at this address{" "}
                <a href="http://lotto-thai.com/" target="_blank">
                  http://www.lotto-thai.com
                </a>
              </p>
              <p>
                The official lottery winning number may be obtained from any
                Bangkok weekly lottery outlet. Results from the previous draws
                are also available.
              </p>
              <h1>You win a prize in</h1>
              <p>
                Your lottery ticket is your record entry and your way of
                collecting prizes. Be sure to check that your ticket is correct
                before leaving the lottery outlet. It is your responsibility to
                verify that the details printed agree with your selections.
                Write your name and address on the back of the ticket. Hold on
                to it, it could be worth a fortune.
              </p>
              <p>
                You can claim your lottery prize from any lottery outlet. Prizes
                can be collected by presenting and surrounding the winning
                ticket.
              </p>
              <h1>High rollers more likely to win</h1>
              <p>
                20 of the 297 jackpot winners on the Bangkok weekly lottery were
                high rollers. That is according to the official lottery
                organizer reported in the media today. The number of high
                rollers is extremely small compared to the number of people who
                play the lottery. Some are quoted as insisting that those
                individuals did not buy large blocks of tickets.
              </p>
              <p>
                Statically, the facts suggest that the extreme wealth of the
                winners would have had something to do with winning the
                jackpots. There are possible explanations. These have been
                raised on this site. See the points on mega syndicates. See the
                points about the potential returns of lottery "investments"
                under particular circumstances. The effects of playing an
                extremely high number of tickets on the lottery can be
                computer-simulated accurately.
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

export default Play;
