const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        numViews: {
            type: Number,
            default: 0,
        },
        isLiked: {
            type: Boolean,
            default: false,
        },
        isDisliked: {
            type: Boolean,
            default: false,
        },
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        dislikes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        image: {
            type: String,
            default:
                "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.digitalvidya.com%2Fblog%2Fwp-content%2Fuploads%2F2019%2F03%2Fpersonal-blog.jpg&tbnid=LOM8q4oS7Bl3QM&vet=12ahUKEwjPssfO39GAAxW-mFYBHQqkDnUQMygTegUIARD2AQ..i&imgrefurl=https%3A%2F%2Fwww.digitalvidya.com%2Fblog%2Fpersonal-blog%2F&docid=9QStXpUVkehdpM&w=1200&h=630&q=blog&ved=2ahUKEwjPssfO39GAAxW-mFYBHQqkDnUQMygTegUIARD2AQ",
        },
        author: {
            type: String,
            default: "Admin",
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
        timestamps: true,
    },
);

//Export the model
module.exports = mongoose.model("Blog", blogSchema);
