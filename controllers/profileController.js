const { StatusCodes } = require('http-status-codes');


const profileOfUser = {
    fullNameOfUser: 'Somenath Choudhury',
    emailAddressOfUser: 'somenathchoudhury123@gmail.com',
    imageOfUser: 'https://cdn.pixabay.com/photo/2014/04/02/14/11/male-306408_1280.png',
    numberOfLikes: 100,
    numberOfViews: 54,
    numberOfHearts: 87,
    posts: [
        { id: 1, title: 'Title of Post 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt lobortis feugiat vivamus at augue eget arcu. Erat nam at lectus urna duis convallis convallis. Risus nec feugiat in fermentum posuere urna. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Mauris in aliquam sem fringilla ut morbi. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Semper viverra nam libero justo. Amet nisl suscipit adipiscing bibendum est ultricies. Semper viverra nam libero justo laoreet. Bibendum enim facilisis gravida neque convallis a cras semper.', noOfLikesOnThePost: 32, noOfCommentsOnThePost: 5 },
        { id: 2, title: 'Title of Post 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt lobortis feugiat vivamus at augue eget arcu. Erat nam at lectus urna duis convallis convallis. Risus nec feugiat in fermentum posuere urna. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Mauris in aliquam sem fringilla ut morbi. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Orci porta non pulvinar neque.', noOfLikesOnThePost: 45, noOfCommentsOnThePost: 15 }
    ],
};


const renderUserProfile = (req, res) => {

    try {

        res.status(StatusCodes.OK).json({
            success: true,
            message: 'your profile has been fetched successfully',
            totalNumberOfPosts: profileOfUser.posts.length,
            profileOfUser: profileOfUser
        });

    } catch (error) {

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Something went wrong!! Please try again!'
        })
    };

};


module.exports = {
    renderUserProfile
};