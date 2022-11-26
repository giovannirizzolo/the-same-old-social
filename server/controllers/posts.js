import Post from '../models/posts'
import User from '../models/User'

/* CREATE */ 
export const createPost = async (req, res) => {
    try{
        const {
            userId,
            description,
            picturePath
        } = req.body

        const user = await User.findById(userId)

        const newPost = new Post({
            userId,
            firstName: user.fistName,
            lastName: user.lastName,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: [],
        })

        await newPost.save()
        const post = await Post.find();

        res.status(201).json(post)

    }catch(err){
        res.status(409).json({message: err.message})
    }
}