import React, { Component } from 'react';

class List extends Component {
	renderItem = (text, i) => {
		const { onClickItem } = this.props;
		
		return (
			<li key={i} onClick={() => onClickItem(i)}>
				{text}
			</li>
		)

	}
  render() {
  	console.log(this.props);
  	const { list } = this.props;

  	return (
  		<ul>
  			{list.map(this.renderItem)}
  		</ul>
  	)
  }
}

export default List;
