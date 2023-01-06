import {connect} from 'mongoose';

const url = <string>process.env.DATABASE_URL;

if (!url) {
  throw new Error('DATABASE_URL is not set');
};

export const connection = async (): Promise<void> => {
  const check = await connect(url);
  if(check){
    console.log('[db] Connected');
  } else {
    console.log('Connection failed', check);
  }
};
