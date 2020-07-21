import dotenv from 'dotenv';

dotenv.config();

const {
  PORT,
} = process.env;

export default Object.freeze({
  PORT
});
