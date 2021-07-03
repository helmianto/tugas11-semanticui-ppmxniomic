import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Placeholder, Icon, Segment, List, Grid, Input, Form, Divider, Flag, Image, Header, Dimmer, Loader } from 'semantic-ui-react';

class App extends Component {
  render(){
    return (
      <div>
        <br />
        <Segment placeholder>
          <Grid columns={2} relaxed='very' stackable>
            <Grid.Column textAlign='center'>              
              <Icon name='search' size='huge' />
              <h3>Search Document</h3>
              <Input icon='search' placeholder='Search...' />
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon name='file pdf outline' size='huge' />
              <h3>Tambah Document Baru</h3>
              <Button content='Create Document' primary />
            </Grid.Column>
          </Grid>

          <Divider vertical>Or</Divider>
        </Segment>
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>

          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>
        <br />
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </Grid.Column>
            <Grid.Column>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </Grid.Column>            
            <Grid.Column>
              <h5>Website Terkait</h5>
              <List>
                <List.Item>
                  <List.Icon name='linkify' />
                  <List.Content>
                    <a href='http://www.google.com'>Google</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='linkify' />
                  <List.Content>
                    <a href='http://www.facebook.com'>Facebook</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='linkify' />
                  <List.Content>
                    <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='linkify' />
                  <List.Content>
                    <a href='http://www.Niomic.com'>Niomic</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='linkify' />
                  <List.Content>
                    <a href='http://www.reactjs.org'>React</a>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
