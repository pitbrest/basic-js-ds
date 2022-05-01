const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

  add(value) {
   this.root = addInto(this.root, value);
	 
	  function addInto(node, value) {
		  if (!node) {
			  return new Node(value);
		  }
		  if (node.value === value) {
			  return node;
		  }

		  if (value < node.value) {
			node.left = addInto(node.left, value);
			} else {
				node.right = addInto(node.right, value);
			}
			return node;
	  }	  
  }

  has(value) {
		return addInto(this.root, value);

		function addInto(node, value) {
			if (!node) {
				return false;
			}
			if (node.value === value) {
				return true;
			}
			return value < node.value ?
				addInto(node.left, value) :
				addInto(node.right, value);
		}
  }

  find(/* data */) {
		throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
  }

  remove(value) {
   	this.root = removeNode(this.root, value);

		function removeNode(node, value) {
			if (!node) {
				return null;
			}
			if (value < node.value) {
				node.left = removeNode(node.left, value);
				return node;
			} else if (node.value < value) {
				node.right = removeNode(node.right, value);
				return node;
			} else {
				if (!node.left && !node.right) {
					return null
				}
				if (!node.left) {
					node = node.right;
					return node;
				}
				if (!node.right) {
					node = node.left;
					return node;
				}

				let minFromRight = node.right;

				while(minFromRight.left) {
					minFromRight = minFromRight.left;
				}
				node.value = minFromRight.value;
				node.right = removeNode(node.right, minFromRight.value);

				return node
			}			
		}
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};