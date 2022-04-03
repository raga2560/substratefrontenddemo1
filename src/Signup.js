import React, { useEffect, useState } from "react";
// Import the API, Keyring and some utility functions
import { Button, Form, Input, Grid, Label, Icon, Dropdown } from 'semantic-ui-react'

const { ApiPromise, WsProvider } = require('@polkadot/api');
const { Keyring } = require('@polkadot/keyring');
const { randomAsU8a, randomAsNumber, randomAsHex } = require( '@polkadot/util-crypto');

// The ID of web3 user we are registering
const idtolink = '5GrgA3Pu4JGTgHEQsYHBrLwXi585gEZGVUWMNHg1rE7jhRjy';
const uriofid = 'orient portion sleep harbor laptop employ cradle bottom vast tornado shuffle noble';


// The email-id we need to register
const email = 'test33@ganesh.com';
const password = 'welcome123';

// Don;t change below two lines
const masterid =  '5HnLfzCVR9vuM1z2fmZqsNazPqw6FzBJwr42HQRebmu6R4hH';
const masteruri = 'author notable dial assume confirm inner hammer attack daring hair blue join';


export default function Signup(props) {

  const [status, setStatus] = useState(null);
  const [api, setApi] = useState(null);
  const [metadata, setMetadata] = useState({ data: null, version: null });
  const [eventFeed, setEventFeed] = useState([])


/*
  useEffect(() => {
    const getSetup = async () => {
  //async test () {
  const provider = new WsProvider('wss://student.selendra.org');

  // Create the API and wait until ready
  const api = await ApiPromise.create({ provider });
        const data = await api.rpc.state.getMetadata();
    };
    getSetup();
  }, [api.rpc.state]);


  //}
  const { api } = useSubstrate();
  const [metadata, setMetadata] = useState({ data: null, version: null });

  useEffect(() => {
    const getMetadata = async () => {
      try {
        const data = await api.rpc.state.getMetadata();
        setMetadata({ data, version: data.version });
      } catch (e) {
        console.error(e);
      }
    };
    getMetadata();
  }, [api.rpc.state]);

   getloginstatus() {
      setStatus("test");
   }
*/

        return (

	  <Grid.Column width={8}>


	  <Grid.Row >
            <Form>
                <h3>Student register </h3>
		<Form.Field>
                <label>Email address </label>
                <Input fluid placeholder='Email ' />
                </Form.Field>
		<Form.Field>
  		<label>Enter Password</label>
  		<Input type='password' placeholder='Password' />
		</Form.Field>
		 <Button
        	label="Submit"
		  floated="right"

        	onClick={_ => setEventFeed([])}
      		/>

            </Form>
	  </Grid.Row >
	  <Grid.Row >
                <h3>Result  </h3>
		 <pre>
                  <code>{JSON.stringify(metadata.data, null, 2)}</code>
                </pre>

	  </Grid.Row >


	  <Grid.Row >
            <Form>
                <h3>Web3 link student </h3>
		<Form.Field>
                <label>Email address </label>
                <Input fluid placeholder='Email ' />
                </Form.Field>
		<Form.Field>
                <label>Public key </label>
                <Input fluid placeholder='Public key ' />
                </Form.Field>
		<Form.Field>
  		<label>Enter Password</label>
  		<Input type='password' placeholder='Password' />
		</Form.Field>
		 <Button
        	label="Sign"
		  floated="right"

        	onClick={_ => setEventFeed([])}
      		/>

            </Form>
	  </Grid.Row >

          </Grid.Column>
        );
    }
