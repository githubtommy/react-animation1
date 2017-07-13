# ReactAnimations

[tute](https://code.tutsplus.com/tutorials/introduction-to-animations-in-reactjs--cms-28083)

* I modified the file structure a little
* I added the `delete` functionality and `leave` animation
* I might have been the one to add the npm scripts, don't remember


## Usage

`git clone the-repo-link`
`npm install`

Open two terminal windows and...

`npm run watch`
`npm run serve`

## Summary

* Does a simple fade-in when adding a list element, a simple fade-out when deleting a list element
* Provides a text input and two buttons, that's it
* Requires the typical React, Babel and Webpack installs, or course
* ALSO requires the following

`npm install react-addons-css-transition-group --save`

* And the folling imports

`import ReactCSSTransitionGroup from 'react-addons-css-transition-group`

* Animation requires two things

1. Wrap the stuff you want to animate in `<ReactCSSTransitionGroup>` tags
2. Provide some css animation classes


Home.jsx


		import React from 'react';
		import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

		const Home = () => {
				return (
					<div>
						<ReactCSSTransitionGroup transitionName="anim"
							transitionAppear={true}
							transitionAppearTimeout={1000}
							transitionEnter={false}
							transitionLeave={false}>
						<h2>{'TutsPlus - Welcome to React Animations'}</h2>
						</ReactCSSTransitionGroup>
					</div>

				);
		};

		export default Home




anim.css

		.anim-appear {
			opacity: 0.01;
		}

		.anim-appear.anim-appear-active {
			opacity: 2;
			transition: opacity 0.25s ease-in;
		}

		.anim-enter {
			opacity: 0.01;
		}

		.anim-enter.anim-enter-active {
			opacity: 2;
			transition: opacity 0.25s ease-in;
		}

		.anim-leave {
			opacity: 2;
		}

		.anim-leave.anim-leave-active {
			opacity: 0.01;
			transition: opacity 0.25s ease-in;
		}
