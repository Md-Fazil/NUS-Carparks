import React from 'react'

function CPInfo(props) {
        const value = props.name;
        if(value == "Raffles Hall"){
          return (<div>
              <h2>CP4</h2>
              <p> Raffles Hall</p>
              </div>)
        } else if (value == "University Town (SRC)") {
          return (<div>
            <h2> University Town</h2>
            <p> Stephen Riady Centre</p>
            </div>)
        } else if (value == "CREATE") {
            return (<div>
              <h2> University Town</h2>
              <p> CREATE Tower</p>
              </div>)
          }else if (value == "University Town (College Avenue East and West)") {
            return (<div>
              <h2>University Town</h2>
              <p> College Avenue East and West</p>
              </div>)
          } else if (value == "University Cultural Centre/Yong Siew Toh Conservat") {
            return (<div>
              <h2>CP3</h2>
              <p> University Cultural Centre</p>
              </div>)
          } else if (value == "Lee Kong Chian Natural History Museum") {
            return (<div>
              <h2>CP3A</h2>
              <p> Lee Kong Chian Natural History Museum</p>
              </div>)
          } else if (value == "Sports & Recreation Centre") {
            return (<div>
              <h2>CP5</h2>
              <p> Sports & Recreation Centre</p>
              </div>)
          } else if (value == "NUS Staff Club") {
            return (<div>
              <h2>CP5B</h2>
              <p> NUS Staff Club</p>
              </div>)
          } else if (value == "University Hall") {
            return (<div>
              <h2>CP6B</h2>
              <p> University Hall</p>
              </div>)
          } else if (value == "S1A, Faculty of Science") {
            return (<div>
              <h2>CP6A</h2>
              <p> S1A, Faculty of Science</p>
              </div>)
          } else if (value == "S7 & S13, Faculty of Science") {
            return (<div>
              <h2>CP6</h2>
              <p> S7 & S13, Faculty of Science</p>
              </div>)
          } else if (value == "S10 & S14, Faculty of Science") {
            return (<div>
              <h2>CP7</h2>
              <p> S10 & S14, Faculty of Science</p>
              </div>)
          } else if (value == "S16, Faculty of Science") {
            return (<div>
              <h2>CP8</h2>
              <p> S16, Faculty of Science</p>
              </div>)
          } else if (value == "NUS IT") {
            return (<div>
              <h2>CP17</h2>
              <p>NUS IT</p>
              </div>)
          } else if (value == "AS8") {
            return (<div>
              <h2>CP18</h2>
              <p>AS8</p>
              </div>)
          } else if (value == "School of Design/Faculty of Engineering") {
            return (<div>
              <h2>CP1/CP2/CP2A/CP2B</h2>
              <p>School of Design/Faculty of Engineering</p>
              </div>)
          } else if (value == "Faculty of Arts & Social Science (LT11/AS2)") {
            return (<div>
              <h2>CP16</h2>
              <p>Faculty of Arts & Social Science (LT11/AS2)</p>
              </div>)
          } else if (value.includes("Shaw")) {
            return (<div>
              <h2>CP14</h2>
              <p>Shaw Foundation Building (AS7), Faculty of Arts & Social Science</p>
              </div>)
          } else if (value == "Opposite NUSS/SFAH, Temasek Hall, Eusoff Hall & Ve") {
            return (<div>
              <h2>CP15</h2>
              <p>Opposite NUSS/SFAH, Temasek Hall, Eusoff Hall & Ve</p>
              </div>)
          } else if (value == "Hon Sui Sen Memorial Library, School of Business") {
            return (<div>
              <h2>CP12</h2>
              <p>Hon Sui Sen Memorial Library, School of Business</p>
              </div>)
          } else if (value == "School of Business") {
            return (<div>
              <h2>CP11</h2>
              <p>School of Business</p>
              </div>)
          } else if (value == "Innovation 4.0") {
            return (<div>
              <h2>CP11B</h2>
              <p>Innovation 4.0</p>
              </div>)
          } else if (value == "I-Cube") {
            return (<div>
              <h2>CP12B</h2>
              <p>I-Cube</p>
              </div>)
          } else if (value == "TCOMS") {
            return (<div>
              <h2>CP11C</h2>
              <p>TCOMS</p>
              </div>)
          } else if (value == "PGP Residences") {
            return (<div>
              <h2>CP10B</h2>
              <p>PGP Residences</p>
              </div>)
          } else if (value == "CRISPS") {
            return (<div>
              <h2>CP10A</h2>
              <p>CRISPS</p>
              </div>)
          } else if (value == "Centre for Life Sciences") {
            return (<div>
              <h2>CP10C</h2>
              <p>Centre for Life Sciences</p>
              </div>)
          }else if (value == "MD11, Yong Loo Lin School of Medicine") {
            return (<div>
              <h2>CP9A</h2>
              <p>MD11, Yong Loo Lin School of Medicine</p>
              </div>)
          }  else if (value == "S17, Faculty of Science") {
            return (<div>
              <h2>CP10S/CP10V</h2>
              <p>S17, Faculty of Science</p>
              </div>)
          } else if (value == "DSI") {
            return (<div>
              <h2>CP2C</h2>
              <p>DSI</p>
              </div>)
          } else if (value == "COM1, School of Computing") {
            return (<div>
              <h2>CP13</h2>
              <p>COM1, School of Computing</p>
              </div>)
          } else{
              return (<p>{props.name}</p>)
          }
}

    


export default CPInfo
