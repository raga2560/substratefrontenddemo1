import React, { useEffect, useState } from "react";
import { stringToHex, stringToU8a, u8aToHex } from '@polkadot/util';

import { Keyring } from  '@polkadot/keyring';
import { web3Accounts, web3Enable, web3FromAddress,
  web3ListRpcProviders,
	web3FromSource,
  web3UseRpcProvider
 } from '@polkadot/extension-dapp';


import type { Signer } from '@polkadot/api/types';
// Import the API, Keyring and some utility functions
import { Button, Form, Input, Grid, Label, Icon, Dropdown } from 'semantic-ui-react'
import { useSubstrateState } from './substrate-lib'


const { ApiPromise, WsProvider } = require('@polkadot/api');
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


function Main(props) {

  const [status, setStatus] = useState(null);
//  const [api, setApi] = useState(null);
  const [metadata, setMetadata] = useState({ data: null, version: null });
  const [signer, setSigner] = useState({ isUsable: true, signer: null });
  const [eventFeed, setEventFeed] = useState([])
  const [logindata, setLogindata] = useState(null);
  const [signature, setSignature] = useState(null);
  const { api } = useSubstrateState();

  const { keyring } = useSubstrateState()

    const getEmaildata = async () => {
      try {

  let record = await api.query.identity.studentidOf(email);

  if(record.inspect().inner) {
    let recordp = JSON.parse(record);
    console.log("Email " + email + " registered with " + recordp.accountId);
    console.log(JSON.stringify(recordp));

  }else {
    console.log("Email "+ email + "  not registered" );
    process.exit();
  }

 let recordp = JSON.parse(record);

        setEmaildata(email);
        setPublickey(recordp.accountId);

      } catch (e) {
        console.error(e);
      }
	    
    }

    const getPublickeydata = async () => {
      try {

  let record = await api.query.identity.emailId(publickey);

  console.log(JSON.stringify(record));

  if(record.toHuman() != null) {
  console.log(record.toHuman() + " is already linked to " + idtolink);

  email = record.toHuman();
  }else {
     return;
  }


  let record = await api.query.identity.studentidOf(email);

  if(record.inspect().inner) {
    let recordp = JSON.parse(record);
    console.log("Email " + email + " registered with " + recordp.accountId);
    console.log(JSON.stringify(recordp));

  }else {
    console.log("Email "+ email + "  not registered" );
    process.exit();
  }

 let recordp = JSON.parse(record);

        setEmaildata(email);
        setPublickey(recordp.accountId);

      } catch (e) {
        console.error(e);
      }
	    
    }

    const type2Login = async () => {

      try {

const record = await api.query.identity.studentidOf(email);

  if(record.inspect().inner) {
    let recordp = JSON.parse(record);
    console.log("Email " + email + " registered with " + recordp.accountId);
    console.log(JSON.stringify(recordp));

  }else {
    console.log("Email "+ email + "  not registered" );
    process.exit();
  }

const recordp = JSON.parse(record);

  if(alice.address == recordp.accountId) {
    console.log("Valid mneomonic allow login");
    process.exit();

  }else {
    console.log("Invalid mneomonic provided");
    process.exit();
  }


/*
// const accountPair = keyring.getPairs()[0]; 
const accountPair = keyring.getPair('4oEhW3fUYtt283rNSQypJgVMoVxbxkEPHBWrAonCW7o5cFRq');

const message = stringToU8a('this is our message');
const signature = accountPair.sign(message);
const isValid = accountPair.verify(message, signature, accountPair.publicKey);

console.log("DoLogin");
console.log(`${u8aToHex(signature)} is ${isValid ? 'valid' : 'invalid'}`);
*/

/*
const payring = new Keyring({ type: 'sr25519' });

let alice = payring.addFromUri(uriofid);

const message = stringToU8a('this is our message');
const signature = alice.sign(message);
const isValid = alice.verify(message, signature, alice.publicKey);

console.log(`${u8aToHex(signature)} is ${isValid ? 'valid' : 'invalid'}`);
*/

/*
        const wrapped = 'test1';
        signer
          .signRaw({
            address: accountPair.address,
            data: u8aToHex(wrapped),
            type: 'bytes'
          })
          .then(({ signature }) => setSignature(signature))
          .catch(console.error); 

*/
      } catch (e) {
        console.error(e);
      }
    }
    // doLogin();
//  }, [api, accountPair]);


    const type3Login = async () => {

    try {
// this call fires up the authorization popup
const extensions = await web3Enable('my cool dapp');

if (extensions.length === 0) {
    // no extension installed, or the user did not accept the authorization
    // in this case we should inform the use and give a link to the extension
    return;
}

// we are now informed that the user has at least one extension and that we
// will be able to show and use accounts
const allAccounts = await web3Accounts();

 // We arbitraily select the first account returned from the above snippet
// `account` is of type InjectedAccountWithMeta 
const account = allAccounts[0];

// to be able to retrieve the signer interface from this account
// we can use web3FromSource which will return an InjectedExtension type
const injector = await web3FromSource(account.meta.source);


// this injector object has a signer and a signRaw method
// to be able to sign raw bytes
const signRaw = injector?.signer?.signRaw;

if (!!signRaw) {
    // after making sure that signRaw is defined
    // we can use it to sign our message
    const { signature } = await signRaw({
        address: account.address,
        data: stringToHex('message to sign'),
        type: 'bytes'
    });
}

      } catch (e) {
        console.error(e);
      }
  }





        return (

	  <Grid.Column width={8}>


	  <Grid.Row >
            <Form>
                <h3>Type-1 Email/password login</h3>
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
        	onClick={_ => doLogin()}
      		/>
		 <Button
        	label="Get Status"
		  floated="right"
        	onClick={_ => getLogindata()}
      		/>

            </Form>
	  </Grid.Row >
	  <Grid.Row >
		 <h3>Result  </h3>
		{logindata}
                 <pre>
                  <code>{JSON.stringify(logindata, null, 2)}</code>
                </pre>

	  </Grid.Row >


	  <Grid.Row >
            <Form>
                <h3>Type2 Web3 login</h3>
                <p>Public-key and mneomonic login</p>
		<Form.Field>
                <label>Public key </label>
                <Input fluid placeholder='publickey ' />
                </Form.Field>
		<Form.Field>
  		<label>Enter mneomonic</label>
  		<Input type='text' placeholder='mnemonic' />
		</Form.Field>
		 <Button
        	label="Sign"
		  floated="right"

        	onClick={doLogin}
      		/>
		 <Button
        	label="Get Status"
		  floated="right"
        	onClick={getLogindata}
      		/>

            </Form>
	  </Grid.Row >
	  <Grid.Row >
		 <h3>Result  </h3>
		{logindata}
	  </Grid.Row >

	  <Grid.Row >
            <Form>
                <h3>Type3 Web3 login</h3>
                <p>Public-key and key in  external wallet login</p>
		<Form.Field>
                <label>Public key </label>
                <Input fluid placeholder='publickey ' />
                </Form.Field>

		 <Button
        	label="Sign and Login"
		  floated="right"

        	onClick={type3Login}
      		/>
		 <Button
        	label="Get Status"
		  floated="right"
        	onClick={getLogindata}
      		/>

            </Form>
	  </Grid.Row >
	  <Grid.Row >
		 <h3>Result  </h3>
		{logindata}
	  </Grid.Row >
          </Grid.Column>
        );
    }

export default function Login (props) {
  const { api, keyring } = useSubstrateState();
  return keyring.getPairs, api.query && api.tx  && api.rpc && api.rpc.state && api.rpc.state.getMetadata && api.tx.identity && api.tx.identity.loginWeb3Sel16 &&  api.query.identity.tokens
    ? <Main {...props} />
    : null;
}
