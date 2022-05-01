const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
	constructor(data) {
	  this.data = data;
	  this.left = null;
	  this.right = null;
	}
 }


class BinarySearchTree {
	constructor() {
	  this.rootNode = null;
	}
 
	root() {
	  return this.rootNode;
	}
 
	add(data) {
	  this.rootNode = addWithIn(this.rootNode, data);
 
	  function addWithIn(node, data) {
		 if (!node) return new Node(data);
		 if (node.data === data) return node;
 
		 if (data < node.data) node.left = addWithIn(node.left, data);
		 else node.right = addWithIn(node.right, data);
 
		 return node;
	  }
	}
 
	has(data) {
	  return searchWithIn(this.rootNode, data);
 
	  function searchWithIn(node, data) {
		 if (!node) return false;
		 if (node.data === data) return true;
 
		 return node.data <= data
			? searchWithIn(node.right, data)
			: searchWithIn(node.left, data);
	  }
	}
 
	find(data) {
	  return findWithIn(this.rootNode, data);
 
	  function findWithIn(node, data) {
		 if (!node) return null;
		 if (node.data === data) return node;
 
		 return node.data <= data
			? findWithIn(node.right, data)
			: findWithIn(node.left, data);
	  }
	}
 
	remove(data) {
	  this.rootNode = removeNode(this.rootNode, data);
 
	  function removeNode(node, data) {
		 if (!node) return null;
		 if (data < node.data) {
			node.left = removeNode(node.left, data);
			return node;
		 }
		 if (data > node.data) {
			node.right = removeNode(node.right, data);
			return node;
		 } else {
			if (!node.left && !node.right) {
			  return null;
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
			while (minFromRight.left) {
			  minFromRight = minFromRight.left;
			}
			node.data = minFromRight.data;
 
			node.right = removeNode(node.right, minFromRight.data);
 
			return node;
		 }
	  }
	}
 
	min() {
	  if (!this.rootNode) return;
 
	  let node = this.rootNode;
	  while (node.left) {
		 node = node.left;
	  }
	  return node.data;
	}
 
	max() {
	  if (!this.rootNode) return;
 
	  let node = this.rootNode;
	  while (node.right) {
		 node = node.right;
	  }
	  return node.data;
	}
 }

module.exports = {
  BinarySearchTree
};