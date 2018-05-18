![alt text](https://i.imgur.com/F6AHOiq.png "Fakegur logo")

**Fakegur**

Live: https://fakegur.herokuapp.com/

Fakegur is clone of Imgur, an image hosting website.

Imgur: http://imgur.com/

**Technologies**

The backend of Fakegur was built with Ruby on Rails (5.1.6). The frontend uses React and Redux. Images are uploaded with the Ruby Paperclip gem and stored on Amazon Web Services' S3 cloud. Fakegur uses a PostgreSQL database.

**Features**

*Post Creation and Display*
-------
When logged in, a user has access to an upload button in the nav-bar which allows them to select an image file from their computer to upload.

Once submitted with a valid title and description, the page redirects to the newly uploaded post.

*Homepage*
-------
New posts will also appear in miniature on the homepage in a grid layout. Clicking on the image will redirect the user to that specific post.

*Comments*
-------
If a user is logged in, they will be able to submit comments which display beneath a post. The submitted comments are saved to the database with references to the post and the author of the comment.

*Votes*
-------
Voting has not been fully implemented yet, but features a polymorphic association so that votes can be applied to either comments or posts.

**Future Updates**

Votes: votes have been partially implemented in the Rails backend but are not yet accessible in the fronted.

Threaded comments: Imgur has a lively community and relies heavily on commenting, so improving the commenting features to enable nested comments would be a good next step.

Albums: Paperclip does not currently allow for multiple image uploads at once so some significant refactoring might be required to allow for multiple images per post.
