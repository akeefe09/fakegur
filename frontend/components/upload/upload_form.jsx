import React from 'react';
import { Redirect } from 'react-router-dom';

class UploadForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
      title: '',
      description: '',
    };
    this.updateFile = this.updateFile.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postRoute = this.postRoute.bind(this);
  }

  postRoute(post) {
    this.props.closeModal();
    const postId = this.props.posts.post.id
    console.log('the posttttt', this);
    window.location.href = `/#/posts/${postId}`;
  }

  updateTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  updateDescription(e) {
    this.setState({
      description: e.target.value
    });
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

  handleSubmit(e) {
    const formData = new FormData();
    if (this.state.imageFile) {
      formData.append("post[image]", this.state.imageFile);
      formData.append("post[title]", this.state.title);
      formData.append("post[description]", this.state.description);
      this.props.createPost(formData).then(this.postRoute);
    } else {
      return window.alert("Add title and description");
    }
  }

  render() {
    let submitButton =
    <button onClick={() => this.handleSubmit(this.props.formType)} className="upload-form-button">Submit</button>;

    return (
      <div className="upload_form">
        <button onClick={this.props.closeModal} className="cancel-x">
          <img src="https://i.imgur.com/e6zqKZR.png" className="the-x"/>
        </button>
        <div className="choose_file">
          <div className="modal-top-box">
            <img src="https://i.imgur.com/MaSAo2d.png" className="upload-cat" />
            <img src="https://i.imgur.com/Uu2OWwo.png" className="upload-arrow" />
          </div>
          <div className="upload-text">
            <label htmlFor="file_upload" className="file-upload-box">
              Browse
            </label>
            <span>or drag images here (when I add this feature)</span>
          </div>

          <input id="file_upload" type="file" onChange={this.updateFile}/>

          <div className="upload-inputs">
            <input type="text" placeholder="Title" onChange={this.updateTitle} />
            <input type="text" placeholder="Description" onChange={this.updateDescription} />
          </div>

        </div>
        <div className="preview">
          <div className="preview-image">
            <img className="preview-upload" src={this.state.imageUrl}/>
          </div>
        </div>
        <div className="input-div">

        </div>
        <div className="upload-buttons">
          <button onClick={this.props.closeModal} className="cancel-button">Cancel</button>
          {submitButton}
        </div>
      </div>
    );
  }
}

export default UploadForm;
