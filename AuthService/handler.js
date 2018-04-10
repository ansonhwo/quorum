import * as AWS from 'aws-sdk';
import rp from 'request-promise';

exports.createUser = (event, context, callback) => {
  console.log('Create user lambda');
  let body;

  if (!event.body) {
    body = typeof event === 'string' ? JSON.parse(event) : event;
  } else {
    body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
  }

  console.log(`body: ${JSON.stringify(body)}`);
};