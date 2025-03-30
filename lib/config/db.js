import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://akashbenki:V2izO6a3ItYO4wOe@cluster0.ddf7w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log("DB Connected");
}
