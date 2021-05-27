import React, { Component } from "react";
import dl from './dulieu.json'
class NewDetail extends Component {
  render() {
    dl.map((value,key)=>{
      if(value.id==this.props.match.params.id){
        
      }
    })
    return (
      <div>
        <header className="masthead tintuc">
          <div className="container h-100">
            <div className="row h-100">
              <div className="my-auto">
                <div className="header-content mx-auto">
                  <h1 className="mb-5 text-center">Trang chi tiết</h1>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="jumbotron">
          <div className="container">
            <img
              src="http://placehold.it/1900x800"
              className="img-fluid"
              alt="/"
            />
            <p className="lead">Jumbo helper text</p>
            <hr className="my-2" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              voluptatem, facilis cum, ratione nulla eius itaque eum, molestiae
              nobis eaque deleniti corrupti optio sunt modi? Sit odit facere
              quam rem.
            </p>
            <p className="lead">
              <a
                className="btn btn-primary btn-lg"
                href="Jumbo action link"
                role="button"
              >
                Jumbo action name
              </a>
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="card border-primary col-4">
              <img className="card-img-top" src="holder.js/100px180/" alt="/" />
              <div className="card-body">
                <h4 className="card-title">Tin liên quan</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  maiores minima aperiam, eum amet fugiat sint assumenda libero
                  iste culpa animi unde rem, quasi aut, recusandae esse
                  repudiandae inventore sit!
                </p>
              </div>
            </div>
            <div className="card border-primary col-4">
              <img className="card-img-top" src="holder.js/100px180/" alt="/" />
              <div className="card-body">
                <h4 className="card-title">Tin liên quan</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  maiores minima aperiam, eum amet fugiat sint assumenda libero
                  iste culpa animi unde rem, quasi aut, recusandae esse
                  repudiandae inventore sit!
                </p>
              </div>
            </div>
            <div className="card border-primary col-4">
              <img className="card-img-top" src="holder.js/100px180/" alt="/" />
              <div className="card-body">
                <h4 className="card-title">Tin liên quan</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  maiores minima aperiam, eum amet fugiat sint assumenda libero
                  iste culpa animi unde rem, quasi aut, recusandae esse
                  repudiandae inventore sit!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewDetail;
