import React from 'react';
import { Header, Image, Icon, Button, Grid, Search, Divider, Segment } from 'semantic-ui-react';
import './index.css';
import image from './images/yagya.jpeg'
import image1 from './images/image1.jpeg';

export const AboutCard = function AboutCard() {



  return (
    <div className="ui container">
      <div className="ui  grid">
        <div className="ui  one column row wide">
          <div className="ui  center aligned column">
            <Header as='h2' icon textAlign='center'>


            </Header>
            <Segment className="segment" style={{ background: "#8E0E00", background: "-webkit-linear-gradient(to right, #1F1C18, #8E0E00)", background: "linear-gradient(to right, #1F1C18, #8E0E00)"}} color='red' raised placeholder stackable doubling >
              <p style={{ color: 'white', fontSize: "28px", fontFamily: 'Times New Roman' }}>
                <b>About</b>
              </p>
              <Image src={image} centered size='tiny' circular />
              <Grid columns={1} stackable textAlign='center'>


                <Grid.Row verticalAlign='middle'>
                  <Grid.Column>

                    {/* <h4 icon style={{ color: 'white', fontSize: "20px" }}>
                      Hi I'M
          </h4>
                    <p style={{ color: 'white', fontSize: "28px", fontFamily: 'Times New Roman' }}>
                      <b>Yagya</b>
                    </p>
                    <p style={{ color: 'white', fontSize: "20px", fontFamily: 'Times New Roman' }}>
                      and I'm a <span style={{color:'red'}}><b>Web Development</b></span>
        </p>

                    <Button primary>know more</Button> */}
                    <h1>Coming soon!</h1>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </div>
        </div>
      </div>
    </div>
  );



}