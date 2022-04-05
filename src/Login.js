import React, { useEffect, useState } from "react";
import { hexToString, stringToHex, stringToU8a, u8aToHex } from '@polkadot/util';

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

import { randomAsU8a, signatureVerify } from   '@polkadot/util-crypto';

const { ApiPromise, WsProvider } = require('@polkadot/api');
const {   randomAsNumber, randomAsHex } = require( '@polkadot/util-crypto');

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
  const [emaildata, setEmaildata] = useState(null);
  const [publickey, setPublickey] = useState(null);
  const [type1result, setType1result] = useState(null);
  const [type2result, setType2result] = useState(null);
  const [type3result, setType3result] = useState(null);
  const [mnemonic, setMnemonic] = useState(null);
  const [email, setEmail] = useState(null);
  const [signmessage, setSignmessage] = useState(null);
  const [password, setPassword] = useState(null);
  const [pubkeyinextension, setPubkeyinextension] = useState(null);
  const [signature, setSignature] = useState(null);
  const { api } = useSubstrateState();

  const { keyring } = useSubstrateState()

    const getEmaildata = async () => {
      try {

	     console.log(email);
  const record = await api.query.identity.studentidOf(email);

  const  recordp = JSON.parse(record);
    console.log("Email " + email + " registered with " + recordp.accountId);
    console.log(JSON.stringify(recordp));


        setEmaildata(email);
        setPublickey(recordp.accountId);

      } catch (e) {
        console.error(e);
        setType2result("Error loading email data");
      }
	    
    }

    const getPublickeydata = async () => {
      try {

  let record = await api.query.identity.emailId(publickey);

  console.log(JSON.stringify(record));

  if(record.toHuman() != null) {
  console.log(record.toHuman() + " is already linked to " + idtolink);

  setEmail(record.toHuman());
     setEmaildata(email);
  }else {
     return;
  }

//  record = await api.query.identity.studentidOf(email);
      } catch (e) {
        console.error(e);
        setType2result("Error loading publickey");
      }
	    
    }

    const getAccount = async () => {
      try {

  let record = await api.query.identity.emailId(pubkeyinextension);

  console.log(JSON.stringify(record));

  if(record.toHuman() != null) {
  console.log(record.toHuman() + " is already linked to " + idtolink);

  setEmail(record.toHuman());
     setEmaildata(email);
  }else {
        setType3result("No account for address");
     return;
  }


//  record = await api.query.identity.studentidOf(email);


      } catch (e) {
        console.error(e);
        setType3result("Error loading publickey");
      }
	    
    }

    const type1Login = async () => {
	    // Not implemented
    }

    const type2Login = async () => {

      try {

  if(!email) {
      setType2result("Account not loaded");
      return;
  }
  if(!mnemonic) {
      setType2result("Enter mnemonic ");
      return;
  }

const record = await api.query.identity.studentidOf(email);

  if(!record) {
    console.log("Email "+ email + "  not registered" );
    setType2result("Login failed, system error ");
    return;
  }else if(JSON.parse(record).accountId != publickey) {
    setType2result("Login failed, account mismatch, system error ");
    return;
  }

const payring = new Keyring({ type: 'sr25519' });
console.log(mnemonic);
const alice = payring.addFromUri(mnemonic.trim());

console.log(alice.address );
console.log(publickey);

if( alice.address != publickey.trim()) {
    console.log("Invalid mneomonic provided");
    setType2result("Login failed  ");
    return;
}else {
    console.log("Valid mneomonic allow login");
    setType2result("Login valid ");
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
const injector = await web3FromAddress(pubkeyinextension)
//const injector = await web3FromSource(account.meta.source);


// this injector object has a signer and a signRaw method
// to be able to sign raw bytes
const signRaw = injector?.signer?.signRaw;

const messagetosign = 'message to sign '+ randomAsU8a(10) ;// (Math.random() + 1).toString(36).substr(7);
if (!!signRaw) {
    // after making sure that signRaw is defined
    // we can use it to sign our message
    const { signature } = await signRaw({
        address: pubkeyinextension,
        data: stringToHex(messagetosign),
        type: 'bytes'
    });
	console.log(hexToString(signature));
//    setSignature(hexToString(signature));
//    setSignmessage(messagetosign);

   console.log("y="+messagetosign);
   console.log("x="+signature);
   console.log("z="+pubkeyinextension);
  const verification = signatureVerify(stringToHex(messagetosign),signature, pubkeyinextension);

    if (verification.crypto !== 'none') {
        setType3result("Login valid ");
      } else {
        setType3result("Login failed ");
      }

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
                <p>Not implemented </p>
		<Form.Field>
                <label>Email address </label>
                <Input fluid placeholder='Email ' onChange={(_, { value }) => setEmail(value)}
/>
                </Form.Field>
		<Form.Field>
  		<label>Enter Password</label>
  		<Input type='password' placeholder='Password' onChange={(_, { value }) => setPassword(value)}
 />
		</Form.Field>
		<Form.Field>
		 Type 1 Result:  {type1result}
		</Form.Field>
		<Form.Field>
    <Button label="Load email data" floated="right" onClick={_ => getEmaildata()} />
    <Button label="Submit" floated="right" onClick={_ => type1Login()} />
		</Form.Field>

            </Form>

	  </Grid.Row >


	  <Grid.Row >
            <Form>
                <h3>Type2 Web3 login</h3>
                <p>Public-key and mneomonic login</p>
		<Form.Field>
                <label>Public key </label>
                <Input fluid placeholder='publickey ' onChange={(_, { value }) => setPublickey(value)}
/>
                </Form.Field>
                <Form.Field>
                <label>Email: {email} </label>
                </Form.Field>
		<Form.Field>
  		<label>Enter mneomonic</label>
  		<Input type='text' placeholder='mnemonic' onChange={(_, { value }) => setMnemonic(value)}
/>
		</Form.Field>
		<Form.Field>
		 Type 2 Result  : {type2result}
		</Form.Field>
	 <Button label="Get publickey" floated="right" onClick={getPublickeydata} />
	 <Button label="Sign and login" floated="right" onClick={type2Login} />

            </Form>
	  </Grid.Row >

	  <Grid.Row >
            <Form>
                <h3>Type3 Web3 login</h3>
                <p>Extension/external wallet login</p>
		<Form.Field>
                <label>Public key </label>
                <Input fluid placeholder='publickey ' onChange={(_, { value }) => setPubkeyinextension(value)}
 />
                </Form.Field>
                <Form.Field>

	 <Button label="Check account " floated="right" onClick={getAccount} />
	 <Button label="Sign and Login" floated="right" onClick={type3Login} />
                </Form.Field>
                <Form.Field>
                <label>Email: {email} </label>
		Type 3 Result : {type3result}
                </Form.Field>

            </Form>
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
