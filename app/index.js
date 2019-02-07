import fluffyBunnies from './add_to_dom';
//can import defaults and it can be anything you want (in between import and from - no curly brackets = default)
import calcDefault, {add, myArray} from './calculate';

calcDefault();

console.log('My Array: ', myArray);

fluffyBunnies('h1', `2+8 = ${add(2, 8)}`);
