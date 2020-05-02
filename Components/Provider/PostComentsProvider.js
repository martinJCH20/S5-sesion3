import React,  { Component } from 'react';
import PostComents from '../Context/PostComents';

export default class PostComentsProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: null,
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
			.then((response) => response.json())
            .then((post) =>
				this.setState({
					post,
				})
			);
	}
	render() {
		const { post } = this.state;
		const { children } = this.props;
		return (
            <PostComents.Provider value={post}>
				{children}
            </PostComents.Provider>
		);
	}
}