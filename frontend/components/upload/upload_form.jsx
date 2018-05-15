import React from 'react';

class UploadForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
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

  handleSubmit(e) {
    const formData = new FormData();
    if (this.state.imageFile) {
      formData.append("post[image]", this.state.imageFile);
      this.props.createPost(formData);
      this.props.closeModal();
    }
  }

  render() {
    let submitButton =
    <button onClick={() => this.handleSubmit(this.props.formType)} className="upload_form_button">Submit</button>;
    
    return (
      <div className="upload_form">
        <div className="choose_file">
          <label htmlFor="file_upload" className="custom_file_upload">
            <span>
              Choose File
            </span>
          </label>
          <input id="file_upload" type="file" onChange={this.updateFile}/>
        </div>
        <div className="preview">
          <div className="preview_image">
            <img src={this.state.imageUrl}/>
          </div>
        </div>
        <div className="buttons">
          <button onClick={this.props.closeModal} className="cancel_button">Cancel</button>
          {submitButton}
        </div>
      </div>
    );
  }
}

export default UploadForm;
