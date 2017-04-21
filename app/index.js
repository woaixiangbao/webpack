import _ from 'lodash';
import './assets/styles/main.css'
import './assets/styles/body.css'

function component(){
	var element = document.createElement('div');

	element.innerHTML = _.join(['hello','webpack'],' ');

	return element;
}

document.body.appendChild(component());