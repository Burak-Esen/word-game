import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
};

const globalWithDb = global as typeof globalThis & {
  _mongo: Promise<typeof mongoose>;
};

async function dbConnect () {
  if (!globalWithDb._mongo) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    };
    globalWithDb._mongo = mongoose.connect(MONGODB_URI as string, opts).then(mongoose => {
      return mongoose;
    });
  }
  return globalWithDb._mongo;
}

export default dbConnect;
