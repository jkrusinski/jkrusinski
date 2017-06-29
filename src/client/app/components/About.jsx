import React from 'react';
import PropTypes from 'prop-types';
import { grey700, blue500, indigo500, cyan500 } from '../constants/colors.js';

import Card from './Card.jsx';
import Image from './Image.jsx';
import Social from './Social.jsx';
import Project from './Project.jsx';

const About = ({ classes }) => {
  const apiKey = 'AIzaSyB1DNpnZ23kq2IpYXYhnD2EV3Hnhbo8jXs';
  const url = `https://maps.googleapis.com/maps/api/staticmap?key=${apiKey}&center=Austin,+Texas&size=600x400&zoom=12`;

  return (
    <div>

      <div className="row">
        <div className="col-sm-7">
          <Card title="About Me" height="250px">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra lorem in erat suscipit, vitae aliquet enim auctor. Nam est eros, rutrum vel ultrices at, ultrices accumsan felis. Quisque posuere, elit eget lacinia convallis, mauris justo bibendum velit, ut tincidunt nulla tellus et lacus. Duis efficitur euismod augue, a dignissim nibh. Nulla vel ipsum elementum, vehicula ex nec, porta neque. Duis venenatis dui sit amet nisi lobortis aliquet. Nulla ullamcorper est vel rutrum facilisis. Mauris aliquet ligula non justo consequat accumsan. </p>
          </Card>
        </div>
        <div className="col-sm-5">
          <Image title="Location" img={url} height="250px" />
        </div>
      </div>

      <Card title="Projects">
        <div className="row">

          <div className="col-sm-4">
            <Project
              name="CardCast"
              img="/public/media/cardcast.png"
              github="//github.com/jkrusinski/cardcast"
              link="//cast.jkrusinski.com">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus, erat id auctor laoreet, neque metus mattis magna, quis maximus magna sapien quis ligula. Morbi at dolor tincidunt, iaculis purus a, porta nibh. Duis rutrum quam nec dapibus congue. Proin ut semper risus. Nunc suscipit lobortis ultrices. Pellentesque sed euismod lacus, et accumsan magna.
            </Project>
          </div>

          <div className="col-sm-4">
            <Project
              name="My Sentry"
              img="/public/media/mysentry.png"
              github="//github.com/jkrusinski/ballooncat"
              link="//ballooncat.jkrusinski.com">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus, erat id auctor laoreet, neque metus mattis magna, quis maximus magna sapien quis ligula. Morbi at dolor tincidunt, iaculis purus a, porta nibh. Duis rutrum quam nec dapibus congue. Proin ut semper risus. Nunc suscipit lobortis ultrices. Pellentesque sed euismod lacus, et accumsan magna.
            </Project>
          </div>

          <div className="col-sm-4">
            <Project
              name="Echoes"
              img="/public/media/echoes.png"
              github="//github.com/jkrusinski/ballooncat"
              link="//ballooncat.jkrusinski.com">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus, erat id auctor laoreet, neque metus mattis magna, quis maximus magna sapien quis ligula. Morbi at dolor tincidunt, iaculis purus a, porta nibh. Duis rutrum quam nec dapibus congue. Proin ut semper risus. Nunc suscipit lobortis ultrices. Pellentesque sed euismod lacus, et accumsan magna.
            </Project>
          </div>

          <div className="col-sm-4">
            <Project
              name="Balloon Cat"
              img="/public/media/ballooncat.png"
              github="//github.com/jkrusinski/ballooncat"
              link="//ballooncat.jkrusinski.com">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus, erat id auctor laoreet, neque metus mattis magna, quis maximus magna sapien quis ligula. Morbi at dolor tincidunt, iaculis purus a, porta nibh. Duis rutrum quam nec dapibus congue. Proin ut semper risus. Nunc suscipit lobortis ultrices. Pellentesque sed euismod lacus, et accumsan magna.
            </Project>
          </div>

          <div className="col-sm-4">
            <Project
              name="Dance Party"
              img="/public/media/danceparty.png"
              github="//github.com/jkrusinski/danceparty"
              link="//danceparty.jkrusinski.com">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus, erat id auctor laoreet, neque metus mattis magna, quis maximus magna sapien quis ligula. Morbi at dolor tincidunt, iaculis purus a, porta nibh. Duis rutrum quam nec dapibus congue. Proin ut semper risus. Nunc suscipit lobortis ultrices. Pellentesque sed euismod lacus, et accumsan magna.
            </Project>
          </div>

        </div>
      </Card>

      <div className="row">
        <div className="col-sm-3">
          <Social
            backgroundColor="#007BB6"
            icon="linkedin-box"
            name="LinkedIn"
            link="//linkedin.com/in/jkrusinski" />
        </div>
        <div className="col-sm-3">
          <Social
            backgroundColor="#171515"
            icon="github-box"
            name="GitHub"
            link="//github.com/jkrusinski" />
        </div>
        <div className="col-sm-3">
          <Social
            backgroundColor="#3050A4"
            icon="facebook-box"
            name="Facebook"
            link="//facebook.com/jkruzr" />
        </div>
        <div className="col-sm-3">
          <Social
            backgroundColor="#42B6E7"
            icon="twitter-box"
            name="Twitter"
            link="//twitter.com/jkrusinski" />
        </div>
      </div>

    </div>
  );
};

About.propTypes = {
  classes: PropTypes.object
};

export default About;
