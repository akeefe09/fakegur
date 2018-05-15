import React from 'react';

class UploadForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null
    };
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(formType) {
  const user = window.store.getState().session.currentUser.id;
  const newImage = new FormData();
  if (this.state.imageFile) {
    newImage.append("image[image]", this.state.imageFile);
    if (formType === 'post') {
      this.props.createImage(newImage);
    } else if (formType === 'profile_pic') {
      this.props.editUser(newImage, user);
    }
    this.props.closeModal();
    }
  }

}

export default UploadForm;
