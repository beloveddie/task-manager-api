import { connect } from "mongoose";

const connectDB = (uri: string) => {
  return connect(uri);
};

export default connectDB;
