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
